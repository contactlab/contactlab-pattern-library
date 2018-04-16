# Contactlab Pattern Library website - :warning: Deprecated

This is the documentation website for the [Contactlab](http://www.contactlab.com/) Pattern Library ([https://ux.contactlab.com/](https://ux.contactlab.com/#/)) styleguide and components designed and built by the Contactlab Product team.

## Installation

### Required tools

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com)

### Repository clone and dependencies installation

From the command line, run

```
$ yarn 
```

to install required dependencies.



### Available tasks

Expose `./dist` folder on `localhost:3000`

```
$ yarn start
```

Bundle and transpiles `.js` files in watch mode plus the `yarn start` action

```
$ yarn dev
```

Compiles `.scss` files in the `./src` folder to `.css` file in `./dist` folder

```
$ yarn css
```

Deploy `./dist` folder on remote `gh-pages` branch

```
$ yarn deploy
```


### Git branching policies

Any feature/bug fixing/refactor must be developed on a **feature branch** derived from the **develop** branch and integrate the changes through a **pull request** to have a code review.

## License
Distributed under the [Apache 2.0 license](http://choosealicense.com/licenses/apache-2.0/).
