import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors()); // Allows request from any IP (prevent any CORS error)

// Enable parsing of URL-encoded data on all routes:
const middle = express.json();


app.post('/upload2', middle,function(req, res) {
   console.log(req.body);
});



app.listen(3000);
