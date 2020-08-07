export
const app = require('./app')

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("")
    console.log("============================================================")
    console.log(`Server is listening on port ${port}!`);
    console.log(`You can connect to the API using URL: http://localhost:${port}`);
    console.log("============================================================")
    console.log("")
});

