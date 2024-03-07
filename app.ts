import express from "express";

const app = express()


app.get("/", (req, res, next) => {
    res.send("hello world")
})

app.listen(5000,()=>console.log("server started at 5000"))