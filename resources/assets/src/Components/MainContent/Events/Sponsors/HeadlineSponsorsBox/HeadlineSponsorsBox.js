import React from 'react'
import {Link} from 'react-router-dom'

import SponsorImgBox from '../Sponsor/SponsorImgBox/SponsorImgBox'

const HeadlineSponsorsBox = props => (
	<section className="HeadlineSponsorsBox">
		<div className="HeadlineSponsorsBox--wrp">
			<div className="HeadlineSponsorsBox--Title">
				<h2>Our sponsors</h2>
				<div className="seeAll">
					<Link to={props.seeAll}>See all</Link>
				</div>
			</div>
			<div className="HeadlineSponsorsBox--Sponsors">
				<SponsorImgBox src={props.sponsorImgBox_1} />
				<SponsorImgBox src={props.sponsorImgBox_2} />
				<SponsorImgBox src={props.sponsorImgBox_3} />
				<SponsorImgBox src={props.sponsorImgBox_4} />
				<SponsorImgBox src={props.sponsorImgBox_5} />
				<SponsorImgBox src={props.sponsorImgBox_6} />
				<SponsorImgBox src={props.sponsorImgBox_7} />
				<SponsorImgBox src={props.sponsorImgBox_8} />
				<SponsorImgBox src={props.sponsorImgBox_9} />
			</div>
		</div>
		<div className="linear-BG"></div>
	</section>
)

export default HeadlineSponsorsBox