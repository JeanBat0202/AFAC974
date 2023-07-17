const jwt = require("jsonwebtoken");

const argon2 = require("@node-rs/argon2");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(req.method === "POST" ? 201 : 200).send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  models.user
    .insert(user)
    .then(([result]) => {
      res.status(201).json({ id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  models.user
    .findByEmail(email)
    .then(([users]) => {
      if (users.length === 0) {
        res.sendStatus(404);
      } else if (!argon2.verifySync(users[0].hashedPassword, password)) {
        res.sendStatus(404);
      } else {
        const userData = { ...users[0] };
        const token = jwt.sign(
          {
            id: userData.id,
            role: userData.role,
          },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRESIN }
        );
        delete userData.hashedPassword;
        res
          .cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.JWT_SECURE === "true",
            maxAge: parseInt(process.env.JWT_COOKIE_MAXAGE, 10),
          })
          .status(200)
          .json(userData);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const hashPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    res.sendStatus(400);
  } else {
    argon2
      .hash(password, hashingOptions)
      .then((hashedPassword) => {
        req.body.hashedPassword = hashedPassword;
        delete req.body.password;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  hashPassword,
};
