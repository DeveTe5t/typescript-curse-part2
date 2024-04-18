# Basic TypeScript Course part 2 - Initial Project

* The first thing we need to do after downloading the code is to run the command:

```
npm install
```
That command will download all the necessary Node modules to run the project


* When the installation of node_modules is complete, then we can run the project with the following command

```
npm start
```
For that to work, remember that you must run that command in the same directory where the ```package.json```

## Change the port
By default, the port I've configured for this project is ```8081```, but if you need to change it because your computer might be using that port, you can do so by opening the ```package.json``` >> scripts. There you'll see the command that launches the development server

```
"start": "webpack serve --mode development --open --port=8081"
```

Simply change the port to whichever one you need, and you're all set. (Remember to save the changes before running ```npm start``` again)


# typescript-course
Typescript
