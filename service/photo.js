
var sql = require('mysql');
var  bower = require('bower');
var connection = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'zhang123',
    database:'photo'
});
connection.connect();

/**
 * 获取数据库信息
 * @param req
 * @param res
 */
exports.getAllInfo = function(req,res) {
    console.log('获取所有信息服务器端');
    console.log(req.body);

    var con = connection.query("select * from t_photo",function(err,result,fields){
        if(err){
            throw err;
        }
        console.log("rows",result[0].id);
        var fPhoto = [];
        result.forEach(function (item) {
            var new_1item = {
                id: item.id,
                myName: item.myName,
                friendPhoto: item.friendPhoto,
                sayMe: item.sayMe,
                sayWords: item.sayWords,
                knowTime: item.knowTime,
                friendName: item.friendName
            };
            fPhoto.push(new_1item);
        });
        console.log(fPhoto);
        res.send({retCode:1,data:fPhoto});
    })

};