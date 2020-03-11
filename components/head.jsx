var React = require('react');
class Head extends React.Component {
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
                    <p className="buttonHead" id="catalog"> каталог</p>
                    <p className ="buttonHead" onClick={this.openformup}><a href="#">Sing up</a></p>
                    <p className ="buttonHead" onClick={this.openformin}><a href="#">Sing in</a></p>
                </div>
                   
                
                     
                
            </div>
        )
    }
}
module.exports = Head; 