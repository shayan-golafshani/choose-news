# Tha-Zen!  

### Table of Contents
- [Overview](#overview)
- [Deployed](#deployed)
- [Learning Goals](#learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Front-End Final Mod 3 Project by: [Shayan Golafshani](https://github.com/shayan-golafshani)

## Overview
This was the final mod3 project at the Turing School of Software and Design. I decided to make a zen-vibes poetry browser for people who want to explore poetry, while listening to lofi-music, and looking at abstract art. The audience is real niche, probably a little too niche. Here are the links of the User Personas I made when ideating the app. 
[Persona1](https://docs.google.com/document/d/1VFoHzFE2LR2X0Xfq9lH5kFs4qrvwQ3AncRIwOZWEDAM/edit?usp=sharing)
[Persona2](https://docs.google.com/document/d/1_PJsbCFfbB_HqptnrRsxO9fWwdqZS0YvPoiElQNzlK4/edit?usp=sharing)
You can find the spec [here](https://frontend.turing.edu/projects/module-3/niche-audience.html).

## Deployed
The app is deployed to heroku [here](https://tha-zen.herokuapp.com/)!

# Instructions for Viewing Locally 
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project

  
# Learning Goals 
  * Build upon the foundational skills of React, including use of React Hooks, useEffect and useState.  
  * Utilizes React Router for url navigation
  * Demonstart knowledge of error handling and conditional rendering
  * Retrieve and display poems from https://poetrydb.org and display images from https://thisartworkdoesnotexist.com/
  * Utilize PropTypes 
  * End-to-end testing of user flows using Cypress
  * Local storage use with React Hooks
  
# Walkthrough
  
- As a user, you are greeted with a landing page that shows you a poem sandwiched between some rad spinning art, and an easy to listen to lofi beat. 
  
[Main Page](https://user-images.githubusercontent.com/70605985/128796662-10e606cc-fd5f-40c4-b83d-93ffd636de22.png)

- Next there's a poem selection page, where you can look up poems written by your favorite authors and have those display in scrollable cards!

![Poem Selection Page](https://user-images.githubusercontent.com/70605985/128796870-e6ae629d-dc99-4e2d-8c64-71a0cfcb2255.png)

- Then there's the favorite page! You can look at a list of all the poems you've favorited thus far. These poems persist via local-storage so you don't need to worry about losing them. 
 ![Favorite Page](https://user-images.githubusercontent.com/70605985/128797149-b86d2612-06cc-4b0c-a896-504864f61507.png)

   
- Router Error Handling - Trying to go to a fake url? Don't worry, we'll notify you and you can go back home, you're in good hands 🤲.

![Screen Shot 2021-08-09 at 8 03 08 PM](https://user-images.githubusercontent.com/70605985/128797325-f4799566-3b2d-4036-a80d-337677f5c85c.png)


# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>CSS</td>
    <td>Cypress</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
  </tr>
</table>
  
# Future Features 
 
  - Finish implementing music/ lofi-beats playing page  
  - Add a meditation timer, that allows you to meditate on a random affirmation
  - Additional testing of user flows and end to end tests for new features 
  - Ability to show poems as pre-liked before the user clicks on an already favorited poem
  
# Contributors
 
 <table>
  <tr>
    <td><a href="https://github.com/shayan-golafshani">Shayan Golafshani</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/70605985?s=400&u=845dcf52043ae0d597a822d79920631dad6658b0&v=4" alt="Shayan Golafshani avatar"/></td>
  </tr>
</table>

Project Managers:  
  Kayla Wood https://github.com/kaylaewood  
  Scott Ertmer https://github.com/sertmer
  
Turing School of Software & Design 
