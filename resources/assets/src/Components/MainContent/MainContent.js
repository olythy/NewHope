import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'

import News from './News/News'
import NewsCategoryPage from './News/NewsCategoryPage/NewsCategoryPage'
import NewsArticlePage from './News/NewsArticlePage/NewsArticlePage'
import NewsAuthor from './News/NewsAuthor/NewsAuthor'


import Amsterdam from './Events/Amsterdam/Amsterdam'
import America from './Events/America/America'
import London from './Events/London/London'

import StartupHUB from './StartupHUB/StartupHUB'

import WhoWeAre from './About/WhoWeAre/WhoWeAre'
import Careers from './About/Careers/Careers'

import Terms from '../Global/Terms/Terms'
import NotFound from '../Global/404/NotFound'

import TravelUSA from './Events/America/Travel/TravelUSA'
import TravelAMS from './Events/Amsterdam/Travel/TravelAMS'

import SpeakersUSA from './Events/America/Speakers/SpeakersUSA'

import SponsorsAMS from './Events/Amsterdam/Sponsors/SponsorsAMS'
import SponsorsUSA from './Events/America/Sponsors/SponsorsUSA'

import AgendaUSA from './Events/America/Agenda/AgendaUSA'

import StartupUSA from './Events/America/Startup/StartupUSA'

import TicketsAMS from './Events/Amsterdam/Tickets/TicketsAMS'
import TicketsUSA from './Events/America/Tickets/TicketsUSA'


class MainContent extends Component {
	
      render(){
            return(
                  <main>
                        <Switch>
                              <Route exact path="/" component={Home}/>
                              
                              <Route exact path='/news' render={routeProps => <News {...routeProps} direction={this.props.direction}/>} />
            
                              <Route exact path="/amsterdam" component={Amsterdam}/>
                              <Route exact path="/america" component={America}/>
                              <Route exact path="/london" component={London}/>

                              <Route exact path="/startupHUB" component={StartupHUB}/>

                              <Route exact path='/aboutus' component={WhoWeAre} />
                              <Route exact path="/careers" component={Careers}/>                              
                              
                              <Route exact path="/terms" component={Terms}/>

                              <Switch>
                                    <Route exact path='/news/categpage' render={routeProps => <NewsCategoryPage {...routeProps} direction={this.props.direction}/>}/>
                                    <Route path="/news/categpage/article" component={NewsArticlePage}/>

                                    <Route exact path='/america/speakers' component={SpeakersUSA} />
                                    <Route exact path='/america/sponsors' component={SponsorsUSA} />
                                    <Route exact path='/america/agenda' component={AgendaUSA} />
                                    <Route exact path='/america/startup' component={StartupUSA} />
                                    <Route exact path='/america/travel' component={TravelUSA} />
                                    <Route exact path='/america/tickets' component={TicketsUSA} />
                                    
                                    <Route exact path='/amsterdam/sponsors' component={SponsorsAMS} />
                                    <Route exact path='/amsterdam/travel' component={TravelAMS} />
                                    <Route exact path='/amsterdam/tickets' component={TicketsAMS} />                         
                                    
            
                                    <Route component={NotFound}/>
                              </Switch>
                              
                              <Route component={NotFound}/>

                        </Switch>
                  </main>
            )
      }
}

export default MainContent