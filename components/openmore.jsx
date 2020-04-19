var React = require('react');
var axios = require('axios');
var ReactDOM = require('react-dom');
var Rewpage = require('./rewpage.jsx');
class More extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id,
            reviews1: 0,
            reviews2: 0,
            reviews3: 0,
            reviews4: 0,
            reviews5: 0,
            pass:""
        };
        
       this.getrew1=this.getrew1.bind(this);
       this.getrew2=this.getrew2.bind(this);
       this.getrew3=this.getrew3.bind(this);
       this.getrew4=this.getrew4.bind(this);
       this.getrew5=this.getrew5.bind(this);
       this.setData=this.setData.bind(this);
       this.getp=this.getp.bind(this);
       this.openclose=this.openclose.bind(this);
    }
    getp(event){
        let val = event.target.value;
        this.setState({pass:val});
    }
    getrew1(event){
        let val = event.target.value;
         this.setState({reviews1: val});
    }
    getrew2(event){
        let val = event.target.value;
         this.setState({reviews2: val});
    }
    getrew3(event){
        let val = event.target.value;
         this.setState({reviews3: val});
    }
    getrew4(event){
        let val = event.target.value;
         this.setState({reviews4: val});
    }
    getrew5(event){
        let val = event.target.value;
         this.setState({reviews5: val});
    }
    setData(){
       let getdata = {
           id:this.props.id,
           reviews1: this.state.reviews1,
           reviews2: this.state.reviews2,
           reviews3: this.state.reviews3,
           reviews4: this.state.reviews4,
           reviews5: this.state.reviews5
       }

       axios.put("./rest/getteach.php",JSON.stringify(getdata))
       .then(function(response){
            console.log(response.data);
       })
    }
    openclose(){
        let id = this.state.id;
        let data = {
           pass: this.state.pass
        }
        console.log(data);
        axios.post('./rest/signup.php',JSON.stringify(data))
        .then(function(response){
            console.log(response.data);
                if((response.data.status == "Error") || (response.data == "error")){
                    alert("Введите свой пароль");
                }
                else{
                    ReactDOM.render(<Rewpage id={id}/>,document.getElementById('shopbox32'));
                }
        })
        
    }
    render(){
        return(
            <div id="pageTovar">
            <div className="shopbox">
                <p className="imgbox"><img src={this.props.img} alt=""/></p>
            </div>
            <div className="shopbox2">
                <div id="name">
                    <span >Имя:</span><span >{" " + this.props.name}</span>
                </div>
                <div className="tovarblock">
                    <span id="articul">Язык:</span><span>{" " + this.props.legname}</span>
                </div>
                <div className="tovarblock" id="costtovar">
                    <span>Оценка:</span><span>{" " + this.props.reviews}</span>
                </div>

                  <div className="tovarblock"><span>номер</span><span>{" " + this.props.number}</span></div>
            </div>
            <div id="shopbox32">
                    <div id="passchi">
                        <input type="text" placeholder="ваш пароль" id="pass" onChange={this.getp}/>
                        <p id="sendpass" onClick={this.openclose}>Отправить</p>
                    </div>
            
            </div>
        </div>
        )
    }
}

module.exports = More;