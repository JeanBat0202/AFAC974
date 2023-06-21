const AbstractManager = require("./AbstractManager");

class ArtManager extends AbstractManager {
  constructor() {
    super({ table: "art" });
  }

  insert(art) {
    return this.database.query(
      `INSERT INTO ${this.table} (image_ref, title, short_title, image, creation_date, width, height, about, article, category_id, art_type_id, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        art.imageRef,
        art.title,
        art.shortTitle,
        art.image,
        art.creationDate,
        art.width,
        art.height,
        art.about,
        art.article,
        art.categoryId,
        art.artTypeId,
        art.authorId,
      ]
    );
  }

  update(art) {
    return this.database.query(
      `UPDATE ${this.table} SET image_ref = ?,
      title =?,
      short_title = ?,
      image = ?,
      creation_date = ?,
      width = ?,
      height = ?,
      about = ?,
      article = ?,
      category_id = ?,
      art_type_id =?,
      author_id = ?
      where id = ?`,
      [
        art.imageRef,
        art.title,
        art.shortTitle,
        art.image,
        art.creationDate,
        art.width,
        art.height,
        art.about,
        art.article,
        art.categoryId,
        art.artTypeId,
        art.authorId,
        art.id,
      ]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT a.id, a.image_ref AS imageRef, a.title, a.short_title AS shortTitle, a.image, a.creation_date AS creationDate, a.width, a.height, a.about, a.article, c.cat_name AS catName, at.type, au.firstname, au.lastname, au.author_alias AS authorAlias FROM ${this.table} AS a JOIN category AS c ON c.id = a.category_id JOIN art_type AS at ON at.id = a.art_type_id JOIN author AS au ON au.id = a.author_id`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT a.image_ref AS imageRef, a.title, a.short_title AS shortTitle, a.image, a.creation_date AS creationDate, a.width, a.height, a.about, a.article, a.author_id, c.cat_name AS catName, at.type, au.firstname, au.lastname, au.author_alias AS authorAlias FROM ${this.table} AS a JOIN category AS c ON c.id = a.category_id JOIN art_type AS at ON at.id = a.art_type_id JOIN author AS au ON au.id = a.author_id WHERE a.id = ?`,
      [id]
    );
  }
}

module.exports = ArtManager;
