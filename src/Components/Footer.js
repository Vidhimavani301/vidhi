import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <div>
            <footer style={{backgroundColor:"#dddfe1"}}>
                <div className='px-3 px-md-5'>
                    <div className='px-3 px-md-5'>
                        <div className='py-5'>
                            <div className="d-inline-block py-4">
                                <Link className="navbar-brand" href="/" aria-label="Space">
                                    <Link className="navbar-brand" href="/">
                                            <img src="./assert/image/logo-dark.png" alt="logo" className="w-50" />
                                        
                                    </Link>
                                </Link>
                            </div>
                            <div className="row justify-content-between">
                                <p className={`col-lg-5 col-md-5 col-12 fs-5`}>If you want to create a corporate template you can purshace now our doob template. </p>
                                <div className="col-lg-3 col-md-4 col-12"><button className="btn-clr">Purchase Doob <span className="material-symbols-outlined">arrow_forward</span></button></div>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>  <h5 className='mb-3'>Services</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">About</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Portfolio</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Contact</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Services</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>
                                    <h5>Solutions
                                    </h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Pricing</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Team</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Advance Tab</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Service</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5>
                                    <h5 className="mb-3">Company</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Gallery</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">About Us
                                    </a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Testimonial</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Timeline</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-2">
                                <h5 >
                                    <h5>Resources</h5>
                                </h5>

                                {/* <!-- List --> */}
                                <ul className="list-unstyled list-py-1">
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Gallery</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">About Us
                                    </a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`} href="/">Testimonial</a></li>
                                    <li><a className={`link-sm text-dark text-decoration-none`}href="/">Timeline</a></li>
                                </ul>
                                {/* <!-- End List --> */}
                            </div>
                        </div>
                        {/* <!-- End Col --> */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="mt-lg-0 mt-3">
                                <h5 >
                                    <h5 className="mb-3">Stay With Us.</h5>
                                </h5>
                                <p>2000+ Our clients are subscribe Around the World</p>
                            
                            <form action="">
                                <input type="email" name="email" className={`form-control text-light shadow-none  outline-0`} id="email" value="Enter Your Email Here" required />
                                <input type="submit" className="btn-clr mt-3" value="submit" />
                            </form>
                            </div>
                        </div>
                        {/* <!-- End Col --> */}


                    </div>
                    {/* <!-- End Row --> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer