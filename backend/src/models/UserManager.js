const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, password, role_id) VALUES (?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, user.role_id]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?,
      lastname =?,
      email = ?,
      password = ?,
      role_id = ?`,

      [user.firstname, user.lastname, user.email, user.password, user.role_id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT u.id, u.firstname, u.lastname, u.email, u.password, u.role_id AS role_id, r.name FROM ${this.table} AS u JOIN role AS r ON r.id = u.role_id `
    );
  }
}

module.exports = UserManager;
