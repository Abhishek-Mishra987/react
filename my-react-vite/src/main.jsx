import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h1>Mishra JI 2.0</h1>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to go to Google'
// }

const anotherElement = (
    <a href="https://www.google.com" target="_blank">
        Click me to go to Google - JSX
    </a>
)


const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    'Click me'
)


createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
