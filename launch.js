var exec = require('child_process').exec
var process = require('process')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.route('/run').get(function(req, res) {
   var staticPath = 'C:\\Users\\Admin\\Desktop\\electronapp'
    var staticCommand =`npm run electron`
    process.chdir(staticPath)
    var child = exec('npm run electron');
    child.stdout.on('data', function(data) {
        console.log("stdout",data)
    }),
    child.stderr.on('data', function(data) {
        console.log("stderr",data)
    })
    child.on('close', function(code) {
        console.log("stdclose",code)
    })
    res.json({"status":"success"})
    });

    