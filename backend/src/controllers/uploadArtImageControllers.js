const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/arts"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-arts-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadArtImage = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      if (!req.file) {
        req.body.image = null;
      } else {
        req.body.image = req.file.filename;
      }
      next();
    }
  });
};

module.exports = { uploadArtImage };
