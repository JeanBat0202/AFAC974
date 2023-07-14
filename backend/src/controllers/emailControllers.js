require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");
const nodemailerHbs = require("nodemailer-express-handlebars");

const {
  SMTP_SENDIN,
  SMTP_PORT_SENDIN,
  SMTP_SENDIN_USER,
  SMTP_SENDIN_PASSWORD,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_SENDIN,
  port: SMTP_PORT_SENDIN,
  secure: false,
  auth: {
    user: SMTP_SENDIN_USER,
    pass: SMTP_SENDIN_PASSWORD,
  },
});

const sendEmailWithHbsTemplate = (req, res) => {
  const { receiver, firstname, lastname, imageToSend, titleToSend, message } =
    req.body;

  const options = {
    from: SMTP_SENDIN_USER,
    to: receiver,
    subject: "Test with Nodemailer with Hbs",
    attachements: [
      {
        filename: imageToSend,
        path: path.join(
          __dirname,
          `../public/assets/images/arts/${imageToSend}`
        ),
        cid: { imageToSend },
      },
    ],
    template: "index",
    context: {
      firstname,
      lastname,
      src: imageToSend,
      alt: titleToSend,
      link: "https://afac974.laloupe-1.wilders.dev",
      linkName: "Afac974",
      message,
    },
  };

  // configuration de nodemailer pour utiliser un template hbs
  transporter.use(
    "compile",
    nodemailerHbs({
      viewEngine: {
        extName: ".hbs",
        partialsDir: path.join(__dirname, "../views"),
        layoutsDir: path.join(__dirname, "../views/layouts"),
        defaultLayout: "",
      },
      viewPath: path.join(__dirname, "../views"),
      extName: ".hbs",
    })
  );

  transporter
    .sendMail(options)
    .then((/* values */) => {
      // console.log(values);
      res.send("Email sent with success");
    })
    .catch((/* err */) => {
      // console.err(err);
      res.sendStatus(500);
    });
};

module.exports = {
  sendEmailWithHbsTemplate,
};
