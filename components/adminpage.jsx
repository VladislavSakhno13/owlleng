var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
class Adminpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img:"",
            lengname:"",
            name:"",
            reviews:0,
            number:""
        };
       this.getimg=this.getimg.bind(this);
       this.getlengname=this.getlengname.bind(this);
       this.getname=this.getname.bind(this);
       this.getnumber=this.getnumber.bind(this);
       this.new = this.new.bind(this);
    }
    getimg(event){
        let val = event.target.value;
         this.setState({img: val});
    }
    getlengname(event){
        let val = event.target.value;
         this.setState({lengname: val});
    }
    getname(event){
        let val = event.target.value;
         this.setState({name: val});
    }
    getnumber(event){
        let val = event.target.value;
         this.setState({number: val});
        
    }
    new(){
        let data = {
            img: this.state.img,
            lengname: this.state.lengname,
            name: this.state.name,
            reviews:"0",
            number: this.state.number
        }
        
        let dataset = JSON.stringify(data);
        axios.post('./rest/admin.php',dataset)
        .then(function(response){
            console.log(response.data);
        })
    }
    show(){
        axios.get('./rest/admin.php')
        .then(function(response){
           for(let i = 0;i<response.data.length;i++){

            let div1 =  document.createElement('div');
            let span1 = document.createElement('span');
            span1.innerHTML = response.data[i].id;
         
            let div2 =  document.createElement('div');
            let span2 = document.createElement('span');
            span2.innerHTML = response.data[i].img;
         
            let div3 =  document.createElement('div');
            let span3 = document.createElement('span');
            span3.innerHTML = response.data[i].legname;

            let div4 =  document.createElement('div');
            let span4 = document.createElement('span');
            span4.innerHTML = response.data[i].name;

            let div5 =  document.createElement('div');
            let span5 = document.createElement('span');
            span5.innerHTML = response.data[i].reviews;

            let div6 =  document.createElement('div');
            let span6 = document.createElement('span');
            span6.innerHTML = response.data[i].number;
         
            div1.appendChild(span1);
            div2.appendChild(span2);
            div3.appendChild(span3);
            div4.appendChild(span4);
            div5.appendChild(span5);
            div6.appendChild(span6);
         
            document.getElementById('d1').appendChild(div1);
            document.getElementById('d2').appendChild(div2);
            document.getElementById('d3').appendChild(div3);
            document.getElementById('d4').appendChild(div4);
            document.getElementById('d5').appendChild(div5);
            document.getElementById('d6').appendChild(div6);
           }
        })
    }
   
    render(){
        return(
            <div className="block">
                <form action="" id = "boxform">
                <label>ID</label><br/>
                <input type="text" className="admininput"/><br/>
                <label>IMG</label><br/>
                <input type="text" className="admininput" onChange={this.getimg}/><br/>
                <label>lengname</label><br/>
                <input type="text" className="admininput" onChange={this.getlengname}/><br/>
                <label>name</label><br/>
                <input type="text" className="admininput" onChange={this.getname}/><br/>
                <label>reviews</label><br/>
                <input type="text" className="admininput"/><br/>
                <label>number</label><br/>
                <input type="text" className="admininput" onChange={this.getnumber}/><br/>
                <div id="buttonblock">
                    <p className="buttonC" id="new" onClick={this.new}>Добавить</p>
                    <p className="buttonC" id="change" onClick={this.change}>Изменить</p>
                    <p className="buttonC" id="delet" onClick={this.delete}>Удалить</p>
                    <p className="buttonC" id="show" onClick={this.show}>Показать</p>
                </div>
                </form>
            <div className="showdata" id = "column">
                <div id = "d1"></div>
                <div id = "d2"></div>
                <div id = "d3"></div>
                <div id = "d4"></div>
                <div id = "d5"></div>
                <div id = "d6"></div>
            </div>
        </div>
            
        )
    }
}
module.exports = Adminpage; 