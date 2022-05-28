const express = require('express')
const app = express()
const cors = require('cors')
const route = require('./route/route')
const language = require("i18n")

app.get("/", (req, res) => {
    res.send("hello world")
})

/*
 ===============   LANGUAGE    =================
 1.Define unique Key - pair in Locales / Messsages.js
 2.It will add entry in respective json files
 3.By default language is set to english User can change by passing language in
  Header : Accept-Language : 'en'
  Query : url?lang=en
*/
language.configure({
  locales: ["en", "fr"],
  defaultLocale: "en",
  autoReload: true,
  directory: __dirname + "/locales",
  queryParameter: "lang",
  objectNotation: true,
  syncFiles: true
});
app.use(language.init); // MULTILINGUAL SETUP

// ====================================
// Route need to allow cross origin
// ====================================
app.use(cors({ origin: "*", credentials: true }));
// app.use(cors())


//enabling bodyparser to accept json also
app.use(
  express.json({
    limit: "500mb",
    type: "application/json",
    extended: true,
    verify: (req, res, buf) => {
      req.rawBody = buf;
    }
  })
);

app.use("/api/v1/", route)

module.exports = app