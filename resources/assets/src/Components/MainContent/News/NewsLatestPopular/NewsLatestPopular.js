import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NewsLatestPopular extends Component {
    
    constructor(props){
        super(props);
        this.state={
            latest:true,
            popular:false
        };
        this.activateLatest = this.activateLatest.bind(this);
        this.activatePopular = this.activatePopular.bind(this);
    }

    activateLatest () {
        this.setState({
            latest: true,
            popular: false
        });
    }
    activatePopular () {
        this.setState({
            latest: false,
            popular: true
        });
    }

    render(){

        return(
            <div className="News--wrp dflt">
                <div className="Headline">
                    <div className="News--Title-and-Categs">
                        {this.props.name ? <div className="News--title">
                            <h2>{this.props.name}</h2>    
                        </div> : null }
                        {this.props.showCategs ? <div className="News--Categs">
                            <button onClick={this.activateLatest} className={this.state.latest ? "btnspn-b" : "btnspn-b passive"}>
                              <span className="border-top">
                                <span className="transparent"></span>
                              </span>
                                {this.props.categOne}
                              <span className="border-bottom">
                                <span className="transparent"></span>
                              </span>
                            </button>
                            <button onClick={this.activatePopular} className={this.state.popular ? "btnspn-b" : "btnspn-b passive"}>
                              <span className="border-top">
                                <span className="transparent"></span>
                              </span>
                                {this.props.categTwo}
                              <span className="border-bottom">
                                <span className="transparent"></span>
                              </span>
                            </button>
                        </div> : null }
                    </div>
                    {this.props.stripe ? <div className="Stripe"></div> : null }
                    {this.props.seeAll ? <div className="seeAll">
                        <Link to="news">See all</Link>
                    </div> : null}
                </div>        
                <div className="NewsCard--wrp">
                    <div>{React.cloneElement(this.props.children, {...this.props})}</div>
                </div>
            </div>
        )
    }
}

export default NewsLatestPopular