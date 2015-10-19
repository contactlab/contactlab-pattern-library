# ContactLab Pattern Library

### Install
Install development and runtime dependencies with

	bower install

	npm install

### UI-Components by ContactLab Product Team
The custom UI Components are hosted on a Bitbucket private repository, if the Bower installation of this package fails, you must add a SSH key in your Bitbucket account, documentation [here](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html).

### Run the project
Just type

	gulp

to start the webserver at localhost:3000 , if the port is already in use you can specify a new one using the **-p** parameter, example:

	gulp -p 3003

In case that the Compass action breaks the script and you don't want/have to install the needed Ruby gem you can start only the webserver without the watch action with

	gulp connect

and if needed pass the -p parameter.

### Development
The project is built with Polymer components following the Mediator Pattern, everything regarding the UI Components should not be edited in this repo, while everything related to this specific project (routing, navigation links, global actions) can be edited inside the **library-clab** component located in

	app/components/library

### Build
Work in progress

### Test
On the shell run the command

	npm test

The unit tests are executed by the [Web Components Tester](https://github.com/Polymer/web-component-tester) developed by Google specifically for Polymer components, and can be configured from the **wct.conf.js** file.