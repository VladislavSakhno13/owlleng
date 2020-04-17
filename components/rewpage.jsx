var React = require('react');
var axios = require('axios');
var ReactDOM = require('react-dom');
class Rewpage extends React.Component {
    render(){
        return(
            <div>
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
                <label>Цена/Качество</label><br/>
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