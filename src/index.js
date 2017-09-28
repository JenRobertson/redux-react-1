import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import petsApp from './reducers'

const initialState = {
    pets: [
      {
        id: 0,
        name: 'frog',
        hunger: 1
      },
      {
        id: 1,
        name: 'lizard',
        hunger: 2
      },
      {
        id: 2,
        name: 'octopus',
        hunger: 3
      }
    ]
  }
 
let store = createStore(petsApp, initialState);

//provider allows everything to access the store! (only containers should tho)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)