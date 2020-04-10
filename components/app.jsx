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
document.getElementById('catalog').onclick = function(){
    ReactDOM.render(<Catalog/>,document.getElementById('body'));
       axios.get('./rest/getteach.php')
       .then(function(response){
        for(let i = 0;i<16;i++){
            renderteacher(response.data[i]);
        }
       })
}

function renderteacher(datateach){//доп серги
    const div = document.createElement('div');
    div.className = "ringform";
    const img = document.createElement('img');
    img.src = datateach.img;
    img.className = "ring";
    const spantext = document.createElement('span');
    spantext.innerHTML = datateach.name;
    const spanleng = document.createElement('span');
    spanleng.innerHTML = datateach.legname;
    const spanrew = document.createElement('span');
    spanrew.innerHTML = datateach.reviews;
    const p = document.createElement('p');
    p.className="zakaz";
    p.innerHTML = "ПОДРОБНЕЕ";
    p.onclick = function(){
        ReactDOM.render(<More name = {datateach.name} legname = {datateach.legname} reviews = {datateach.reviews} img = {datateach.img} number = {datateach.number} id={datateach.id}/>,document.getElementById('body'));
    }
    div.appendChild(img);
    div.appendChild(spantext);
    div.appendChild(spanleng);
    div.appendChild(spanrew);
    div.appendChild(p);
    document.getElementById('forms').appendChild(div);
}