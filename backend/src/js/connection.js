import { createConnection } from 'msql';
// let config = require ('./config.js')

let con = createConnection({
    host: "localhost",
    user: config.user,
    password: config.password,
    database: config.database
})

con.connect(function(err) {
    if (err) throw err;
    else console.log("Connected!");
})

con.end()