#felayout_t3kit
[![Release](https://img.shields.io/github/release/t3kit/felayout_t3kit.svg?style=flat-square)](https://github.com/t3kit/felayout_t3kit/releases)

[![Build Status](https://travis-ci.org/t3kit/felayout_t3kit.svg?branch=master)](https://travis-ci.org/t3kit/felayout_t3kit)

Front-End layout for [theme_t3kit](https://github.com/t3kit/theme_t3kit) project

### [CHANGELOG](https://github.com/t3kit/felayout_t3kit/blob/master/CHANGELOG.md)
### [Contributing to t3kit](https://github.com/t3kit/t3kit/blob/master/CONTRIBUTING.md)

### Required dependencies:

- [Git](https://git-scm.com/)
- [NodeJs](http://nodejs.org/) >=6.0.0
- [NPM](https://github.com/npm/npm) >=3.9.0
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
