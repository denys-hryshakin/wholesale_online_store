export const app = require("../App");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_CONNECTION, {
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
