import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
// import ... from '...': This syntax imports required modules. React is the core library, ReactDOM handles rendering to the browser screen, and App is your main custom layout component.

// document.getElementById('root'): Standard web API syntax that looks through index.html to find that empty <div id="root">.

// ReactDOM.createRoot(...): This creates a React virtual pointer root structure on that specific container.

// .render(...): This method forces React to display the components on the screen.

// <React.StrictMode>: A specialized wrapper component that runs extra checks during development to highlight potential bugs or outdated syntax in your code.

// <App/>: This self-closing tag represents the main wrapper component defined inside App.jsx.
