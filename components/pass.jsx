var React = require('react');
var axios = require('axios');
var ReactDOM = require('react-dom');
class Pass extends React.Component {
    render(){
        return(
            <div>
                    <div id="passchi">
                    <input type="text" placeholder="ваш пароль" id="pass"/>
                    <p id="sendpass">Отправить</p>
                    </div>
            </div>
        )
    }
}
module.exports = Pass;