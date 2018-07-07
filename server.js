
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");

//below brought in from scraping hmwk.
var fs = require('fs');
var request = require("request");
var axios = require("axios");
var cheerio = require("cheerio");
// Require all models Crafts and Note.
var db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoNJDB";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// ******************************************************************************************

//******************************************************************************************


// ******************* everything between the *'s is stolen content from the scrape hmwk.


console.log("\n***********************************\n" +
  "\n***********************************\n");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

//*SCRAPE TO THE DB for Outdoor site.
//*===========================================================================================================//
app.get("/scrape/outdoor", function (req, res) {
  request("https://www.funnewjersey.com/upload_user/best_of_new_jersey/best_outdoor_adventures_in_nj.htm", function (error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    var $ = cheerio.load(html);
    //holds data
    var results = [];

    // url: String,
    // description: String,
    // location: String,
    // imageURL: String,
    // phoneNumber: String, //*[@id="centercolumnmobile"]/div/div/table[1]/tbody/tr/td/comment()[5]
    ////*[@id="centercolumnmobile"]/div/div/table[1]/tbody/tr/td/a[2]/img


    $(".main_box > table").each(function (i, element) {
      var title = $(element).find('tbody > tr > td > a').text().trim();
      var url = $(element).find('tbody > tr > td > a').attr("href");
      var phoneNumber = $(element).find('tbody > tr > td > strong:nth-child(6)').text().trim();
      var imageURL = $(element).find('tbody > tr > td > a:nth-child(2) > img').attr("src");
      var location = $(element).find('tbody > tr > td > div > strong').text().trim();
      var description = $(element).find('tbody > tr > td').text().trim();

      
      db.TodoNJ.update({
        title: title,
        url: (url),
        phoneNumber: phoneNumber,
        imageURL: imageURL,
        location: location,
        description: description
      }, {
          $setOnInsert: {
            title: title,
            url: (url),
            phoneNumber: phoneNumber,
            imageURL: imageURL,
            location: location,
            description: description
          }
        }, { upsert: true },
        function (err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          } else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        }
      )

    })
    //this has to be here to end the request.
    res.send("Scrape Complete");
  });
});
//*===========================================================================================================//
//

//*SCRAPE TO THE DB FOR INDOOR SITE
//*===========================================================================================================//
app.get("/scrape/indoor", function (req, res) {
  request("https://www.funnewjersey.com/upload_user/best_of_new_jersey/best_rainy_day_activities_in_nj.htm", function (error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    var $ = cheerio.load(html);
    //holds data
    var results = [];

    // //*[@id="centercolumnmobile"]/div/div/table[1]/tbody/tr/td/div/strong
  
    $(".main_box > table").each(function (i, element) {
      var title = $(element).find('tbody > tr > td > a').text().trim();
      var url = $(element).find('tbody > tr > td > a').attr("href");
      var phoneNumber = $(element).find('tbody > tr > td > strong:nth-child(6)').text().trim();
      var imageURL = $(element).find('tbody > tr > td > img').attr("src");
      var location = $(element).find('tbody > tr > td > div > strong').text().trim();
      var description = $(element).find('tbody > tr > td').text().trim();

      
      db.TodoNJ.update({
        title: title,
        url: (url),
        phoneNumber: phoneNumber,
        imageURL: imageURL,
        location: location,
        description: description
      }, {
          $setOnInsert: {
            title: title,
            url: (url),
            phoneNumber: phoneNumber,
            imageURL: imageURL,
            location: location,
            description: description
          }
        }, { upsert: true },
        function (err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          } else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        }
      )

    })
    //this has to be here to end the request.
    res.send("Scrape Complete");
  });
});
//*===========================================================================================================//

//*SCRAPE TO THE DB FOR BEST 50 OVERALL
//*===========================================================================================================//
app.get("/scrape/best50", function (req, res) {
  request("https://www.funnewjersey.com/upload_user/cool_things_to_do/top_50_attractions_in_new_jersey.htm", function (error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    var $ = cheerio.load(html);
    //holds data
    var results = [];

    // //*[@id="centercolumnmobile"]/div/div/table[1]/tbody/tr/td/div/strong
    //*[@id="centercolumnmobile"]/div/div/div[3]/font[1]/table/tbody/tr/td/div[1]/font[1]/font/font/a/strong/font
    //*[@id="centercolumnmobile"]/div/div/div[3]/font[1]/table/tbody/tr/td/div[1]/font[2]/span/strong/font
  //*[@id="centercolumnmobile"]/div/div/div[3]/table[1]/tbody/tr/td/div[1]/strong/font/span/strong/font

    $(".main_box > table").each(function (i, element) {
      var title = $(element).find('tbody > tr > td > div > font > font > font > a > strong > font').text().trim();
      var url = $(element).find('tbody > tr > td > a').attr("href");
      var phoneNumber = $(element).find('tbody > tr > td > div > strong > font > span > strong > font').text().trim();
      var imageURL = $(element).find('tbody > tr > td > img').attr("src");
      var location = $(element).find('tbody > tr > td > div > strong').text().trim();
      var description = $(element).find('tbody > tr > td').text().trim();

      
      db.TodoNJ.update({
        title: title,
        url: (url),
        phoneNumber: phoneNumber,
        imageURL: imageURL,
        location: location,
        description: description
      }, {
          $setOnInsert: {
            title: title,
            url: (url),
            phoneNumber: phoneNumber,
            imageURL: imageURL,
            location: location,
            description: description
          }
        }, { upsert: true },
        function (err, inserted) {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          } else {
            // Otherwise, log the inserted data
            console.log(inserted);
          }
        }
      )

    })
    //this has to be here to end the request.
    res.send("Scrape Complete");
  });
});
//*===========================================================================================================//
app.get("/get", function (req, res) {
  title = 'title stuff here';
  url = 'url line here';

  db.TodoNJ.update({
    title: title,
    url: (url)
  }, {
      $setOnInsert: {
        title: title,
        url: (url)
      }
    }, { upsert: true },
    function (err, inserted) {
      if (err) {
        // Log the error if one is encountered during the query
        console.log(err);
      } else {
        // Otherwise, log the inserted data
        console.log(inserted);
      }
    }
  )
})

//*WORKS
app.get("/all", function (req, res) {

  // Find all results from the db
  db.TodoNJ.find({}, function (error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    //  send data to the browser as json
    else {
      res.json(found);
    }
  })
  console.log("successfully grabbed all");
});
//above do i need to add a populate for the saved part later?
// *****************

// Define API routes here
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`woohoo! ==> Server now on port ${PORT}!`);
});
