import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faFacebook } from '@fortawesome/free-brands-svg-icons';
import bannerImage from './banner-image.png';

export default function Content() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
	setIsAnimated(true);
  }, [])
  return (
	<div className="profile-details">
	<div className={`profile-text ${isAnimated ? 'animated' : ''}`}>
		<div class="row">
			<div class="col-md-6">
				<h6>Hi, I'M </h6>
				<h1>Tamizhazhagan</h1>
				<p>I am a Full Stack Developer expertise in ruby on rails & React js and also i am actively contributing to open source projects</p>
				<blackquote>
				<span class="quote-symbol">“</span>
					Where code meets creativity
				<span class="quote-symbol">“</span>
				</blackquote>
					<div className="profile-icon">
					<ul>
						<li><a href="https://www.linkedin.com/in/tamilz-alagan-77b264239/"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
						<li> <a href="https://github.com/tamilsm93?tab=repositories"> <FontAwesomeIcon icon={faGithub} /> </a></li>
						<li> <a href="https://medium.com/@tamilcrea"> <FontAwesomeIcon icon={faMedium} /> </a></li>
					</ul>
					</div>
			</div>
			<div class="col-md-4" style={{marginLeft: '10rem'}}>
				<img src={bannerImage} alt="Banner" style={{maxWidth: '100%', height: 'auto', maxHeight: '350px', padding: '10px'}} />
			</div>
		</div>
	</div>
</div>
  )
}
