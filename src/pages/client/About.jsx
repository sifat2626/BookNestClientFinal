import React, { Fragment } from 'react'
import team1 from "../../assets/client/images/team/member-1.jpg"
import team2 from "../../assets/client/images/team/member-2.jpg"
import team3 from "../../assets/client/images/team/member-3.jpg"
import team4 from "../../assets/client/images/team/member-4.jpg"
import signature from "../../assets/client/images/team/signature.png"
import banner from "../../assets/client/images/banner-7.jpg"

const About = () => {
    return (
        <Fragment>
            <div class="page-content pt-4 mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="about-text text-center mt-3">
                                <h2 class="title text-center mb-2">Who We Are</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam veritatis possimus! Vero non quisquam doloribus, quaerat natus facere? Vel quia velit, distinctio rem excepturi sint voluptas at quaerat quo! Vero ullam veritatis possimus! Vero non quisquam doloribus, quaerat natus facere.</p>
                                <img src={signature} alt="signature" class="mx-auto mb-5" />
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-sm-6">
                            <div class="icon-box icon-box-sm text-center">
                                <span class="icon-box-icon">
                                    <i class="icon-puzzle-piece"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Book Quality</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cum ipsa repudiandae asperiores.<br/>eu augue.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="icon-box icon-box-sm text-center">
                                <span class="icon-box-icon">
                                    <i class="icon-life-ring"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Professional Support</h3>
                                    <p>Praesent dapibus, neque id cursus faucibus, <br/>tortor neque egestas augue, eu vulputate <br/>magna eros eu erat. </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6">
                            <div class="icon-box icon-box-sm text-center">
                                <span class="icon-box-icon">
                                    <i class="icon-heart-o"></i>
                                </span>
                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Made With Love</h3>
                                    <p>Pellentesque a diam sit amet mi ullamcorper <br/>vehicula. Nullam quis massa sit amet <br/>nibh viverra malesuada.</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-image pt-7 pb-5 pt-md-12 pb-md-9" style={{backgroundImage: `url(${banner})`}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        <span class="count" data-from="0" data-to="40" data-speed="3000" data-refresh-interval="50">41</span>k+
                                    </div>
                                    <h3 class="count-title text-white">Happy Customer</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        <span class="count" data-from="0" data-to="20" data-speed="3000" data-refresh-interval="50">20</span>+
                                    </div>
                                    <h3 class="count-title text-white">Years in Business</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        <span class="count" data-from="0" data-to="95" data-speed="3000" data-refresh-interval="50">95</span>%
                                    </div>
                                    <h3 class="count-title text-white">Return Clients</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        <span class="count" data-from="0" data-to="15" data-speed="3000" data-refresh-interval="50">08</span>
                                    </div>
                                    <h3 class="count-title text-white">Awards Won</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-light-2 pt-6 pb-7 mb-6">
                    <div class="container">
                        <h2 class="title text-center mb-4">Meet Our Team</h2>

                        <div class="row">
                            <div class="col-sm-6 col-lg-3">
                                <div class="member member-2 text-center">
                                    <figure class="member-media">
                                        <img src={team1} alt="member photo"/>

                                        <figcaption class="member-overlay">
                                            <div class="social-icons social-icons-simple">
                                                <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                                <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                                <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="member-content">
                                        <h3 class="member-title">Bruce Sutton<span>Founder & CEO</span></h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="member member-2 text-center">
                                    <figure class="member-media">
                                        <img src={team2} alt="member photo"/>

                                        <figcaption class="member-overlay">
                                            <div class="social-icons social-icons-simple">
                                                <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                                <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                                <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="member-content">
                                        <h3 class="member-title">Mark Pocket<span>Sales & Marketing Manager</span></h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="member member-2 text-center">
                                    <figure class="member-media">
                                        <img src={team3} alt="member photo"/>

                                        <figcaption class="member-overlay">
                                            <div class="social-icons social-icons-simple">
                                                <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                                <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                                <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="member-content">
                                        <h3 class="member-title">Damion Blue<span>Product Manager</span></h3>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="member member-2 text-center">
                                    <figure class="member-media">
                                        <img src={team4} alt="member photo"/>

                                        <figcaption class="member-overlay">
                                            <div class="social-icons social-icons-simple">
                                                <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                                <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                                <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div class="member-content">
                                        <h3 class="member-title">David Doe<span>Product Manager</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-3">
                            <a href="blog.html" class="btn btn-sm btn-minwidth-lg btn-outline-primary-2">
                                <span>LETS START WORK</span>
                                <i class="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About