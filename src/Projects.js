import React from 'react'

export default function Projects() {
  return (
	<div className="project-details">
		<h2> Projects </h2>
		<div class="row">
			<div className="col-sm-4">
		  		<div className="card">
		  			<div className="card-body">
					  <h5 className="card-title">Swiggy Clone App</h5>
					  <p className="card-text">User can login into web app.User can order the food easily</p>
		  				<p> Swiggy clone App</p>
						  <button type="button" class="btn btn-primary">View</button>
		  			</div>
	  	  		</div>
		  	</div>
			<div className="col-sm-4">
				<div className='card'>
					<div className="card-body">
					<h5 className="card-title">Reddit Clone App</h5>
					<p className="card-text">
					Reddit is a social news aggregation, web content rating   </p>
						<p> Reddit Clone app</p>
						<button type="button" class="btn btn-primary">View</button>	
					</div>
				</div>
			</div>
			<div className="col-sm-4">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Calculator app</h5>
						A calculator is a device or tool used to perform mathematical calculations.
						<p> Calculator App </p>
						<button type="button" class="btn btn-primary">View</button>	
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
