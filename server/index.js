import path from 'path';
import express from 'express';


const server = express();

server.use(express.static(path.join(__dirname, '../assets')))


server.listen(12306, _ => {
    console.log('server is listening on 12306!')
})