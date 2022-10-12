const express = require("express");
const path = require("path");
const router = express.Router();
const routes = require("./routes/API");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.listen(PORT, () => console.log(`server is listening on ${PORT}`));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
app.use("/", routes);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`===server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: `${req.body.mail.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mail.email}`,
    text: `${req.body.mail.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});
