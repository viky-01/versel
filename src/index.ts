import express from 'express';
import cors from 'cors';
import {simpleGit} from 'simple-git';
import { generate } from './utils.js';


const app = express();
app.use(cors());


app.use(express.json());

const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello, World!');
})

app.post("/deploy" , async(req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();
    await simpleGit().clone(repoUrl, `output/${id}`);
    console.log(repoUrl);
    res.json({
        id: id
    })

});

app.listen (port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})