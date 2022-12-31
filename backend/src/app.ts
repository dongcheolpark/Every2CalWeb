import express from 'express'
import {PythonShell,Options} from 'python-shell'
import { Request } from "express"
import path from 'path'

const app = express();
const router = express.Router();


router.get('/getics',(req,res) => {
	const begin = req.query.begin as string;
	const end = req.query.end as string;
	const id = req.query.id as string;
	const options : Options = {
		mode: 'text',
		pythonPath: '',
		scriptPath: './every2cal',
		args: ['--begin', begin, '--end',end,'--id', id]
	};
	PythonShell.run('every2cal.py',options,(err,result) => {
		if(err) {
			console.log(`err: ${err}`);
		}
		res.send(result)
	})
})

app.use('/api',router);

app.listen(3001,() => {
	console.log("http://localhost:3001");
})
