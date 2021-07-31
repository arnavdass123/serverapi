const express = require("express");
const Joi = require("joi");
const app = express();

const courses = [
  {
    id: 1,
    name: "y2mate.com - Ed Sheeran  Shape of You Official Video_v720P.mp4",
  },
  { id: 2, name: "y2mate.com - NO EXCUSES  Best Motivational Video_1080p.mp4" },
  { id: 3, name: "y2mate.com - Shawn Mendes  24 Hours Lyric Video_1080p.mp4" },
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


app.get("/my-data-json-reciever", (req, res) => {
 res.sendFile(__dirname+"/hello.html")
});


app.get("/api/courses", (req, res) => {
  res.send(req.params);
});

// port
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on ${port}`));
