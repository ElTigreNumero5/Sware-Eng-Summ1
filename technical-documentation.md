# Technical documentation

This app is built using HTML, CSS and JavaScript. 

Pages, their elements and broad positions are composed using HTML. Each page is contained within its own HTML file as follows:
- `index.html`
- `inputs.html`
- `outputs.html`

The broad structure of each page is a full screen background, a phone-sized container for displaying the app, and specific functional items and components within that phone container, for example buttons, titles, charts, information boxes, etc.

Within each HTML file is also the JavaScript used to drive the app’s programmatic functionality. This undertakes such tasks as holding values in variables, constructing charts and defining functions for use with varying input parameters. Each function, it’s description and use is detailed as follows:

## index.html

### `getAttendData(url, userTarget)`

This function fetches as yet unbuilt user entered data about attendances. For now it uses hardcoded data allocated to a variable in the index.html script. It takes two input parameters `url` and `userTarget`.
	
#### Input parameters:

`url` describes the location of the attendance data. 

`userTarget` is allocated by functionality in the input.html page. This may take a value or be undefined if a user has never set a target.

#### Returns:

`{labels, targets, attends}` an object containing three variables of the same names.

The function fetches the data from `url`, waits for a response and then converts it to text. Using that text it produces three arrays, one for each column of data and returns those arrays for use by other functions.

### `buildChart({labels, targets, attends})`

This function uses the data returned by `getAttendData` and constructs a column chart of attendance percentage by month, with a secondary series displaying the current user attendance target percentage as a line.

## inputs.html

### `attendTargetSet()`

This function allows users to set their attendance target percentage value by clicking the appropriate button in the app. It listens for the button press, then prompts the user to enter an integer of between 0 and 100. If the user input is cancelled the function doesn’t return anything. If the user provides an invalid value that are prompted to correct it – the function will not accept an invalid entry. A correct entry is stored as a a variable and to local storage to allow persistence across pages and app sessions. The variable is then used to show the target attendance value on screen in the page.
		
#### Input parameters

None

#### Returns

Function does not return anything specifically, but does have side effects that update the page.

The function is initialised on page load, and operates when the “Set target” button is pressed.


## outputs.html

### `daysLeft(attendDays, workDays, targetPC)`

This function calculates and outputs the number of days needed to hit the attendance target in the current month, based on the number of working days available in the given month, the attendance target percentage provided by the user, and the number of attendances that have already taken place in the given month. 

#### Input parameters:

`attendDays` The number of days of attendance that have taken place in the month

` workDays` The number of working days available in the month

` targetPC` The attendance target percentage
		
#### Returns
	
`daysToHit` The number of attendance days required to hit target

The function is called by the outputs.html page and uses the output value to populate the appropriate container for user viewing.


## CSS

CSS is used to style each page, and this style sheet is contained in a single file `base.css`. Some classes may occur in isolation and so have their own allocated characteristics. Others, which share certain characteristics such as colour, font, font size, font colour, etc., share a class definition, for example buttons. Variations to this class are specified for individual occurrences. 

E.g. the `.button` class:

`.button {
  background-color: #535353;
  color: #AEA4B2;
  font-family: "KodeMono";
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  width: 229px;
  height: 246px;
}
`

And the variation `.button3`:

`.button3 {
  height: 84px;
  width: 142px;
  font-size: 22px;
}
`

The main font used in the app is [Kode Mono]( https://kodemono.com/?char=A&weight=400), which can be downloaded from the [font’s GitHub repo]( https://github.com/isaozler/kode-mono).

## How to run the app locally

There are a number of methods of running this app locally, but it is not simply a case of downloading all the files and opening the front page, which would result in several issues. Here are described specific steps for one method of ensuring successful local operation.

- Clone the repo
    - Follow steps for [cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)
    - Clone [this app's repo](https://github.com/ElTigreNumero5/Sware-Eng-Summ1) to your chosen local working directory.
- Open Visual Studio Code
    - Install if not already installed - [free download here](https://code.visualstudio.com/download)
    - Install the extension Live Server by Ritwick Dey, if not already installed
- Open `index.html` with Live Server
    - Right click on the file and select "Open with Live Server"


## Testing

This project uses Node and Jest to run its testing suite and the unit testing script is found in `.\__tests__\summ1.test.js`. Follow these instructions for running local testing.

- Install Node by following the install instructions given on the [Node JS download page](https://nodejs.org/en/download)
- Install Jest by following the install instructions given on the [Jest getting started page](https://jestjs.io/docs/getting-started)
- Open a command line terminal in VS Code
- From the command line, navigate to the working directory containing this cloned repo
- Set the path to the location of your Node install
- Enter `npm test` to run the testing suite

! IMPORTANT NOTE !: unit testing runs using a dedicated `functions.js` file, rather than the functions that are used in the html files. This is a fundamental weakness of this app, with duplication of code risking errors, and testing not actually taking place on the code being used to run the app.