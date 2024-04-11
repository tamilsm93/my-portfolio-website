import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

export default function Skils () {
  return (
		<div className="container">
		<h2 className="skils-title">Technical Skils</h2>
			<div className="row">
				<div className="col-sm-4">
					<h3>HTML </h3>
					<progress id="file1" value="80" max="100"> 80%</progress>
					<p> 90% </p>
					<p>Lorem ipsum dolor..</p>
				</div>
				<div className="col-sm-4">
					<h3>CSS</h3>
					<progress id="file2" value="70" max="100"> 70%</progress>
					<p> 80% </p>
					<p>Lorem ipsum dolor..</p>
				</div>
				<div className="col-sm-4">
					<h3>JAVASCRIPT </h3>
					<progress id="file3" value="75" max="100"> 75%</progress>
					<p> 75%</p>
					<p>Lorem ipsum dolor..</p>
				</div>
			</div>
			<div className="row" style={{ marginTop: '55px' }}>
				<div className="col-sm-4">
					<h3>Reactjs</h3>
					<progress id="file4" value="80" max="100"> 80%</progress>
					<p> 80% </p>
					<p>Lorem ipsum dolor..</p>
				</div>
				<div className="col-sm-4">
					<h3>RUBY ON RAILS</h3>
					<progress id="file5" value="90" max="100"> 90%</progress>
					<p> 90% </p>
					<p>Lorem ipsum dolor..</p>
				</div>
				<div className="col-sm-4">
					<h3>VUE JS</h3>
					<progress id="file6" value="60" max="100"> 60%</progress>
					<p> 60% </p>
					<p>Lorem ipsum dolor..</p>
				</div>
			</div>
		</div>
  )
}
