import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors()); // Allows request from any IP (prevent any CORS error)

// Enable parsing of URL-encoded data on all routes:
const middle = express.urlencoded({
   extended: false, // Whether to use algorithm that can handle non-flat data strutures
   limit: 10000, // Limit payload size in bytes
   parameterLimit: 3, // Limit number of form items on payload
});


app.post('/upload',middle, function(req, res) {
   console.log(req.body);
});



app.listen(3000);
