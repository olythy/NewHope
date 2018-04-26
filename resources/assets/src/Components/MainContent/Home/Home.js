import React, {Component} from 'react'

import HeaderSlider from '../HeaderSlider/HeaderSlider'
import NewsLatestPopular from '../News/NewsLatestPopular/NewsLatestPopular'
import NewsCard from '../News/NewsCard/NewsCard'
import TalksCategory from '../Talks/TalksCategory/TalksCategory'
import Events from '../Events/Events'
import StartupBanner from '../StartupHUB/StartupBanner/StartupBanner'
import NewsLetterMobileAppBanner from '../NewsLetter-MobileApp-Banner/NewsLetterMobileAppBanner'


class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render(){
        return(
            <section className="Home">
                <HeaderSlider />
                <div className="Layout-width">
                    <NewsLatestPopular name="Latest News" stripe >
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </NewsLatestPopular>
                </div>
                    <Events />
                <div className="Layout-width">
                    <TalksCategory name="See more" />
                    <StartupBanner />
                    <div className="Poll-and-MobileApp">
                       <NewsLetterMobileAppBanner />
                    </div>
                </div>
            </section>
        )
    }
}

export default Home