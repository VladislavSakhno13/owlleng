var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var Catalog = require('./catalog.jsx');
var More = require('./openmore.jsx');
class Head extends React.Component {


    openMore(){
        ReactDOM.render(<Catalog/>,document.getElementById('body'));
        axios.get('./rest/getteach.php')
       .then(function(response){
        for(let i = 0;i<16;i++){
                const div = document.createElement('div');
                div.className = "ringform";
                const img = document.createElement('img');
                img.src = response.data[i].img;
                img.className = "ring";
                const spantext = document.createElement('span');
                spantext.innerHTML = response.data[i].name;
                const spanleng = document.createElement('span');
                spanleng.innerHTML = response.data[i].legname;;
                const spanrew = document.createElement('span');
                spanrew.innerHTML =response.data[i].reviews;
                const p = document.createElement('p');
                p.className="zakaz";
                p.innerHTML = "ПОДРОБНЕЕ";
                p.onclick = function(){
                        ReactDOM.render(<More name = {response.data[i].name} legname = {response.data[i].legname} reviews = {response.data[i].reviews} img = {response.data[i].img} number = {response.data[i].number} id={response.data[i].id}/>,document.getElementById('body'));
                }
                div.appendChild(img);
                div.appendChild(spantext);
                div.appendChild(spanleng);
                div.appendChild(spanrew);
                div.appendChild(p);
                document.getElementById('forms').appendChild(div);
                    }
                    console.log(response.data);
                })
    }


    openformup(){
       let form =  document.getElementsByClassName('signup');
       style = form[0].style;
        style.display = 'flex';
    }
    openformin(){
        let form =  document.getElementsByClassName('signin');
        style = form[0].style;
         style.display = 'flex';
     }
    render(){
        return(
            <div className="head" >      
                    <img src="img/logo.png" alt="" className="logo"/>

                    <span id="name"></span>
                   
                <div className="button">
                    <p className="buttonHead" id="catalog" onClick={this.openMore}> каталог</p>
                    <p className ="buttonHead" onClick={this.openformup}><a href="#">Sing up</a></p>
                    <p className ="buttonHead" onClick={this.openformin}><a href="#">Sing in</a></p>
                </div>
                   
                
                     
                
            </div>
        )
    }
}
module.exports = Head; 