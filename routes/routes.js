var device = require('../functions/device_creator');


module.exports = function (app, passport) {

    app.get("/", function(req, res){
        res.send('hi');
    });
    app.get("/api", device.create, function (req, res) {
        res.end('done')
    });    
    app.get("/list", device.listshow, foo);
    function foo(req, res, next, datas) {
        console.log(datas)
        res.send('done');
    }
};