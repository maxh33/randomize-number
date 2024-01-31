# Max Number Generator

## Technologies Used

- HTML
- CSS
- JavaScript
- Grunt
- Less

## How to Use

![Demo](gif-link-here)

To use the Max Number Generator, simply enter a maximum number in the input field and click the "Randomize Number" button. A random number up to your maximum will be generated and displayed.

## Deployment

The Max Number Generator is deployed at [https://max-randomize-number.vercel.app/](https://max-randomize-number.vercel.app/).

## Running the Page Locally

1. Clone the repository to your local machine:

    Cloning a repository means creating a local copy of the code provided on the remote server. To do this, you'll need Git installed on your computer. If you haven't installed Git, you can download it from [https://git-scm.com/](https://git-scm.com/).

    Once you have Git installed, open a terminal and navigate to the directory where you want to clone the repository. Then, run the following command:

    ```bash
    git clone https://github.com/maxh33/randomize-number.git
    ```

2. Navigate to the project directory.

3. Install the necessary dependencies:

    This project relies on several development dependencies for tasks like building the project and running a local server. These dependencies are listed in the `package.json` file in the project's root directory.

    The dependencies include:

    - `grunt`: A JavaScript task runner
    - `grunt-concurrent`: Used to run Grunt tasks concurrently
    - `grunt-contrib-clean`: A Grunt plugin for cleaning files and folders
    - `grunt-contrib-htmlmin`: A Grunt plugin to minify HTML
    - `grunt-contrib-less`: A Grunt plugin that compiles Less to CSS
    - `grunt-contrib-sass`: A Grunt plugin that compiles Sass to CSS
    - `grunt-contrib-uglify`: A Grunt plugin to minify JavaScript files
    - `grunt-contrib-watch`: A Grunt plugin for running predefined tasks whenever watched file patterns are added, changed or deleted
    - `grunt-replace`: A Grunt plugin to replace text patterns

    To install these dependencies, you'll need to use Node Package Manager (npm), which is included with Node.js. If you haven't installed Node.js, you can download it from [https://nodejs.org/](https://nodejs.org/).

    Once you have Node.js and npm installed, open a terminal in your project's root directory and run the following command:

    ```bash
    npm install --save-dev dependency-name
    ```
4. Start the development server:

    This project uses Grunt to run tasks such as building the project and starting a local server. The necessary Grunt tasks have been defined in a `Gruntfile.js` file in the project's root directory.

    To start the development server, run the following command:

    ```bash
    npm run grunt
    ```
    Or, to build the project, run
    ```bash
    npm run build
    ```
5. Open your browser and navigate to `localhost:8000` (or whatever port your server is running on):

    Alternatively, if you're using Visual Studio Code as your IDE, you can use the Live Server extension to serve your project. 

    To do this, first install the Live Server extension from the Extensions view (Ctrl+Shift+X). Then, right-click on your HTML file in the Explorer view and select "Open with Live Server" from the context menu. This will start a local development server and open your default web browser to display your project.

    Note: The Live Server extension will automatically refresh the page whenever you save changes to files in your project.

## Future Improvements

- Add the ability to generate multiple random numbers at once.