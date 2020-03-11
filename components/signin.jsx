var React = require('react');
var axios = require('axios');
class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           login:"",
           password:"",
        };
       this.getLoginin=this.getLoginin.bind(this);
       this.getPasswordin=this.getPasswordin.bind(this);
       this.closein = this.closein.bind(this);
    }
    getLoginin(event){
        let val = event.target.value;
        this.setState({login: val});
    }
    getPasswordin(event){
        let val = event.target.value;
        this.setState({password: val});
    }
    closein(){
        let arrayData = {
            login: this.state.login,
            password: this.state.password
        }
    

        if( arrayData.password != "" && arrayData.password != ""){ //проверка паролей 
            
            axios.get('/rest/signup.php')
                .then(function(response){
                    let arr = response.data;
                    let longdata = arr.length;
                    for(let i = 0; i < longdata; i++){
                        if(arrayData.password == arr[i].password && arrayData.login == arr[i].login){
                            document.getElementById('name').innerText = "Добро пожаловать " + arr[i].login;
                            
                            
                        }
                    }
                })
                let form =  document.getElementsByClassName('signin');
                style = form[0].style;
                style.display = 'none';
        }
        else alert("error")
        
    }
    render(){
        return(
            <div className="signin" > 
                <p className="reg">Авторизация</p>
             <form action="" className="formreg">
                 <span>Ведите логин</span><br/>
                 <input type="text" placeholder="Логин" onChange={this.getLoginin}/><br/>
                 <span>Введите пароль</span><br/>
                 <input type="password"  placeholder="Пароль" onChange={this.getPasswordin}/><br/>
                 <p className="regist" onClick={this.closein}>signin</p>
             </form>

            </div>
        )
    }
}
module.exports = Signin; 