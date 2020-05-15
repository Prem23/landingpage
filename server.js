const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const UserDetails = require ('./userDetails.js');
const UserList = require ('./userList.js');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/userList', UserList);
app.get('/api/userDetails', UserDetails);