const express=require('express')
const app=express()
const port =6000

const db = require("./database/connection");
const router =require("./router/routes")
app.use(express.json());
app.use("/",router)
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})



db.sync().then(() => {
    app.listen(port, (err) => {
        if (err) {
            throw err
        } else {
            console.log(`your app is running on PORT : ${port}`)
          }
        })
    }).catch(err => console.log("Error: " + err));

