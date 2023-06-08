const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.database.query(
      `INSERT INTO ${this.table} (cat_name) VALUES (?)`,
      [category.catName]
    );
  }

  update(category) {
    return this.database.query(`UPDATE ${this.table} SET cat_name = ?`, [
      category.catName,
    ]);
  }

  findAll() {
    return this.database.query(
      `SELECT category.id, category.cat_name AS catName FROM ${this.table}`
    );
  }
}

module.exports = CategoryManager;
