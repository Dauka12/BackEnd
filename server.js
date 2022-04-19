const express = require('express');
const app = express();
const port = 3000;

app.use("/", require("./routes/main"))
app.use("/registration", require("./routes/registration"))
app.use("/login", require("./routes/login"))
app.use("/about", require("./routes/about"))
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);