const AbstractManager = require("./AbstractManager");

class ArtManager extends AbstractManager {
  constructor() {
    super({ table: "art" });
  }

  insert(art) {
    return this.database.query(
      `INSERT INTO ${this.table} (image_ref, title, short_title, image, day, month, year, width, height, about, article, category_id, art_type_id, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        art.imageRef,
        art.title,
        art.shortTitle,
        art.image,
        art.day,
        art.month,
        art.year,
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

  update(art, withImg = false) {
    let sql = `UPDATE ${this.table} SET image_ref = ?,
    title =?,
    short_title = ?,
    day = ?,
    month = ?,
    year = ?,
    width = ?,
    height = ?,
    about = ?,
    article = ?,
    category_id = ?,
    art_type_id =?,
    author_id = ?
    where id = ?`;
    let values = [
      art.imageRef,
      art.title,
      art.shortTitle,
      art.day,
      art.month,
      art.year,
      art.width,
      art.height,
      art.about,
      art.article,
      art.categoryId,
      art.artTypeId,
      art.authorId,
      art.id,
    ];
    if (withImg) {
      sql = `UPDATE ${this.table} SET image_ref = ?,
      title =?,
      short_title = ?,
      image = ?,
      day = ?,
      month = ?,
      year = ?,
      width = ?,
      height = ?,
      about = ?,
      article = ?,
      category_id = ?,
      art_type_id =?,
      author_id = ?
      where id = ?`;
      values = [
        art.imageRef,
        art.title,
        art.shortTitle,
        art.image,
        art.day,
        art.month,
        art.year,
        art.width,
        art.height,
        art.about,
        art.article,
        art.categoryId,
        art.artTypeId,
        art.authorId,
        art.id,
      ];
    }
    return this.database.query(sql, values);
  }

  findAll() {
    return this.database.query(
      `SELECT a.id, a.image_ref AS imageRef, a.title, a.short_title AS shortTitle, a.image, a.day, a.month, a.year, a.width, a.height, a.about, a.article, c.cat_name AS catName, at.type, au.firstname, au.lastname, au.author_alias AS authorAlias FROM ${this.table} AS a JOIN category AS c ON c.id = a.category_id JOIN art_type AS at ON at.id = a.art_type_id JOIN author AS au ON au.id = a.author_id ORDER BY a.id `
    );
  }

  find(id) {
    return this.database.query(
      `SELECT a.id , a.image_ref AS imageRef, a.title, a.short_title AS shortTitle, a.image, a.day, a.month, a.year, a.width, a.height, a.about, a.article, a.author_id, c.id AS categoryId, c.cat_name AS catName, at.id AS artTypeId, at.type, au.firstname, au.lastname, au.author_alias AS authorAlias FROM ${this.table} AS a JOIN category AS c ON c.id = a.category_id JOIN art_type AS at ON at.id = a.art_type_id JOIN author AS au ON au.id = a.author_id WHERE a.id = ?`,
      [id]
    );
  }
}

module.exports = ArtManager;
