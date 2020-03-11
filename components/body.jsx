var React = require('react');
class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="owlleng"><span>Найди репетитора с OwlLeng</span></div>
                <img className="repimg" src="img/unnamed.jpg" alt=""/>
                <div className="ourwork">
                    <div className="box-1">
                        <p className="one">Найти репетитора</p>
                        <p className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia.</p>
                    </div>
                    <div className="box-2">
                        <p className="one">Посмотреть оценки </p>
                        <p className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia.</p>
                    </div>
                    <div className="box-3">
                        <p className="one">Выбрать нужный язык</p>
                        <p className="two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, mollitia.</p>
                    </div>
                </div>
            </div>
        )
    }

}
module.exports = Body; 