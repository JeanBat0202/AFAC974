const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "favorite" });
  }

  insert(favorite) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, art_id) VALUES (?, ?)`,
      [favorite.userId, favorite.artId]
    );
  }

  update(favorite) {
    return this.database.query(
      `UPDATE ${this.table} SET art_id = ?,
      user_id = ?`,
      [favorite.artId, favorite.userId]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT fav.user_id AS userId fav.art_id AS artId FROM ${this.table} AS fav JOIN art ON art.id = fav.art_id JOIN user ON user.id = fav.user_id`
    );
  }
}

module.exports = FavoriteManager;
