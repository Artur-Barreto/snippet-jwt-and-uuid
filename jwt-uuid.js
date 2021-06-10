const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');

const id = uuidv4()


const token = jwt.sign(
    { 
        name: "Name",
        id: id, 
        sub: "testers",
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 360 * 60
    },
  "Testando"
);

console.log(token);
