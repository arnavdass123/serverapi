const express = require("express");
const Joi = require("joi");
const app = express();
let port = process.env.PORT || 3000;

const courses = [
  {
    id: 1,
    name: "y2mate.com - Ed Sheeran  Shape of You Official Video_v720P.mp4",
  },
  { id: 2, name: "y2mate.com - NO EXCUSES  Best Motivational Video_1080p.mp4" },
  { id: 3, name: "y2mate.com - Shawn Mendes  24 Hours Lyric Video_1080p.mp4" },
  { id: 4, name: "hello bhai kaisa hai" },
  { id: 5, name: "ok ab mujhe nind aa rahi hai " },
  { id: 6, name: "ok data humare pass hai" },
  { id: 7, name: "is 24 hours is hours" },
  { id: 8, name: " ha bhai kaisa hai" },
  { id: 9, name: "ok bhai kaisa hai thik humain" },
  { id: 10, name: "acha mmain ja raha hu " },
  { id: 11, name: "ok thik hai main soch raha hu" },
  { id: 12, name: "yar mere pass nahi aa " },
  { id: 13, name: "thik fir main kaya karu bata de" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("the course with the given ID was not found");
  }
  res.send(course);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/hello.html");
});

// app.get("/api/courses", (req, res) => {
//   res.send(req.params);
// });

// port
app.listen(3000, () => console.log(`listening on ${port}`));
