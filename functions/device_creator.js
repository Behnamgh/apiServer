var lists = Array();
exports.create = function (req, res, next) {
    var dev = new CreateBuild(req.query.name, req.query.family);
    lists.push(JSON.stringify(dev));
    console.log(lists);
    next();
};
exports.listshow = function (req, res, next){
    next(null, { 'some': lists});
}


var CreateBuild = function (name, family) {
    this.name = name;
    this.famili = family;
}