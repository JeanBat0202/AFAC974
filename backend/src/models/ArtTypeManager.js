const AbstractManager = require("./AbstractManager");

class ArtTypeManager extends AbstractManager {
  constructor() {
    super({ table: "art_type" });
  }

  insert(artType) {
    return this.database.query(`INSERT INTO ${this.table} (type) VALUES (?)`, [
      artType.type,
    ]);
  }

  update(artType) {
    return this.database.query(
      `UPDATE ${this.table} SET type = ?,`[artType.type]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT at.id, at.type FROM ${this.table} AS at`
    );
  }
}

module.exports = ArtTypeManager;
