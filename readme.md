## Setup instructions

1. First you will need npm/node.
2. Clone the project and cd into the directory ```cd cv-creator-app```
3. Type ```npm i``` command to install all necessary packages.
4. Next you need to start the development server for the react project by running ```npm run start``` This will open the project on your localhost port
5. Finally to start the backend server, in a new terminal window cd into the server directory in the project root folder ```cd server```  and then type ```node server.js``` The server should start running on port 5000 and the the database should connect if you have the .env file with authentication details

You can now browse the site freely.

## Signing in (authentication) and filling out the form/form validation:
This website creates cvs for the user by taking their information and parsing it into some saved templates that we have created.
First you will need to sign in to access these features as if you are not you will be prompted to sign in before continuing
We have used firebases own google sign in to sign the user in/authenticate/etc. We will use the firebase id that has been given here 
to retrieve, store, update and delete information on the website. When signed in you will then be able to start filling out the form. 
The form will just go thorugh everything we believe that will be important for adding to a cv. Evertime the user goes to the next 
screen we use axios to send this informationthgrough our server to our mongodb database.

## Choosing a template and advanced search bar:
Once the form has been filled out you can then go to the home page again by clicking the logo and clicking get started.
This will display a list of templates to choose from and you will be able to use a search bar here with advanced 
category search to narrow down choices. The templates information that are displayed here like the image and title are stored on mongodb
axios to retrieve this information thorugh our server using the firebase id as before mentioned.

## Displaying the users information into the templates:
Once you have selected the template you would like to choose you will be able to preview it with your
details parsed into the cv which was stored on mongodb after the form was filled out. Again this information is retrieved
through the server using an axios request and the users profile id that firebase created for us. If you like this cv you can click the 
"publish" button which will be on top of the cv. This will publish the cv and you will then be able to use the link to send to any 
employers where they can then view your cv. These published cvs will be stored for the user in the profile page so the user can look after
later.

## Profile page:
On the profile page the user will be able to delete or edit all of the information they have provided which will then reflect
in the database and as said before this will be the page where all of their published cv's will be held.

## Technical Details
## Frontend
- React.js framework
- ChakraUI design framework
- React Icons library
- Firebase Google Authentication

## Backend
- Node.js environment
- Express.js framework
- Mongo database
