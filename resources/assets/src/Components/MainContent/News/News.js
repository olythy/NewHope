import React, {Component} from 'react'
import NewsCard from './NewsCard/NewsCard'
import NewsCategory from './NewsCategory/NewsCategory'
import NewsSaved from './NewsSaved/NewsSaved'
import NewsRecommended from './NewsRecommended/NewsRecommended'
import NewsLatestPopular from './NewsLatestPopular/NewsLatestPopular'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import CategSlider from '../CategSlider/CategSlider'
import NewsLetterMobileAppBanner from '../NewsLetter-MobileApp-Banner/NewsLetterMobileAppBanner'

class News extends Component {
    render(){
        return(
            <section className="News">
            <HeaderSlider />
            <CategSlider direction={this.props.direction}/>
            <div className="Layout-width">
                <NewsLatestPopular name="Latest" stripe seeAll>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </NewsLatestPopular>
                <div className="NewsCateg--wrp">
                    <NewsCategory name="HR Tech"/>
                    <NewsSaved />
                </div>
                <NewsCategory name="Future of Work" src="/storage/Gfx/News/news-defaultIMG2.jpg" />
                <div className="NewsCateg--wrp">
                    <NewsRecommended />
                    <NewsCategory name="Learning"/>
                    
                </div>
                <NewsCategory name="Recruitment" src="/storage/Gfx/News/news-defaultIMG3.jpg" />
                <NewsLatestPopular name="Going Digital" stripe seeAll>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </NewsLatestPopular>
                <NewsLetterMobileAppBanner />
                <NewsLatestPopular name="Popular" stripe seeAll>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </NewsLatestPopular>
            </div>
        </section>
        )
    }
}


export default News