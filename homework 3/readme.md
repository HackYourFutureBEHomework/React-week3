# Homework Week 3

Base your week 3 homework on the result of week 2.

## Outline

Extend your todo list app with the ability to add new todo items and remove existing ones.

Create an add button and a text input. When the add button is clicked a new todo item is created with the given
description and deadline. Create also a remove button, which when clicked it should remove the todo item from the list.

> Challenge: figure out a way for users to enter the deadline date. This is a great opportunity to think like a community in a wider development community. Perhaps there are some **react** libraries out there that provide some kind of **date picker**? Also, look at **momentjs** to see if it could be useful.

A mockup of the end result is the following:

```
Todo List

Enter description: [           ] Deadline: [            ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```

Before you start draw a mockup and identify the components with colours.

As a bonus, have the option to edit the description of a todo item. A mockup of the end result, in this case, should be the following:

```
Todo List

Enter description: [           ] Deadline: [            ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [edit] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [edit] [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [edit] [remove]
```

And when edit is clicked in one of the components:

```
Todo List

Enter description: [           ] Deadline: [           ] [Add]

* [x] [Get out of bed    ] [update] [cancel] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
```


## Extra assignment

Take your assignment from week 1 (Movie list), change the json to a API call 
- Make an account at themoviedb.org / after go to settings and create an api key , tell them this is for educational purpose, when you create an application (https://www.themoviedb.org/settings/api)[https://www.themoviedb.org/settings/api]
- Read documentation at https://developers.themoviedb.org/3/getting-started/introduction
- Get all the genres https://developers.themoviedb.org/3/genres/get-movie-list and make a dropdown menu 
- Make a search button on click use the selected genre to find all movies for that genre (use genre id) https://developers.themoviedb.org/3/discover/movie-discover