var React = require('react');
class More extends React.Component {
    render(){
        return(
            <div id="pageTovar">
            <div className="shopbox">
                <p className="imgbox"><img src={this.props.img} alt=""/></p>
            </div>
            <div className="shopbox2">
                <div id="name">
                    <span >имя</span>
                </div>
                <div className="tovarblock">
                    <span id="articul">Язык:</span><span>{" " + this.props.articul}</span>
                </div>
                <div className="tovarblock" id="costtovar">
                    <span>оценка</span>
                </div>

                  <div className="tovarblock"><span>номер</span><span>{" " + this.props.n1}</span></div>
            </div>
        </div>
        )
    }
}
module.exports = More;