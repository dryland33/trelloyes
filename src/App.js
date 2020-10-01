/* App.js:

The App component should render markup matching design.html: 
    * the main element, 
    * a header with the h1 and 
    * a div with class 'App-list'

The App component will accept 1 prop, store.

The store prop is an object with 2 keys: 
    * lists    - an array of objects 
    * allCards - an object where each key is a card's ID and the value is the card object with a title and content

Dummy STORE object is provided in store.js

The App should render a List component for each of the items in the store.lists array.

Each instance of the List component should be passed 2 props (and a key). 

The 2 props are:
    * header - a string for the List's header
    * cards  - an array of card objects
        + You'll need to combine the cardIds array for the list with the allCards object. */

import React from 'react';
import './App.css';
// eslint-disable-next-line
import List from './List';

function App() {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </main>
  );
}

export default App;