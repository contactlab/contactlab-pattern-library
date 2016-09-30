# Contactlab Pattern Library website

This is the documentation website for the [Contactlab](http://www.contactlab.com/) Pattern Library ([https://ux.contactlab.com/](https://ux.contactlab.com/#/)) styleguide and components designed and built by the Contactlab Product team.

### Install on your machine
Before get started, make sure you have installed [NodeJS](http://nodejs.org/), [Bower](https://bower.io/) and [Gulp](http://gulpjs.com/), then clone this repo on your computer, open terminal on folder location and type

	$ npm install && bower install

### Run the project
Just type

	$ gulp

to start the webserver at **http://localhost:3000** , if the port is already in use you can specify a new one using the **-p** parameter, example:

	$ gulp -p 3003

### Development
You can use

	$ gulp dev

to work with Javascript files, compiling ES6 to ES5 via Babel and Webpack, or

	$ gulp ux

to compile SASS to CSS o every .scss file save.

**Both** actions starts a webserver as explained above.

### License
Distributed under the [Apache 2.0 license](http://choosealicense.com/licenses/apache-2.0/).
