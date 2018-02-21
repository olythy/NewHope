import React from 'react'

const MobileAppBanner = () => (
	<section className="MobileApp-Banner">
	 	<div className="MobileApp-Banner--details">
		 	<h2>Download our<br />mobile app</h2>
			<p>Get all the latest content, quick and easy, tailored to only your preference.</p>
			<button className="btn-w">Download</button>
		</div>
		<div className="MobileApp-Banner--iphoneBG">
			<img id="iphone-big" src="/storage/Gfx/MobileApp/iphone-BGfilled.png" alt="Mobile App" />
		</div>
	</section>
);

export default MobileAppBanner