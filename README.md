# Proffy

Application developed during [Rocketseat](https://rocketseat.com.br/) Next Level Week. The classes were taught by the teacher [maik britto](https://github.com/maykbrito).

Proffy is a tutoring platform. Teachers register and tell the classes and times they want to teach. Students can search for teachers by selected subjects and schedules.

# Static Project

You can find the static design of the pages, an example of what it would look like, in Master Branch without all its functionality. By accessing [Proffy website](https://thalesmacena.github.io/next-level-week-proffy/), its Github pages link. You can also find a [Error page](https://thalesmacena.github.io/next-level-week-proffy/not-found.html), if the server responded with a http 404 error. 

## Dynamic Project

In the development branch you can find the updated project using [node.js](https://nodejs.org/en/). The reason for leaving the application finished in the dev branch, is to keep your dependencies as close as possible to the original and to be able to use the github pages tool to show the design of the application in the master branch.

### Modules
This project uses [Express.js](https://expressjs.com/) framework, the [nunjucks](https://mozilla.github.io/nunjucks/) template engine, the [asynchronous sqlite](https://www.npmjs.com/package/sqlite-async) database. And the [Nodemon](https://nodemon.io/) as a development dependency to reload the server whenever changes are made

### Run the Project
to run the project first download or copy all the files from the dev branch to your chosen local directory. Then use your package manager's run command:

**With NPM:**
```Bash
npm run dev
```

**With Yarn:**
```Bash
yarn run dev
```
