# Angularjs Exercise
*A 40 hour practice of AngularJS*

## What Is it about
This exercise is designed for people who are new to AngularJS and looking for a small project to work on. Through the exercise, you will explore the AngularJS MVW structure and how different parts communicate with each other. At the end of the exercise, you will have a more comprehensive idea of how to build single page applications through AngularJS.

## What Exactly You will Be Working on
You will be building a online shopping platform which allows consumers to browse, search, and purchase products. To make it less overwhelming for beginners, the entire exercise is pure AngularJS.

## How to Approach It
By the time you decide to work on the project, you should have basic knowledge of the basic building blocks of AngularJS such as Controllers and Services and Scope. 

It will be easier to follow the workflow if you focus on **one view at a time**. Each view might involve multiple smaller building blocks such as directives and services in different directories. Don't panic! Just follow the scipts and explore the logic. One of the beauties of MVW structure is that it breakdown your code into number of layers and keep each part of your code short and clear. So instead of having a huge chunck of javascript file, a healthy project tend to have small Javascript files grouped by their natures.

The soul purpose for this exercise is to get you into AngularJS world so focus on the framework itself (you can totally ignore other parts of the project like Bootstrap, RequireJS, and Testing code if you want.) I include those parts only because they are great tools that facilitate my development process.

## So Let's Get to It
Let's start from the top!

##### Project Structure
Sigle Page Application powered by AngularJS relies heavily on Javascript codes and HTML templates. Pretty much all the magic comes from them so first thing you need to do is to locate where they are.

All of our scripts and templates are located under ```javascripts``` and ```partials``` folder. Under ```javascripts``` folder, you can find all the AngularJS controllers, directives, and services there. Views are define as templtes which give us the freedom to do two way data binding.

##### Index page
```index.html``` under ```public``` folder  is where it starts. It includes all the scripts and stylesheets you need, so without RequireJS, you'll include all your modules and scripts there. Besides including assets, you can have your common html components through out the app and also locates where views should be when URL changes. 

##### Routing
Route configuration can be defined in ```app.config()``` function, which allows us to put one-time configuration settings in. In order to set up routing, you need ```$routeProvider``` to do the work. It takes two parameters that the first specifies URL and the second takes an object with template/controller pair.

##### View & Controller
For each ```view```, you will need ```controllers``` to perform your functionalities. You can define view/controller pair in configuration with ```$routeProvider```, which loads the specified views and controllers for different URLs. You can find view templates under ```public/partials``` and controllers under ```public/javascripts/controllers```. 

In all the templates, I use ```{{ expression }}``` for two-way data binding. ```ngRepeat``` is a very powerful directive for looping through an array and accessing the elements. So it's very useful for displaying lists or tables.

You'll need controllers to pair with the views to make them functional. The purpose of ```controller``` is to set up and update its ```$scope``` object to keep your data current and correct. ```$scope``` object contains your data and functions (for your buttons or links) that you need on your views. 

##### Service
You can write your logics in services. Services are great because they can be reused through out your application, and they give your code clear layers so that you can have small and concise ```controllers``` that is easy to read. Services are located under ```public/javascripts/services```. 

##### Directive 
Directives give you great flexibilities to create your elements with specific functionalities that you want them to perform. 


Now that you know what are the key components to an AngularJS app and where they are, you can start working on more details. With this shopping platform application, we need it to perform some basic functionalities: 

    - Display products
    - Display detail of selected product
    - Add/remove products to/from shopping cart
    - Display products in cart and the subtotal of purchase
    - Search products

In order to present them, we'll create one view for displaying multiple products, one for displaying product detail, and another one for displaying selected products in shopping cart. 

For displaying multiple products, you'll need to display all of your products in database (I use dummy data just for demonstration). In order to do that, you can write a service that retrieve all the product in database and assign the return value of the service to a ```$scope``` property. You can also implement a "quick shop" function simply by assigning a function to a scope property. 

For displaying selected product detail, you can include the product number on URL like ```#/product-detail/12345``` and use the product number ```12345``` from the URL to form your query to retrieve the product detail. To get the parameters on URL, ```$routeParams``` is an very useful object that contains all parameters on URL.