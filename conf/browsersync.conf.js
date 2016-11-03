const conf = require('./gulp.conf');

module.exports = function () {
  return {
    // server: {
    //   baseDir: [
    //     conf.paths.tmp,
    //     conf.paths.src
    //   ]

    // },
    // Kevin : for CORS issue
    proxy: "localhost:9000",
    middleware: function(req, res, next) {
    	res.setHeader('Access-Control-Allow-Origin', '*');
    	next();
    },
    // Kevin : end
    open: false
  };
};
