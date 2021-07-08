const express = require("express");

const app = express();

const ejs = require("ejs");

const https = require("https");

const ytdl = require("ytdl-core");

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/download", function(req, res){
  const url = req.query.url;
  // const https = require('https')
// https.get(url, res => {
//   let data = '';
//   res.on('data', chunk => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     data = JSON.parse(data);
//     console.log(data);
//   })
// }).on('error', err => {
//   console.log(err.message);
// })
  // if(res.statusCode !== 200){
  //   res.render("failed");
  // }
  // else{
  //   res.render("download");
  //   var url = req.query.url;
  //   // const info = ytdl.videoInfo(url);
  //   console.log(url);
  // }
// });
// app.get('/download', (req, res) => {
//
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');
    ytdl(url, {format: 'mp4'}).pipe(res);
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});
