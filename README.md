# generator-angular-gitignore [![Build Status](https://travis-ci.org/Knorcedger/generator-angular-gitignore.png?branch=master)](https://travis-ci.org/Knorcedger/generator-angular-gitignore)

A yeoman generator for the .gitignore file in Angular.js projects.

Beyond the typical trash files that an OS creates, a folder structure is assumed where
the public folder is used to host the build files like the minified JavaScript and CSS files, and is also ignored.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install -g generator-angular-gitignore --save
```

or download it through [Yeoman](http://yeoman.io).

Then, to generate the .gitignore file in your project use

```sh
yo angular-gitignore
```

## Tests

```sh
npm install
npm test
```
```

> generator-angular-gitignore@0.2.0 test /home/knorcedger/dev/generator-angular-gitignore
> eslint app/

```

## Dependencies

- [yeoman-generator](https://github.com/yeoman/generator): Rails-inspired generator system that provides scaffolding for your apps

## Dev Dependencies

- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
