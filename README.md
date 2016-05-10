#felayout_t3kit
[![Release](https://img.shields.io/github/release/t3kit/felayout_t3kit.svg?style=flat-square)](https://github.com/t3kit/felayout_t3kit/releases)

Front-End layout for [theme_t3kit](https://github.com/t3kit/theme_t3kit) project

### [CHANGELOG](https://github.com/t3kit/felayout_t3kit/blob/master/CHANGELOG.md)

### Required dependencies:

- [Git](https://git-scm.com/)
- [NodeJs](http://nodejs.org/) >=5.6.0
- [NPM](https://github.com/npm/npm) >=3.7.0
- [Bower](http://bower.io/) >=1.7.7 `npm install -g bower`
- [Grunt-cli](http://gruntjs.com/) >=0.1.13 `npm install -g grunt-cli`

### Installation:

First, clone repo:
```bash
git clone git@github.com:t3kit/felayout_t3kit.git
```

Next, install Bower/NPM dependencies:

```bash
npm install
bower install
```

### Getting Started:

- Run `grunt` to start static server with livereload `localhost:9004`
- Run `grunt +less` to start static server [_same as `grunt`_] plus it generates all Front-End service files plus **LESS** styling for CMS needs, and copy it to `less` folder. _[with livereload]_
- Run `grunt +css` to start static server [_same as `grunt`_] plus it generates all Front-End service files plus **CSS** styling for CMS needs, and copy it to `css` folder. _[with livereload]_
- Run `grunt check` to check HTML/CSS/JS files according project code conventions
- Run `grunt pushSite` to build your static site and push it to separate branch `site`
- Run `grunt pushCss` to compile all Front-End service files plus **CSS** styling for CMS needs, copy it to separate branch `css` and push to remote git server.
- Run `grunt pushLess` to compile all Front-End service files plus **LESS** styling for CMS needs, copy it to separate branch `less` and push to remote git server.



# Contributing

Everyone can add feedback, bug reports and fixes. Here is several rules for contribute this repository. Please keep this in mind for better cooperation.


## Issues

If you have a question(feature) not covered in the documentation or want to report a bug, the best way to ensure it gets addressed is to file it in the appropriate issues tracker. Please check that you've completed the following steps:

* Make sure you're on the right version of [dependencies](#required-dependencies)
* Make sure you're on the latest version of generator npm update -g generator-fe-kit
* Used the search feature to ensure that the bug hasn't been reported before
Included as much information about the bug as possible, including any output you've received, what OS and version you're on, etc.
* Try to reduce your code to the bare minimum required to reproduce the issue. This makes it much easier (and much faster) to isolate and fix the issue.


## Pull Requests

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Follow [Style Guides](#style-guides)
* Follow [Git commit conventions](#git-commit-conventions-and-output-formatting)
* Write a convincing description of your PR and why we should land it



## Style Guides
This project uses special rules and style guides. Those rules you can find on appropriate files: `.jscsrc .jshintrc .htmlhintrc .csslintrc .editorconfig`

* [htmlhint](https://github.com/yaniswang/HTMLHint/wiki/Rules)
* [jscs](http://jscs.info/rules.html)
* [jshint](http://jshint.com/docs/options)
* [csslint](https://github.com/CSSLint/csslint/wiki/Rules)
* [editorconfig](http://editorconfig.org)


## Git commit conventions and output formatting
Please use semantic labels for your messages, but if commit message is not very important, you can skip labels. All commits with labels will be added in CHANGELOG file, that's why it is **important to use predefined labels** on your commits.

####Git labels:
* **[FEATURE]** A new feature
* **[FIX]** A bug fix
* **[REFACTOR]** A code change that neither fixes a bug or adds a feature
* **[PERF]** A code change that improves performance.
* **[CHORE]** Changes to the build process (grunt) or auxiliary tools and libraries such as documentation generation and linters (jshint, jscs, etc.)
* **[DOC]** Documentation only changes
* **[STYLE]** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **[TEST]** Adding missing tests
* **[UPDATE]** Updating git submodules, npm/bower dependencies

Please ensure any pull requests of fixes **follow this closely**. If you notice existing code which doesn't follow these practices, feel free to shout and we will address this.

***









# t3kit_vagrant

## Vagrant/virtualbox development environment for [t3kit](https://github.com/t3kit/t3kit) project.

[![Release](https://img.shields.io/github/release/t3kit/t3kit_vagrant.svg?style=flat-square)](https://github.com/t3kit/t3kit_vagrant/releases)

### [CHANGELOG](https://github.com/t3kit/t3kit_vagrant/blob/master/CHANGELOG.md)

#### Required dependencies:

* [Git](https://git-scm.com/)
* [PHP 5.6](http://php.net/downloads.php) with openssl and fileinfo extension enabled & [Composer](https://getcomposer.org/)
* [VirtualBox](https://www.virtualbox.org)
* [Vagrant](http://www.vagrantup.com)

***

## First Startup
1. After first clone you need to get all submodules and install composer deppendencies: `./init.sh`
2. Start virtual machine `vagrant up`


### Some important commands

* Start virtual-machine
`vagrant up`

* Stop vagrant VM
`vagrant halt`

* Delete the vagrant VM
`vagrant destroy`

* Check status of vagrant VM
`vagrant status`

* Check status of all vagrant VM
`vagrant global-status`

* SSH to vagrant VM
`vagrant ssh`

[Vagrant documentation](https://docs.vagrantup.com/v2/)

### Connecting

####TYPO3 Site is available at **http://localhost:8081/**

- TYPO3 login: admin
- TYPO3 password: admin1234
- TYPO3 install tool password: admin1234
- Web root from local machine is : `shared/site/`
- Web root from vagrant VM is : `/var/www/shared/site/`


####Mailcatcher is available at **http://localhost:1080/**

####MySQL is available at **localhost:3307**

- Username: t3kit
- Password: t3kit1234
- DB name: t3kit

##Vagrant BOX

* We are using a custom virtual box based on Ubuntu 14 [t3kit/t3kit](https://atlas.hashicorp.com/t3kit/boxes/t3kit)
* [t3kit packer template](https://github.com/t3kit/t3kit_packer_template)

***

# Contributing

Everyone can add feedback, bug reports and fixes. Here is several rules for contribute this repository. Please keep this in mind for better cooperation.


## Issues

If you have a question(feature) not covered in the documentation or want to report a bug, the best way to ensure it gets addressed is to file it in the appropriate **issues tracker**. Please check that you've completed the following steps:

* Make sure you're on the right version of **t3kit_vagrant**
* Make sure that you're cloned all deppendencies `init.sh`
* Used the **search** feature to ensure that the bug hasn't been reported before
* Included as much **information about the bug** as possible, including any output you've received, what OS and version you're on, etc.
* Try to reduce your code to the bare minimum required to reproduce the issue. This makes it much easier (and much faster) to isolate and fix the issue.


## Pull Requests

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Follow [Style Guides](https://github.com/t3kit/t3kit_vagrant#style-guide)
* Follow [Git commit conventions](https://github.com/t3kit/t3kit_vagrant#git-commit-conventions-and-output-formatting)
* Write a convincing description of your PR and why we should land it

***
