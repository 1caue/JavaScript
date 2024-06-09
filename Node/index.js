const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


require.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'index.html'))

})

router.get('/sobre ')





router.get('A', router)
app.use('/', router)
app.listen(process.env.port || 3000)