export const app = require("../App");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const dbConfig = require("./api/config/db.config").mongoURI;

mongoose
  .connect(dbConfig, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(" ");
    console.log(
      " ============================================================ "
    );
    console.log(" Mongo successfully connected!");
    console.log(
      " ------------------------------------------------------------ "
    );
    app.listen(port, () => {
      console.log(` Server is listening on port ${port}! `);
      console.log(
        ` You can connect to the API using URL: http://localhost:${port} `
      );
      console.log(
        " ============================================================ "
      );
      console.log(" ");
    });
  })
  .catch((err: any) => console.log(err));
