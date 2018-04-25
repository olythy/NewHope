import React, {Component} from 'react'

import NewsLatestPopular from '../NewsLatestPopular/NewsLatestPopular'
import NewsCardHighLight from '../NewsCard/NewsCardHighLight/NewsCardHighLight'
import NewsCard from '../NewsCard/NewsCard'
import CategSlider from '../../CategSlider/CategSlider'
import NewsLetterMobileAppBanner from '../../NewsLetter-MobileApp-Banner/NewsLetterMobileAppBanner'

class NewsCategoryPage extends Component {
	render(){
            return(
                  <section className="NewsCategoryPage">
                         <CategSlider/>
                        <div className="Layout-width">
                              <div className="NewsCategoryPage--title">
                                 <h1>Employee experience</h1>
                              </div>
                              <NewsLatestPopular showCategs categOne="Latest" categTwo="Popular" stripe >
                                    <NewsCardHighLight />
                                    <div className="NewsCategoryPage--flexfix">
                                       <NewsCard />
                                       <NewsCard />
                                    </div>
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsLetterMobileAppBanner />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
                                    <NewsCard />
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

export default NewsCategoryPage