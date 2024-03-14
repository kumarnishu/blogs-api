import express, { NextFunction, Request, Response } from 'express';

const app = express()

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(req.user)
    res.send("hello world")
})

app.listen(5000, () => console.log("server started at 5000"))