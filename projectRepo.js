var repo = function () {
    var get = function (id) {
        console.log('Getting project with ' + id);
        return {
            name: 'new project from db'
        }
    };

    var save = function (project) {
        console.log('Saving Project: ' + project.name + 'to the db');
    };

    return {
        get,
        save
    }
}

module.exports = repo;