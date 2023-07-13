// require("dotenv").config();
// const nodemailer = require("nodemailer");
// const path = require("path");
// const nodemailerHbs = require("nodemailer-express-handlebars");

// const {
//   SMTP_SENDIN,
//   SMTP_PORT_SENDIN,
//   SMTP_SENDIN_USER,
//   SMTP_SENDIN_PASSWORD,
//   MAIL_RECEIVER,
// } = process.env;

// const transporter = nodemailer.createTransport({
//   host: SMTP_SENDIN,
//   port: SMTP_PORT_SENDIN,
//   secure: false,
//   auth: {
//     user: SMTP_SENDIN_USER,
//     pass: SMTP_SENDIN_PASSWORD,
//   },
// });

// const sendEmailWithText = (req, res) => {
//   const options = {
//     from: SMTP_SENDIN_USER,
//     to: MAIL_RECEIVER,
//     subject: "Test with Nodemailer",
//     text: "Hello, this is my first mail sent with Nodemailer",
//   };

//   transporter
//     .sendMail(options)
//     .then((values) => {
//       console.log(values);
//       res.send("Email sent with success");
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500);
//     });
// };

// const sendEmailWithHtml = (req, res) => {
//   const { email, name, message } = req.body;

//   const options = {
//     from: SMTP_SENDIN_USER,
//     to: MAIL_RECEIVER,
//     cc: email,
//     subject: "Test with Nodemailer with HTML",
//     html: `<h2 style="color: red; font-size: 32px">Hello Nodemailer</h2><p>Message from: ${name}<br/>Message: ${message}</p>`,
//   };

//   transporter
//     .sendMail(options)
//     .then((values) => {
//       console.log(values);
//       res.send("Email sent with success");
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500);
//     });
// };

// const sendEmailWithHtmlAndImg = (req, res) => {
//   const { email, name, message } = req.body;

//   console.log(__dirname);

//   const options = {
//     from: SMTP_SENDIN_USER,
//     to: MAIL_RECEIVER,
//     cc: email,
//     subject: "Test with Nodemailer with HTML",
//     html: `<h2 style="color: red; font-size: 32px">Hello Nodemailer</h2><img style="width: 150px; border: 1px solid black;" src="https://weu-az-web-ca-cdn.azureedge.net/mediacontainer/medialibraries/mypetdoctor/images/blog-images/grey-kitten.webp?ext=.webp" alt="my phone"/><p>Message from: ${name}<br/>Message: ${message}</p>`,
//     attachements: [
//       {
//         filename: "3310-nokia.jpg",
//         path: path.join(__dirname, "../public/assets/images/3310.jpg"),
//         // cid: "3310.jpg",
//       },
//     ],
//   };

//   transporter
//     .sendMail(options)
//     .then((values) => {
//       console.log(values);
//       res.send("Email sent with success");
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500);
//     });
// };

// const sendEmailWithHbsTemplate = (req, res) => {
//   const { firstname, lastname } = req.body;

//   const options = {
//     from: SMTP_SENDIN_USER,
//     to: MAIL_RECEIVER,
//     subject: "Test with Nodemailer with Hbs",
//     attachements: [
//       {
//         filename: "3310-nokia.jpg",
//         path: path.join(__dirname, "../public/assets/images/3310-nokia.jpg"),
//         cid: "3310-nokia.jpg",
//       },
//     ],
//     template: "index",
//     context: {
//       firstname,
//       lastname,
//       src: "3310-nokia.jpg",
//       alt: "my favorite phone",
//       link: "https://www.aliciacqt.fr",
//       linkName: "the very best website in the whole world",
//     },
//   };

//   // configuration de nodemailer pour utiliser un template hbs
//   transporter.use(
//     "compile",
//     nodemailerHbs({
//       viewEngine: {
//         extName: ".hbs",
//         partialsDir: path.join(__dirname, "../views"),
//         layoutsDir: path.join(__dirname, "../views/layouts"),
//         defaultLayout: "",
//       },
//       viewPath: path.join(__dirname, "../views"),
//       extName: ".hbs",
//     })
//   );

//   transporter
//     .sendMail(options)
//     .then((values) => {
//       console.log(values);
//       res.send("Email sent with success");
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500);
//     });
// };

// module.exports = {
//   sendEmailWithText,
//   sendEmailWithHtml,
//   sendEmailWithHtmlAndImg,
//   sendEmailWithHbsTemplate,
// };
