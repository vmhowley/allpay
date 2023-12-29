import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the render call
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.Fragment>
    <App />
</React.Fragment>
    )
