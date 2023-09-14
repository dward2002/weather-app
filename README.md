To run 'npm' commands, you need to have Node.js and npm (Node Package Manager) installed on your system, so do that first before moving on.

___

In the project directory, you can run:

### `npm install`

This command installs all the required project dependencies listed in the package.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

***

__Unit Tests__

-Unit Tests can be found in `src/components/__tests__`

__GitHub Action__

-My GitHub action to build a static version of the website and publish it to GitHub Pages can be found in `.github/workflows/node.js.yml`

-The link to my website on GitHub Pages is: https://dward2002.github.io/weather-app/

__Extra Information__

-The weather API is sometimes slow, so could take some time to load weather data.
    
-The weather API goes down frequently, so if weather data is not loading, it's likely due to API downtime.