var React = require('react');
var axios = require('axios');
class More extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
       this.setData=this.setData.bind(this);
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
            <div className="shopbox3">
                
            </div>
        </div>
        )
    }
}
module.exports = More;