import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
