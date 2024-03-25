# **WORLD WEATHER**

![Live Project Mockup](assets/images/am-i-responsive-updated.png)

[Link to Live Project](https://codeconnoisseur74.github.io/world-weather-p2/)

## Table of Contents
- [**WORLD WEATHER**](#world-weather)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Updates](#updates)
  - [UX](#ux)
    - [User Stories](#user-stories)
  - [Features](#features)
    - [Current Weather Data](#current-weather-data)
      - [Random image of current city](#random-image-of-current-city)
      - [Current Weather Data](#current-weather-data-1)
    - [Performance](#performance)
    - [Security](#security)
    - [Features Left to Implement](#features-left-to-implement)
    - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
  - [Testing](#testing)
    - [W3S Jigsaw CSS Validator](#w3s-jigsaw-css-validator)
    - [JSHint Validation](#jshint-validation)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Forking the GitHub Repository](#forking-the-github-repository)
    - [Cloning the GitHub Repository](#cloning-the-github-repository)
  - [Credits](#credits)
    - [Code](#code)
    - [Content](#content)
    - [Media](#media)
    - [Other](#other)

## Introduction
World Weather is a weather website where the user can search for the current weather by city. The background image correspods with a random image of that city is fetched from unsplash.com. Current weather information includes: temprature in celcius, cloud status, humidity and windspeed. This weather data is fetched from openweatherapp.org. The site allows the user to quickly access current weather information of any major city worldwide whilst a corresponding image is provided to the user in realtime. The site is responsive to any size desktop, tablet or smartphone device. 

## Updates

* Fixed responsiveness in CSS with adding: background-size: cover;
  background-position: center, center; to the body element in styles.css.

* Fixed Favicon error by utilizing ![favicon.io](![Weather Home Page Search Results](assets/images/weather-home-london.png))

* Fixed links opening up into new windows by removing the lines rel='noopener noreferrer" target="_blank" from index.html.

* Git commits were too few and not detailed in the description. The updated version has well written commits that are more detailed and easier to follow. 
  
* Comments are added to styles.css
 
[The live project can be found here.](https://codeconnoisseur74.github.io/world-weather-p2/)
## UX

### User Stories

| ID  | As a...        | I Want To Be Able To...                                            | So That I Can...                                                                                              |
| --- | -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| 01  | As a traveler  | quick access to weather in major cities                            | can quickly receive up to date weather forecasts for quick and easy travel planning.                          |
| 02  | young user     | access quick weather info                                          | enjoying the random images that appear in realtime for major cities around the world I hope to visit one day. |
| 03  | office manager | using the website on the plasma screen in the lounge of the office | esthetically pleasing image of local city with current weather conditions                                     |

## Features

### Current Weather Data
* User can search for current weather in any major city in the world. 
* Weather data includes:  temprature in celcius, cloud status, humidity and windspeed.


#### Random image of current city 

* the city that is searched, will bring up a random image from unsplash. com along with the weather information corresponding with the city choice. 

![Weather Home Page Search Results](assets/images/weather-home-london.png)

#### Current Weather Data

* Current weather data is displayed showing: tempraturein celcius, cloud status, windspeed and humidity. 
* Weather Data is current and a quick refresh of the browser updates the weather data for chosen city through the search option.

![Weather Home Page Search Results](assets/images/weather-home.png)

### Performance

Testing performace using Lighthouse within Google Chrome Developer Tools was not implimented in the previos version of the website. 

The first Lighthouse test was performed using the local host:

![Lighthouse local host](assets/images/lighthouse-performance-100.png) 

The second Lighthouse test was performed using the deloyed website:

![Lighthouse local host](assets/images/lighthouse-performance-responsive.png) 

### Security

The security of the website was tested using the security section of Google Chrome Developer tools:

![Lighthouse local host](assets/images/security.png) 

### Features Left to Implement

* The feature to automatically refresh weather data for selected city so the user does not have to manually refresh the browser in order to update the current weather data. 

### Technologies Used

### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5), [CSS3](https://en.wikipedia.org/wiki/CSS), [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

* [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) has been used to assist with the styling of the site and particularly the responsiveness.
* [Node.js](https://nodejs.org/en/) has been used to assist JavaScript with implimentation of the website capabilities to fetch and recieve weather data and corresponding images on the website. 
* [OpenWeatherMap](https://openweathermap.org/guide) has been used to create the API Access Key and API in order to fetch current weather data.
* [Unsplash](https://unsplash.com/documentation#list-collections) has been used to provide the Corresponding City images for the website. 
* [The W3C Markup Validator](https://validator.w3.org/#validate_by_input) has been used to validate the html code.
* [The W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) has been used to validate the CSS code. 
* [JShint](https://jshint.com/) has been used to validate the JavaScript code.

## Testing

The W3C Markup Validator showed no errors when validating the html code. 

![W3S HTML Validation](assets/images/html-validate.png)

Update: Upon updating the index.html, the W3C Markup Validator indicated trailing slash errors and a missing attribute in the link element:

![W3S HTML Validation](assets/images/wc3-html-errors.png)

The following resource assisted in solving these issues:

A link element with a "rel" attribute that contains the value "preload"must have an "as" attribute.[Rocket Validator](https://rocketvalidator.com/html-validation/a-link-element-with-a-rel-attribute-that-contains-the-value-preload-must-have-an-as-attribute)

### W3S Jigsaw CSS Validator

The W3S Jigsaw CSS Validator showed no errors when validating the CSS code:

![W3S Jigsaw CSS Validation](assets/images/wc3-validator.png)

### JSHint Validation

The jsHint validator initially showed over 12 warnings regarding the validity of the JavaScript code. This was a known issue regarding the "ES6 version" in VScode. Updating the settings.JSON file in VS code rectified this. 

![JSHint Validation](assets/images/js-validate.png)

The JSHint then showed no errors when validating the JavaScript code. 

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages. The following steps are used to deploy the site:
* Navigate to GitHub and locate and select the GitHub repository.
* Navigate to the settings tab and select the 'Pages' tab from the menu.
* Under 'Source' click the dropdown labelled 'None' and select the 'master' branch.
* Click save. The page will automatically refresh and the published site link can be found on the 'Pages' tab.
* The link can be found here - link to live site

### Forking the GitHub Repository

The following steps can be used to fork the GitHub repository:
* On GitHub navigate to the main page of the repository.
* The 'Fork' button can be found on the top righthand side of the screen.
* Click the button to create a copy of the original repository.

### Cloning the GitHub Repository

The following steps can be used to clone the GitHub repository:
* On GitHub navigate to the main page of the repository.
* Above the list of files select 'Code'.
* Three options are provided, HTTPS, SSH and GitHub CLI. Select the appropriate option and click the 'Copy' button next to the URL.
* Open Git Bash.
* Change the working directory to the location for the cloned directory.
* Type git clone and paste the copied URL.
* Press 'Enter' to create the clone.

## Credits

* R3HAB MEDIA youtube video on fixing the JS hint issue regarding the settings.JSON file.[YouTube](https://www.youtube.com/watch?v=QDzeU1FUZRk)

* JSHint ES6 errors fix.[How do I resolve these JSHINT ES6 errors](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360000112510-How-do-I-resolve-these-JSHint-ES6-errors)

*  A link element with a "rel" attribute that contains the value "preload"must have an "as" attribute.[Rocket Validator](https://rocketvalidator.com/html-validation/a-link-element-with-a-rel-attribute-that-contains-the-value-preload-must-have-an-as-attribute)

* Adding Google Fonts API.[Get Started with the Google Fonts APII](https://developers.google.com/fonts/docs/getting_started)

### Code
* [10 JavaScript project Ideas for beginners](https://www.makeuseof.com/javascript-beginner-project-ideas/)

### Content
* [GStatic](https://fonts.gstatic.com) Icons and Font Styles.
* [Google Fonts](https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap) DM Serif Display

### Media
* [Unsplash](https://unsplash.com/documentation#list-collections) Screen Images, API and Access Key for fetching images that correspond with the User input of City search.

* [favicon](https://favicon.io/) Favicon generator.

### Other

* [Ami I Responsive?](https://ui.dev/amiresponsive) Testing the Responsive design of the Website. 
