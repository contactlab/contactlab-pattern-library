# Contactlab Pattern Library website

This is the documentation website for the [Contactlab](http://www.contactlab.com/) Pattern Library ([https://ux.contactlab.com/](https://ux.contactlab.com/#/)) styleguide and components designed and built by the Contactlab Product team.

## Installation

### Required tools
- [NodeJS](https://nodejs.org/)
- [Bower](https://bower.io/) (```$ npm install -g bower```)
- [Gulp](http://gulpjs.com) (```$ npm install -g gulp-cli``` and ```npm install --save-dev gulp```)

### Repository clone and dependencies installation

From the command line, run

```
$ npm install
$ bower install
```

to install required dependencies.

### Run

You can use Gulp without arguments

	$ gulp

to start the webserver at **http://localhost:3000** . If the port is already in use, you can specify a new one using the **-p** parameter. For example:

	$ gulp -p 3003

### Development

Running the command

	$ gulp dev

you can work with Javascript files. This command automatically compiles ES6 to ES5 via Babel and Webpack.
If you only need to work with markup and styles, you can run

	$ gulp ux

to automatically compile SASS to CSS on every .scss file save.

**Both** actions starts a webserver as explained above.

### Git branching policies

Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

## License
Distributed under the [Apache 2.0 license](http://choosealicense.com/licenses/apache-2.0/).
