var pushover = require("pushover"),
    express = require("express");

var srcDirLocation = "/src",
    srcDir = __dirname + srcDirLocation;

var repos = pushover(srcDir),
    gitweb = require("./gitweb");

module.exports = function (app) {
    app.use(srcDirLocation, function (req, res) {
        repos.handle(req, res);
    });

    app.use("/", express.static(__dirname + "/gitweb/theme"));
    app.use("/gitweb", express.static(__dirname + "/gitweb/theme"));
    app.use(gitweb("/gitweb", {
        projectroot: srcDir,
        homelink: "NTEG Source Repository",
        sitename: "NTEG Source Repository"
    }));
};
