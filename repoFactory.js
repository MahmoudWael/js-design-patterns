var repoFactory = function () {

    this.getRepo = function (repoType) {
        if (repoType == 'task') {
            var taskRepo = require('./taskRepo')();
            return taskRepo;
        }
        if (repoType == 'project') {
            var projecRepo = require('./projectRepo')();
            return projecRepo;
        }
        if (repoType == 'user') {
            var userRepo = require('./userRepo')();
            return userRepo;
        }
    }
}

module.exports = new repoFactory;