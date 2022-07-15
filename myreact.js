import React from 'react'
import ReactDom from 'react-dom/client';
const myELement = <h1> Hello, world! This is my first React page.</h1>
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(myELement)