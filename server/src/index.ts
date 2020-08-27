export const app = require('./app')
const dbConfig = require('./api/config/db.config').mongoURI
const mongoose = require('mongoose')
const port = process.env.PORT || 5000


mongoose.connect(dbConfig, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => {
        console.log("")
        console.log("============================================================")
        console.log('Mongo successfully connected!')
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}!`);
            console.log(`You can connect to the API using URL: http://localhost:${port}`);
            console.log("============================================================")
            console.log("")
        });
    })
    .catch((err: any) => console.log(err));

