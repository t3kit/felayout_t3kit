#felayout_t3kit
[![GitHub version](https://badge.fury.io/gh/t3kit%2Ffelayout_t3kit.svg)](https://badge.fury.io/gh/t3kit%2Ffelayout_t3kit)

Front-End layout for [t3kit](https://github.com/t3kit/t3kit) project

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
- Run `grunt small` to start static server [_same as `grunt`_] plus it generates files for **SMALL** project in folder `small`
- Run `grunt big` to start static server [_same as `grunt`_] plus it generates files for **BIG** project in folder `big`
- Run `grunt check` to check HTML/CSS/JS files according project code conventions
- Run `grunt pushSite` to build your static site and push it to separate branch `site`
- Run `grunt pushBig` to compile files for **BIG** project and push it to separate branch `big`
- Run `grunt pushSmall` to compile files for **SMALL** project and push it to separate branch `small`
