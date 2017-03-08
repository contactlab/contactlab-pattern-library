# Contactlab Pattern Library website

This is the documentation website for the [Contactlab](http://www.contactlab.com/) Pattern Library ([https://ux.contactlab.com/](https://ux.contactlab.com/#/)) styleguide and components designed and built by the Contactlab Product team.

## Installation

### Required tools
- [NodeJS](https://nodejs.org/)
- [Bower](https://bower.io/) (```$ npm install -g bower```)

### Repository clone and dependencies installation

From the command line, run

```
$ npm install
$ bower install
```

to install required dependencies.

### Run

```
$ npm run start
```

### Development

Running the command

```
$ npm run dev
```

you can work with Javascript files. This command automatically compiles ES6 to ES5 via Babel and Webpack.

**Both** actions starts a webserver as explained above.

### Deploy

Deploy on `gh-pages` by running:

```
$ npm run deploy
```


### Git branching policies

Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

## License
Distributed under the [Apache 2.0 license](http://choosealicense.com/licenses/apache-2.0/).
