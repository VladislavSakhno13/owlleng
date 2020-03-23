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
                <div>
                <select name="" id="">
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
                <select name="" id="">
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
                <select name="" id="">
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
                <select name="" id="">
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
                <select name="" id="">
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
                
            </div>
        </div>
        )
    }
}
module.exports = More;