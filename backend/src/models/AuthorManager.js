const AbstractManager = require("./AbstractManager");

class AuthorManager extends AbstractManager {
  constructor() {
    super({ table: "author" });
  }

  insert(author) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, author_alias, biography, birth_date, death_date) VALUES (?, ?, ?, ?, ?, NULL)`,
      [
        author.firstname,
        author.lastname,
        author.authorAlias,
        author.biography,
        author.birthDate,
        author.deathDate,
      ]
    );
  }

  update(author) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?,
      lastname =?,
      author_alias = ?,
      biography = ?,
      birth_date = ?,
      death_date = ?
      where id = ?`,
      [
        author.firstname,
        author.lastname,
        author.authorAlias,
        author.biography,
        author.birthDate,
        author.deathDate,
        author.id,
      ]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT au.id, au.firstname, au.lastname, au.author_alias AS authorAlias, au.biography, au.birth_date AS birthDate, au.death_date AS deathDate FROM ${this.table} AS au`
    );
  }
}

module.exports = AuthorManager;
