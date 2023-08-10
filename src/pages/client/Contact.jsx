import React, { Fragment } from 'react'

const ContactPage = () => {
    return (
        <Fragment>
            <div class="page-content mt-4 pt-4">
                <div class="container">
                    <div class="row px-2">
                    <div class="col-lg-6 mb-2 mb-lg-0">
                			<h2 class="title mb-1">Contact Information</h2>
                			<p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                			<div class="row">
                				<div class="col-sm-7">
                					<div class="contact-info">
                						<h3>The Office</h3>

                						<ul class="contact-list">
                							<li>
                								<i class="icon-map-marker"></i>
	                							Mirpur DOHS - Dhaka, Avenue 8, Dhaka
	                						</li>
                							<li>
                								<i class="icon-phone"></i>
                								<a href="tel:#">+8801736873879</a>
                							</li>
                							<li>
                								<i class="icon-envelope"></i>
                								<a href="mailto:#">info@booknest.com</a>
                							</li>
                						</ul>
                					</div>
                				</div>

                				<div class="col-sm-5">
                					<div class="contact-info">
                						<h3>The Office</h3>

                						<ul class="contact-list">
                							<li>
                								<i class="icon-clock-o"></i>
	                							<span class="text-dark">Monday-Saturday</span> <br/>11am-7pm ET
	                						</li>
                							<li>
                								<i class="icon-calendar"></i>
                								<span class="text-dark">Sunday</span> <br/>11am-6pm ET
                							</li>
                						</ul>
                					</div>
                				</div>
                			</div>
                		</div>
                		<div class="col-lg-6">
                			<h2 class="title mb-1">Got Any Questions?</h2>
                			<p class="mb-2">Use the form below to get in touch with the sales team</p>

                			<form action="#" class="contact-form mb-3">
                				<div class="row">
                					<div class="col-sm-6">
                                        <label for="cemail" class="sr-only">Email</label>
                						<input type="email" class="form-control" id="cemail" placeholder="Email *" required/>
                					</div>
                                    <div class="col-sm-6">
                                        <label for="csubject" class="sr-only">Subject</label>
                						<input type="text" class="form-control" id="csubject" placeholder="Subject"/>
                					</div>
                				</div>

                                <label for="cmessage" class="sr-only">Message</label>
                				<textarea class="form-control" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>

                				<button type="submit" class="btn btn-outline-primary-2 btn-minwidth-sm">
                					<span>SUBMIT</span>
            						<i class="icon-long-arrow-right"></i>
                				</button>
                			</form>
                		</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.47279917241!2d90.36770267455083!3d23.83733918543468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1da28248e65%3A0x3dbe73c739c2fb09!2sMirpur%20DOHS%20-%20Dhaka!5e0!3m2!1sen!2sbd!4v1691505299783!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactPage
