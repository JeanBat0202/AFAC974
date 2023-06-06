const router = require("express").Router();

/* ---------------------------------- BASE DE TRAVAIL POUR REQUÊTES SQL ---------------------------------- */
/* -------------------------------- POUR CRÉER VOS MANAGERS ET CONTROLLERS -------------------------------- */
/* -------------------------------- CODE À SUPPRIMER QUAND VOUS AUREZ TERMINÉ ------------------------------ */

/* ---------------------------------- category TABLE ---------------------------------- 
const getCategories = (req, res) => {
  const sql = "SELECT cat_name AS catName FROM category";
  connection
    .query(sql)
    .then(([categories]) => res.json(categories))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createCategory = (req, res) => {
  const { catName } = req.body;

  if (!catName) {
    return res.sendStatus(422);
  }

  const sql = "INSERT INTO category (cat_name) VALUES (?)";
  return connection.query(sql, [catName]).then(([result]) => {
    return res.status(201).json({
      id: result.insertId,
      catName,
    });
  });
};

---------------------------------- art_type TABLE ----------------------------------
const getArtTypes = (req, res) => {
  const sql = "SELECT type FROM art_type AS artType";
  connection
    .query(sql)
    .then(([artTypes]) => res.json(artTypes))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createArtType = (req, res) => {
  const { type } = req.body;

  if (!type) {
    return res.sendStatus(422);
  }

  const sql = "INSERT INTO art_type (type) VALUES (?)";
  return connection.query(sql, [type]).then(([result]) => {
    return res.status(201).json({
      id: result.insertId,
      type,
    });
  });
};

---------------------------------- author TABLE ----------------------------------
const getAuthors = (req, res) => {
  const sql =
    "SELECT firstname, lastname, author_alias AS authorAlias, biography, birth_date AS birthDate, death_date AS deathDate FROM author";
  connection
    .query(sql)
    .then(([authors]) => res.json(authors))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createAuthor = (req, res) => {
  const { firstname, lastname, authorAlias, biography, birthDate, deathDate } =
    req.body;

  if (!firstname || !lastname || !biography || !birthDate) {
    return res.sendStatus(422);
  }

  const sql =
    "INSERT INTO author (firstname, lastname, author_alias, biography, birth_date, death_date) VALUES (?, ?, ?, ?, ?, NULL)";
  return connection
    .query(sql, [
      firstname,
      lastname,
      authorAlias,
      biography,
      birthDate,
      deathDate,
    ])
    .then(([result]) => {
      return res.status(201).json({
        id: result.insertId,
        firstname,
        lastname,
        authorAlias,
        biography,
        birthDate,
        deathDate,
      });
    });
};
*/

const artControllers = require("../controllers/artControllers");

router.get("/", artControllers.browse);
router.get("/:id", artControllers.read);
router.put("/:id", artControllers.edit);
router.post("/", artControllers.add);
router.delete("/:id", artControllers.destroy);

module.exports = router;
