var React = require('react');
var axios = require('axios');  
class Signup extends React.Component {
    constructor(props){//тут чиляться все данные накосячишь всему пизда
        super(props);
        this.state = {
           login:"",
           password:"",
           passwordagain:""
        };
       this.getLogin=this.getLogin.bind(this);
       this.getPassword=this.getPassword.bind(this);
       this.close = this.close.bind(this);
       this.getPasswordAgain = this.getPasswordAgain.bind(this);
    }
    getLogin(event){//логин
        let val = event.target.value;
        this.setState({login: val});
    }
    getPassword(event){ //пароль
        let val = event.target.value;
        this.setState({password: val});  
    }
    getPasswordAgain(event){//повтор пароля
        let val = event.target.value;
        this.setState({passwordagain: val});  
    }
    close(){ // после нажатия кнопки регистрации 
        let arrayData = {
            login: this.state.login,
            password: this.state.password
        }
        let passag = this.state.passwordagain;
        const strReg = JSON.stringify(arrayData);

        if(arrayData.password == passag && arrayData.password != undefined && passag != undefined){ //проверка паролей 
            
            axios.post('/rest/signup.php',strReg)
                .then(function(response){
                    console.log("good");
                })
                let form =  document.getElementsByClassName('signup'); //закрытие окна
                style = form[0].style;
                style.display = 'none';
        }
        else alert("error")
       
    }
    render(){
        return(
            <div className="signup" > 
           <p className="reg">Регистрация</p>
             <form action="" className="formreg">
                 <span>Ведите имя или почту</span><br/>
                 <input type="text" onChange={this.getLogin} placeholder="Логин" id="login"/><br/>
                 <span>Введите пароль</span><br/>
                 <input type="password" onChange={this.getPassword} placeholder="Пароль" id="password"/><br/>
                 <span>Повторите пароль</span><br/>
                 <input type="password" onChange={this.getPasswordAgain} placeholder="Повторите пароль" id="passwordagain"/><br/>
                 <p className="regist" onClick={this.close}>signup</p>
             </form>

            </div>
        )
    }
}
module.exports = Signup; 