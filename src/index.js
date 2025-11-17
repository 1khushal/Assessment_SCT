const app = require("./app");

app.get("/", (req, res) => {
  res.send("Hello from CI/CD Pipeline!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));

module.exports = app;
