var ReactDOM = require('react-dom');
var React = require('react');
var Head = require('./head.jsx');
var Signup = require('./signup.jsx');
var Signin = require('./signin.jsx');
var Body = require('./body.jsx');
var Bottom = require('./bottom.jsx');
var Catalog = require('./catalog.jsx');
var More = require('./openmore.jsx');
var axios = require('axios');
ReactDOM.render(<Head/>,document.getElementById('head'));
ReactDOM.render(<Signup/>,document.getElementById('signup'));
ReactDOM.render(<Signin/>,document.getElementById('signin'));
ReactDOM.render(<Body/>,document.getElementById('body'));
ReactDOM.render(<Bottom/>,document.getElementById('bottom'));

