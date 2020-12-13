const express = require('express');
const config = require('config');

const server = express();

server.use(express.json({ extended: true }));

server.use('/api/vehicles', require('./routes/vehicle.routes'));
server.use('/', require('./routes/root.routes'));


const PORT = config.get('port') || 5000;

server.listen(PORT, () => console.log('App has been started on the port:', PORT));


