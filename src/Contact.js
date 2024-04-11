import React from 'react'

export default function Contact() {
  return (
	<div className="contact-details">
		<h2> Contact </h2>
		<form action="#" method="post">
		<div class="form-group">
			<label for="email">Email:</label>
			<input type="text" id="email"  class="form-control"  name="email" placeholder="Enter your email"style={{ width: '35em'}}/>
			<label for="email">Mobile Number:</label>
			<input type="text" id="number"  class="form-control" name="phoneNumber" placeholder="Enter your number"style={{ width: '35em'}}/>
			<br />
			<label for="email">Message:</label>
			<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message" style={{ width: '35em'}} />
			<br />
			<button type="submit">Submit</button>
		</div>

		</form>
	</div>
  )
}
