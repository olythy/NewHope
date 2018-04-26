import React from 'react'
import { Link } from 'react-router-dom'

import NewsLetter from '../../../Global/Footer/NewsLetter/NewsLetter'

const NewsLetterBanner = () => (
	<section className="NewsLetter-Banner">
	 	<h2>SUBSCRIBE TO<br />OUR NEWSLETTER</h2>
	 	<p>Do you want more? Do you want to get all these goodies on a daily basis? Join us in our movement for a better future!</p>
	 	<NewsLetter />
	</section>
);

export default NewsLetterBanner