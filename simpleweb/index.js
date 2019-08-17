const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hi There');
});

app.listen(9090, () => {
	console.log('Listening on port 9090');
});