# ![Burhan221b Logo](https://drive.google.com/uc?export=view&id=1ShYHkaVxVpVDLmUVV8YhigZ-Kju3hJry) TypeScript ReactJS Webpack
### Created by Burhan 
#### January 9, 2021
##### Version 2.1.0
---

## This is a boilerplate ReactJS project using TypeScript and Webpack
## (This refers to webpack 5, Please Refer to version 1.*.* repo using the tags tab above if you are using webpack 4)
#### Note, this boilerplate was built from scratch, so I did not use create-react-app.

### Steps to create your own in ReactJS TypeScript project using Webpack
#### **For MacOS**
1. Open your terminal and use "cd" go to directory to place your project i.e. Desktop, Documents, Projects, ..etc.
1. Create a new empty folder for the project.
```bash
mkdir ProjectName
```
3. Enter the folder directory using the cd command and project name. 
```bash
cd ProjectName
```
4. We need to create a **package.json** file, which will tell you the project information and author, and what packages and scripts are needed for it to run. We also need this to install webpack and loaders. We use the npm cli to auto generate the package.json file.
```bash
npm init 
```
For quick auto-generate the file and fill in the project information later, add the -y flag at the end.
```bash
npm init -y
```
5. This is to help us with version control. 
```bash
git init
```
6. We need **.gitignore** file to remove any folders and files that shouldn’t be saved in git (and repo) for because of the large amount of space and time it would take and also privacy reasons. 
```bash
touch .gitignore
```
7. We don't want node_modules (as this is installed within client local computer) and the public (or whatever you name the build folder) in the git as this is dynamically created. Add “node_modules” and "public" into **.gitignore** file. Here is a a template below.
```sh
# dependencies
/node_modules

# testing
/coverage

# production
/build
/dist
/.next

# misc
.DS_Store
.env
```
8. Make sure you have TypeScript installed globally 
```bash
npm install -g typescript
```
9. Due to some minor bugs and set ups, it's a good idea to install typescript to the local project as well to help reduce future issues.
```bash
npm install typescript --save-dev
```
10. Create **tsconfig.json** file, this will help us customize TypeScript with its rules. Like how we created the package.json file, we also use the typescript cli tool to help generate a boiler plate for us.
```bash
tsc --init
```
11. The generated **tsconfig.json** (or manually created if you want) will contain mutliple options. In the **tsconfig.json** file, add the following below. The key "module" mean which module system you're using. Remember that browsers don't support TypeScript and many are not up to date with modern JavaScript, thats why need to configure to most common javaScript majority browsers can run. jsx is the javaScript/xml which creates html elements. We assign “react”. Watch looks for any changes in TypeScript. Target refers to what the TypeScript is compiled into. ES5 is used across most browsers, thats why we set that as our target. lib is “[es6, dom]” which means what libraries can we write with TypeScript. We can write in es6 TypeScript, so it will know the syntax we are using because of lib. **NOTE** that even though we created this file, webpack will handle most of the configurations by using ts-loader. However, as referenced in this [Stackoverflow comment](https://stackoverflow.com/questions/52989299/how-where-does-webpack-use-the-tsconfig-file-and-tsc), ts-loader and webpack may look and honor **tsconfig.json** compile options.
```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "jsx": "react",
        "watch": true,
        "target": "es5",
        "lib": [
            "es6",
            "dom"
        ]
    }
}
``` 
12. Install ReactJS Dependencies. These Dependencies allow us to use the React library to help make components and react-dom will help manipulate the DOM.
```bash
npm install --save react react-dom
```
13. Install ReactJS Developer Dependencies that we need for TypeScript and NodeJS specifically. These are light packages that provide types to our TypeScript files. Usually packages with "@types" are packages that give type definitions for your already installed packages.
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```
14. Install the webpack, webpack-cli, webpack-dev-server, and webpack-merge Developer Dependencies. Webpack is the main program that will control how your program will run with its configurations. Webpack-cli will provide command-line interface to run and build your project. Webpack-dev-server is a great developer tool that will create a localhost server to run and test your program using memory instead of building the project. This makes it fast and easy to develop the project. Webpack-merge will be a useful tool which will help merge different configured webpack.js files, for example have a webpack for production, development, and one that both production and development can use because they share common properties. 
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge
```
15. Install loaders as developer dependencies. All these are configurable and required if you want at least the basics what a ReactJS project can do. Recommended to read up on all these loaders as it would be helpful how they work.
```bash
npm install --save-dev ts-loader css-loader file-loader html-loader node-sass sass-loader style-loader

```
16. Inside the root directory, create a folder called **src** and inside **src** create a new file called **index.tsx**. Note that we use **tsx** extension instead of "ts" and "jsx" as it is the ReactJS equivalent to "jsx" for TypeScript. You may use the same syntax as regular ReactJS code. 
17. Within **index.tsx**, we are going to include our starter ReactJS code. Here we import everything and use the alias React. Also note that we're including "App" component(we haven't create this component yet). You may be also noticing that we are calling "import * as React" instead of "import React" due to the fact we are using a different loader. Something like create-react-app uses Babel where here we're using ts-loader and tsconfig.json. I found this article that may explain import usage better [here](https://stackoverflow.com/questions/55285737/import-as-react-from-react-vs-import-react-from-react).
```javascript
import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";

ReactDom.render(
    <App />,
    document.querySelector("#root")
)
```
18. Lets create **App.tsx** in **src** and give it simple starter code. Note that "App.scss" will be mention in the next step.
```javascript
import * as React from 'react';
import "./styles/App.scss";

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>Welcome to React using TypeScript and Webpack created by Burhan</h2>
            </div>
        </div>
    );
}

App.displayName = "App";

export default App;
```
18. Lets create 2 folders in our **src** you probably need. Crate an **assets** folder where you'll place your images, icons, svg, and other media files. Then create a **styles** folder where you'll place your css and/or sass files. For example, in the **styles** folder, create **App.scss**. This will be converted to css when we work on our webpack config. 
19. The last file that we want to create is the **template.html** in our **src** folder. This plain html file will be the template html when we bundle and create a bundled directory using webpack. Why this file is important is because we need to include the "id='root'" div in order for ReactJS to work as a single page application. 
```hmtl
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS TypeScript Webpack Project</title>
</head>

<body>
    <div id="root"></div>
</body>
</html>
```
20. We have most the file architecture completed, now we move on and work on webpack. To keep code clean and efficient, we actually create 3 webpack configuration files instead of 1. The reason for this is separate our production functionality with development. This also gives you better understand how webpack works under the hood by being able to control it. Webpack have these properties called plugins that provides extra customization and efficiency how files are create and put together. Lets start downloading the plugins we'll need for the webpacks configurations.
```bash
npm install --save-dev clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin
```
21. Lets start with **webpack.common.js** in the root directory. This file will contain as the name implies, the commonality instructions the other 2 webpacks share. Here we'll add MOST of the loaders and rules. The only loader that will be different among production and development will be "sass-loader". First we need to require the path from path module. This is pre-built into NodeJS. This helps use direct to the right directory and file. We export an object that contains our webpack instructions. "devtools:inline-source-map" helps us debug by using the browser's console and source tools to spread. By default, webpack will bundle all the files, but what inline source map will do is show us a readable and file based approach. Source Maps is a way to provide the links of the different files that created the bundle file. For "entry", webpack automatically defaults to look into src/index.js, but because we are using TypeScript and with ReactJS, we have to manually direct it "src/index.tsx". "watch" is true, this means our nodejs will be watching for any changes to project as it is running and will update as it is saved. Webpack by default have it's own ways to handle files, but sometimes it comes across a file it doesn't know how to handle, "resolve" will help with that. Lets say it comes across "jsx" file, webpack will break. If you include an array of extensions in "resolve", we are basically saying let webpack and the loaders handle this file. We also need to include one important plugin in this file, which is the "HtmlWebpackPlugin". This plugin is basically saying to take the template.html file and use that as our starting point to create the html file in the bundle.js when webpack creates it. 
```javascript
// For system to know root directory
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // devtool: "inline-source-map",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets"
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
}
```
React 17 with create-react-app uses svg assets as a component. As seen above, for svg files we are using the @svgr/webpack loader because this gives the user more console in dynamically changing the fillColor and other properties for he svg. 
Reference: https://www.npmjs.com/package/@svgr/webpack
```javascript
import Star from './star.svg'
 
const App = () => (
  <div>
    <Star />
  </div>
)
```

