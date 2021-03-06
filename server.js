const express = require ('express');
const db = require('./db/connection');
const { companyMenu } = require('./Index');


const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log(`
    ------------------
    Employee Database
    ------------------`)
    companyMenu();
    });
