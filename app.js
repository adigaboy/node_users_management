const Users = require("./models/users")
const express = require('express');
const app = express();
app.use(express.json());
app.use('/users', Users);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));

module.exports = app