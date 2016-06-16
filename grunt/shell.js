function isMaster(err, stdout, stderr, cb) {
    if (err) {
        cb(err);
        return;
    }
    var match = stdout.match(/\n/i);
    stdout = stdout.slice(0, match.index);
    if (stdout === 'master') {
        cb();
        return;
    } else {
        console.log('You are not at master brunch!');
        console.log('Please switch to master branch and start script again.');
        cb();
        process.exit();
    }
}
function isUpdated(err, stdout, stderr, cb) {
    if (err) {
        cb(err);
        return;
    }
    var match = stdout.match(/\n/i);
    stdout = stdout.slice(0, match.index);
    var matchAhead = stdout.match(/ahead/i);
    if (!matchAhead) {
        cb();
        return;
    } else {
        console.log('Error!');
        console.log('Your local master branch is not synchronized with remote master.');
        console.log('Please push you changes to remote repo (git push), and start script again.');
        cb();
        process.exit();
    }
}

module.exports = {
    isMaster: {
        command: 'git rev-parse --abbrev-ref HEAD',
        options: {
            stderr: false,
            stdout: false,
            callback: isMaster
        }
    },
    isUpdated: {
        command: 'git status -sb',
        options: {
            stderr: false,
            stdout: false,
            callback: isUpdated
        }
    }
};
