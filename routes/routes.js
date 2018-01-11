var device = require('../functions/device_creator');


module.exports = function (app, passport) {

    app.get("/", function(req, res){
        res.send('hi');
    });
    app.get("/api", device.create, function (req, res) {
        res.end('done')
    });    
    app.get("/list", function (req, res) {
    let resu = device.listshow();
        res.send(resu);
    });    
};