# Tha-Zen!  

### Table of Contents
- [Tha-Zen!](#tha-zen)
    - [Table of Contents](#table-of-contents)
    - [Front-End Mod 4 Take Home Challenge by: Shayan Golafshani](#front-end-mod-4-take-home-challenge-by-shayan-golafshani)
  - [Overview](#overview)
  - [Deployed](#deployed)
- [Instructions for Viewing Locally](#instructions-for-viewing-locally)
- [Learning Goals](#learning-goals)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Future Features](#future-features)
- [Contributors](#contributors)

### Front-End Mod 4 Take Home Challenge by: [Shayan Golafshani](https://github.com/shayan-golafshani)

## Overview
This was a take home challenge for module 4 at the Turing School of Software and Design. We were asked to make a simple react app of a new-reader.

You can find the spec [here](https://mod4.turing.edu/projects/take_home/take_home_fe).

## Deployed
The app is deployed to heroku [here](https://choose-news.vercel.app/)!

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
  
- As a user, you are greeted with a landing page that shows you a random top New York Times article that displays the category, title, multimedia image carousel, and which links to the actual page.  
<!-- [Main Page](https://user-images.githubusercontent.com/70605985/128796662-10e606cc-fd5f-40c4-b83d-93ffd636de22.png) -->

- Next there's an article selection page, where you can look up poems written by your favorite authors and have those display in scrollable cards!

<!-- ![Article Selection Page](https://user-images.githubusercontent.com/70605985/128796870-e6ae629d-dc99-4e2d-8c64-71a0cfcb2255.png) -->

<!-- - Then there's the favorite page! You can look at a list of all the poems you've favorited thus far. These poems persist via local-storage so you don't need to worry about losing them. 
 ![Favorite Page](https://user-images.githubusercontent.com/70605985/128797149-b86d2612-06cc-4b0c-a896-504864f61507.png) -->

   
- Router Error Handling - Trying to go to a fake url? Don't worry, we'll notify you and you can go back home, you're in good hands 🤲.

<!-- ![Screen Shot 2021-08-09 at 8 03 08 PM](https://user-images.githubusercontent.com/70605985/128797325-f4799566-3b2d-4036-a80d-337677f5c85c.png) -->


# Tech Stack
<table>
  <tr>
    <td>React </td>
    <td>React Router</td>
    <td>CSS</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="100" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
  </tr>
</table>
  
# Future Features 
 
  - Updated card view
  
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
  Taylor Want 
  Travis Rollins
  
Turing School of Software & Design 
