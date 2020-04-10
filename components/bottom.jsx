var React = require('react');
var ReactDOM = require('react-dom');
var AdminPage = require('./adminpage.jsx');
class Bottom extends React.Component{
    openAdminPage(){
        ReactDOM.render(<AdminPage/>,document.getElementById('body'));
    }
    render(){
        return(
            <div className="bottom">
                <p><a href="https://e.mail.ru/inbox/?back=1">Наша почта</a></p>
                <p>Улица Пушкина дом колотушкина</p>
                <p>Хз че еще написать<p className="admin" onClick={this.openAdminPage}></p></p>
            </div>
        )
    }
}
module.exports = Bottom;