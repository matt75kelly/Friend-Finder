// Node Module is necessary for getting a correct file path that works
// across multiple possible deployments
const path = require("path");

// These routes return an HTML page upon a "GET" request
module.exports = app=>{
    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};