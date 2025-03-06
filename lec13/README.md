# CSCI 2170: Intro to Web Design & Development

Lecture discussions: Mar 05, 2025

## Installation

A part of this example code uses MySQL databases. The module files needed may not be in the repo, since we're using a `.gitignore` file to exclude the `node_modules` folder. To use databases with this example, do the following:

First, run the following command in the root/home folder of this project, i.e., `feb28-node-DB`, which will install all the required modules, including the `mysql` module:

```shell
npm install
```

Next, modify the DB parameters (i.e., username, password, port number, etc.) in `db.js`.

Finally, to run the DB file, run the following command:

```shell
node db.js
```

## Lecture plan

* Working with Node packages and Modules
  * Creating our own modules
  * Using external packages (e.g., MySQL)
* Working with Databases
  * Node's `mysql` module
* We will continue to explore:
  * Exploring response customization in templates
    * Working with templates with replaceable strings
    * String `replace()` function to incorporate data from JSON/other files
  * Continuing to explore core modules of `Node.js`
    * HTTP
    * File system
    * URL
    * Query String
  * Processing form data using core `Node.js` modules
    * Working with data sent through GET requests
    * Working with data sent through POST requests

## References & Citations

1. 