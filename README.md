# Angularjs Exercise
*A 40 hour practice of AngularJS*

## What Is it about
This exercise is designed for people who are new to AngularJS and looking for a small project to work on. Through the exercise, you will explore the AngularJS MVW structure and how different parts communicate with each other. At the end of the exercise, you will have a more comprehensive idea of how to build single page applications through AngularJS.

## What Exactly You Will Be Working on
You will be building a online shopping platform which allows consumers to browse, search, and purchase products. To make it less overwhelming for beginners, the entire exercise is pure AngularJS.

## How to Approach It
By the time you decide to work on the project, you should have basic knowledge of the basic building blocks of AngularJS such as Controllers and Services and Scope. 

It will be easier to follow the workflow if you focus on **one view at a time**. Each view might involve multiple smaller building blocks such as directives and services in different directories. Don't panic! Just follow the scipts and explore the logic. One of the beauties of MVW structure is that it breakdown your code into number of layers and keep each part of your code short and clear. So instead of having a huge chunck of javascript file, a healthy project tend to have small Javascript files grouped by their natures.

The soul purpose for this exercise is to get you into AngularJS world so focus on the framework itself (you can totally ignore other parts of the project like Bootstrap, RequireJS, and Testing code if you want.) I include those parts because they are great tools that facilitate my development process.

## So Let's Get to It
Let's start from the top!

##### Project Structure
All of our scripts and templates are located under 'javascripts' and 'partials' folder. Under 'javascripts' folder, you can find all of the AngularJS controllers, directives, and services there. Views are define as templtes which give us the freedom to do two way data binding.

'index.html' under 'public' folder includes all the scripts and stylesheets you need. It contains common html components through out the app and also locates where views should be when URL changes. 