22. Now lets create **webpack.dev.js** in the root directory. The common is doing most of the work, here in dev, we want to quickly build our application and debug any major issues. Good for working on GUI. This webpack configuration does not build any folders, uses memory to run our code. We require common from the "webpack.common.js" and require merge from "webpack-merge". Unlike common, we export by placing our webpack instructions inside the merge function. First argument is "common" which "webpack.common.js" and second argument is the development webpack instructions. Inside our development webpack we use mode: “development” that actually spreads the code in the bundle file and is a little more readable. Create "output" object that we create the filename of the bundle javascript and we use the "path" to help point where we want our newly create folder that contains the bundle javascript to be placed. "--dirname" Basically says what directory webpack is in. We include sass loader that will be different then our production webpack that we'll create in the next steps. 
```javascript
// For system to know root directory
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                // Remember, the way this array is read is in reverse order, so need to place "sass-loader" at the end
                use: [
                    "style-loader", // 3. Inject style tags into DOM
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    },
        devServer: {
        // Reference for mobile: https://stackoverflow.com/questions/35412137/how-to-get-access-to-webpack-dev-server-from-devices-in-local-network
        host: '0.0.0.0',//your ip address
        port: 8080,
        historyApiFallback: true,
    },
});
```
23. Lets create **webpack.prod.js** which will be responsible for creating the final build of the project to send to your hosting service. Very similar to "webpack.dev.js", here we add more plugin. "MiniCssExtractPlugin" will do what the it's name entitles, it will minify the css. MiniCssExtractPlugin.loader can be seen under the scss loader rules set as it replaces style-loader which injects the css in the DOM/html file, this new function will extract the css file and create a new css file and inject style link on top of html file. In the filename section you can see that square brackets as name and contentHash, this means every time it bundles, it will create the css using it's original name in the src folder, but will also include a unique content hash id. It will only changed if there is ever a change in the code for it. This is used for cache reasons, so when you upload it to server/host and a request is made for the content, the client would know if there has been changed in the file, otherwise it would use it's own local file cache if it had visted your site before. **Note, We use this in our "output:filename: "bundle.[contentHash].js"" property as well. We didn't use this in dev because we care more about debugging then web services**. Another plugin CleanWebpackPlugin will remove the previous and all other hashed files build, so you don't stacking up bundle.js files. "optimization" property is also added, the PROBLEM now is that before production mode automatically minimized the javascript file, but because we are customizing optimization, it doesn’t minify JS. We have to now tell what types of minimize when we use this property. TerserPlugin is already pre-installed through webpack and should return javascript as minified. 
```javascript
// For system to know root directory
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin"); // This plugin was already installed with webpack. Default for mode:"production". Needed again for minimizer

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.[contentHash].js",
        path: path.resolve(__dirname, "public")
    },
    optimization: {
        minimizer: [new OptimizeCssWebpackPlugin(), new TerserPlugin()]
    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                // Remember, the way this array is read is in reverse order, so need to place "sass-loader" at the end
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css from commonjs into files.
                    "css-loader", // 2. Turns css into commonjs
                    "sass-loader" // 1. Turns sass into css
                ],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    }
});
```
24. One of the last major changes we need to do before running this program is the add scripts to our **package.json** file. By default, webpack would run it's own webpack configuration, but wouldn't work as it wouldn't know how to handle TypeScript and other files. Inside "scripts" create a "build" script which you will run "webpack --config webpack.prod.js". This means run webpack and use the configuration made for production. End result will be "public" folder created with minified bundle javascript and css, and create any asset folder related content. After "build" and similar to it, add another script called "start" with "webpack-dev-server --open --config webpack.dev.js", that will be use the webpack-dev-server package to create a localhost environment to preview your work. Great thing about this package is that it uses memory, so makes viewing changes quicker. 
```json
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --config webpack.dev.js",
  },
```
25. **For the final steps, please note sometimes the version of node your using may cause an issue, please read the console and see if it recommend you which version of node you should use or use the latest lts version of node.**
26. To run the program in development, run this code:
```bash
npm run start
```
27. Now you can see the program dynamically created the "public" folder which contains the bundled up and compiled JavaScript, css, and other files. 
28. To build the project(used to give to hosting service), run this code:
```bash
npm run build
```
29. Now you can see the program dynamically created the "public" folder which contains the unique hashed id bundles of compiled JavaScript, css, and other files. 
30. Sometimes svg files and content wont work correctly with tsx and webpack out of the box. We need to include a special file in the root directory called **custom.d.ts** which will contain some configuration rules.
```javascript
declare module "*.svg" {
    const content: any;
    export default content;
}
```
31. You will also need to include the newly crated **custom.d.ts** file in the **tsconfig.json** file for TypeScript to work properly with svg.
```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "jsx": "react",
        "watch": true,
        "target": "es5",
        "lib": [
            "es6",
            "dom"
        ]
    },
    "include": [
        "./src",
        "./custom.d.ts"
    ]
}
```
32. Most likely you will create different url paths, thats when we need to start using react-router-dom and it's types. These will include BrowserRouter, Route, Switch, Link, and more.
```bash
npm install -save react-router-dom 
```
```bash
npm install --save-dev @types/react-router-dom
```
```javascript
// src/App.tsx
import * as React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
    return (
            <div className="App">
                <div className="App-header">
                    <div>
                    {/*Links*/}
                        <Link to="/">Home </Link>
                        <Link to="/about">About Us </Link>
                    </div>
                    {/*Routes*/}
                    <Switch>
                        <Route component={About} path="/about" exact />
                        <Route component={Home} path="/" exact />
                        <Route component={Page404} path="/" />
                    </Switch>
                </div>
            </div>
    )
}

App.displayName = "App";
export default App;
```
```javascript
// src/index.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
)
```

##### References used to create this program
##### * [Chris Hawkes](https://www.youtube.com/watch?v=nCoQg5qbLcY)
##### * [Colt Steele](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)

