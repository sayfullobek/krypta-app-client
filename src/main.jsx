import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-number-input/style.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {Toaster} from "react-hot-toast";
// import 'react-wheel-of-prizes/dist/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastContainer/>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        <App/>
    </React.StrictMode>,
)
