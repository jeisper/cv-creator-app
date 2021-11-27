First you will need npm/node and yarn.

you can install yarn by putting  npm install --global yarn into your terminal.

When yarn is installed you can cd into the project folder from your terminal and just type the command "yarn" into the terminal. This will
download all necessary packages. 

You will then need need to start the server by cd'ing into the server folder holding the file server.js
and running the command node server.js. this will set the server up and establish a connection withe the mongodb database.

Then in a new terminal window from the root of the folder just run yarn start which will load up the website on your localhost.

You can now browse the site freely.

This website creates cvs for the user by taking their information and parsing it into some saved templates that we have created.
First you will need to sign in to access these features, we have used firebases own google sign in to sign the user in/authenticate/etc. 
When signed in you will then be able to start filling out the form. 
Once the form has been filled out you can then go to the home page again by clicking the logo and clicking get started.
This will display a list of templates to choose from and you will be able to use a search bar here with advanced 
category search to narrow down choices. Once you have selected the template you would like to choose you will be able to preview it with your
details parsed into the cv which was stored on mongodb after the form was filled out. If you like this cv you can click the 
"publish" button which will be on top of the cv. This will publish the cv and you will then be able to use the link tyo send to any 
employers where they can then view your cv. These published cvs will be stored for the user in the profile page so the user can look after
later. Also on the profile page the user will be able to delete or edit all of the information they have provided which will then reflect
in the database. 