var React = require('react');
var axios = require('axios');
var ReactDOM = require('react-dom');
var Body = require('./body.jsx');
class Rewpage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.id,
            reviews1: 0,
            reviews2: 0,
            reviews3: 0,
            reviews4: 0,
            reviews5: 0
        };
        this.getrew1=this.getrew1.bind(this);
        this.getrew2=this.getrew2.bind(this);
        this.getrew3=this.getrew3.bind(this);
        this.getrew4=this.getrew4.bind(this);
        this.getrew5=this.getrew5.bind(this);
        this.setData = this.setData.bind(this);
    }
    setData(){
        let getdata = {
            id:this.state.id,
            reviews1: this.state.reviews1,
            reviews2: this.state.reviews2,
            reviews3: this.state.reviews3,
            reviews4: this.state.reviews4,
            reviews5: this.state.reviews5
        }
 
        axios.put("./rest/getteach.php",JSON.stringify(getdata))
        .then(function(response){
             alert("ваш отзыв добавлен");
             ReactDOM.render(<Body/>,document.getElementById('body'));
        })
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
    render(){
        return(
            <div className="shopbox3">
                <div>
                    <label>Компетентность</label><br/>
                <select name="" id="sel1" className="select" onChange={this.getrew1}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </div>
                <div>
                <label>Знание языка</label><br/>
                <select name="" id="sel2" className="select"  onChange={this.getrew2}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </div>
                <div>
        <label>Цена качество</label><br/>
                <select name="" id="sel3" className="select"  onChange={this.getrew3}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </div>
                <div>
                <label>Дружилюбие</label><br/>
                <select name="" id="sel4" className="select"  onChange={this.getrew4}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                </div>
                <div>
                <label>Подход к обучению</label><br/>
                <select name="" id="sel5" className="select"  onChange={this.getrew5}>
                <option value="" selected disabled hidden>Выберите число</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>   
                </div>
                <div className="submit">
                    <p className="btnsub" onClick={this.setData}>Добавить</p>
                </div>
            </div>
        )
    }
}
module.exports = Rewpage;