# The Library

This is a React/Redux application that lists an inventory of books. It allows a user to add books to the list and edit books within the list.

## Docker

To download a copy of the docker image first make sure you have the docker cli installed, then enter `docker run -p 3000:3000 tywestlie/book_library:part2` in your terminal. The application will then pop up on port :3000.

## The Process

When I started this application I wanted to approach it from a Rails point of view. Meaning, I wanted to follow all of the available conventions while writing the app. This wasn't too challenging because it seems that Redux uses quite a bit of convention in the setup. 

First I established the basic functionality of the React app (add-book-form and a list of books) without any state management. I then added the redux components and followed four steps. Step 1: create the store which takes initial state and the reducer. Step 2: create a book reducer, which takes in the current state of the application and the action triggered by a view, and returns the updated state. Step 3: create a subscribe function to get the current state and pass it through the components. Step 4: create dispatch action methods that trigger updates of the state through the reducer.

While working my way through the application I tried to utilize tools from the react-redux library like connect and the provider. They worked initially but ended up over complicating the process and I removed them so I could better understand how data was being passed through the components. The provider is advertised as 'Magic' in their documentation, coming from a Rails background I should have been excited but in this case I decided not use it. Instead I imported the store where it was necessary and passed it through the components as props. I also kept the actions inside the components to simplify things for me instead of abstracting them out into their own file.

While designing the input fields, I only allowed them to accept 64 characters, and require the user to enter a valid date to submit the book to the state.

There are a few things I'd like to add to this application going forward. I kept the styling to a minimum so I could learn the basics of managing state with Redux. I'll definitely use something like css grid to display the books along with a css framework like bootstrap. I also want to connect a CRUD API. It was challenging while designing the application to not work with a database. I also want to use docker for more applications, I was very surprised by how simple it was to make a container.
