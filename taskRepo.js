var repo = function () {
    var get = function (id) {
        console.log('Getting task with ' + id);
        return {
            name: 'new task from db'
        }
    };

    var save = function (task) {
        console.log('Saving Task: ' + task.name + 'to the db');
    };

    console.log('newing up task repo');
    
    return {
        get,
        save
    }
}

module.exports = repo;