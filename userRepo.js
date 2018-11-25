var repo = function () {
    var get = function (id) {
        console.log('Getting user with ' + id);
        return {
            name: 'new user from db'
        }
    };

    var save = function (user) {
        console.log('Saving User: ' + user.name + 'to the db');
    };

    return {
        get,
        save
    }
}

module.exports = repo;