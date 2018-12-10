var mysql = require('mysql');

var obj = {
    user: "root",
    password: "root",
    database: "zb",
    connectionLimit: 100
}

var pool = mysql.createPool(obj);

module.exports = function(sql, arr, ck) {
    ck = ck ? ck : arr;
    arr = arr || [];
    pool.getConnection(function(err, con) {
        if (err) {
            ck(err);
        } else {
            con.query(sql, arr, function(error, results) {
                if (error) {
                    ck(error);
                } else {

                    con.release();
                    ck(null, results);
                }
            })
        }
    })
}