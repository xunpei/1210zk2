var gulp = require("gulp");

var server = require("gulp-webserver");

gulp.task("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: 9090,
            open: true,
            proxies: [{
                source: "/init",
                target: "http://172.23.46.24:3000/users/api/init"
            }]
        }))
})