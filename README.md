# Contactlab Pattern Library Website

This is the documentation website for the Contactlab Pattern Library components designed and built by the Product team.

### Install
Install development and runtime dependencies with

	bower install

	npm install

### Run the project
Just type

	gulp

to start the webserver at localhost:3000 , if the port is already in use you can specify a new one using the **-p** parameter, example:

	gulp -p 3003

### Development
You can use

	gulp dev

to work with Javascript files, compiling ES6 to ES5 on every .es6.js file save, or

	gulp ux

to compile SASS to CSS o every .scss file save.

**Both** actions starts a webserver as explained above.

### Code styleguide
This project follows the code styleguide explained [here](https://gitlab.contactlab.com/product-devs/clab-app-components#styleguide).

### Build
Work in progress

### Test
On the shell run the command

	npm test

The unit tests are executed by the [Web Components Tester](https://github.com/Polymer/web-component-tester) developed by Google specifically for Polymer components, and can be configured from the **wct.conf.js** file.
