import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import "./08-useReducer/intro-reducer"
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoApp />
)

  // <React.StrictMode>
  // </React.StrictMode>,