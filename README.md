# Techdegree Project 6
Treehouse Full-Stack JS TechDegree

This is a portfolio site to showcase the great projects I've built for the Treehouse TechDegree. The site contains a modern landing page, an about page and a series of project pages that detail my first five projects from this Techdegree.

Github repo: https://github.com/alteredco/techdegree_project_6

Clone the Repo to start: 
```
git clone https://github.com/alteredco/techdegree_project_6
```

Working version of this project can be found here: 
_____________
# Features:

A JSON file is used as a flat data file to store data about created projects.

Pug is utilised to build templates that access the JSON data to generate the markup that is ultimately displayed in the browser.

Node.js and Express is used to:

Import the required dependencies
Link the JSON with the Pug templates
Set up routes to handle requests
Set up the middleware to utilize static files like CSS
Handle errors
Set up a server to serve the project

This project demonstrates my comfortable working knowledge of Node.js, Express and Pug, setting up a server, handling requests, working with server-side JavaScript, and building a powerful and modern back end project. 

**FOR EXCEEDS**


 ```npm start``` will run the app.

Error handling middleware will render a Pug template called error.pug. This Pug file extends the layout and displays the error.message, error.status, and error.stack properties.When the request URL is for a non-existent route, the error.pug template will be displayed in the browser along with the following properties:
error.message
error.status
error.stack

This project utilizes a customized color palette and fonts.
Fade in animations are added on window load.
Custom logo is added to layout.pug.
Font awesome linked in the layout.pug head and icons added to project.



