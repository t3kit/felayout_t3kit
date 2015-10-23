var remoteBranch = 'gh-pages';
var remoteRepo = 'git@github.com:t3kit/felayout_t3kit.git';
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            site: 'site',
            small: 'small',
            big: 'big',
            dev: 'dev',
            temp: 'temp',
            bc: 'dev/bower_components',
            remoteRepo: remoteRepo,
            remoteBranch: remoteBranch
        },
        jitGrunt: {
            jitGrunt: true,
            staticMappings: {
                replace: 'grunt-text-replace',
                buildcontrol: 'grunt-build-control'
            }
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-notify');
};
