import  express from "express";

const app = express()
const port: number = 2000

const server = app.listen(port, ()=>{
    console.log("server is listening",port);
    
})

const App = express()
const Port: number = 2000

const Server = app.listen(port, ()=>{
    console.log("server is listening",port);
    
})

process.on("uncaughtException",(error:Error)=>{
    console.log(`uncaughtException error: ${error}`)

    process.exit(1)
})
process.on("unhandledRejection",(error:Error)=>{
    console.log(`unhandledRejection error: ${error}`)

    Server.close(()=>{
        process.exit(1)
    })
})

