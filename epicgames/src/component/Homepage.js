import { Link } from "react-router-dom"

function Homepage() {



    return (
        <div>
            <div className="Homelanding">
                <div className="container">
                    <div className="maincard">
                        <Link to='/component/RedDead'>
                            <div class="card text-bg-dark">
                                {/* <img src="/images/1018084-illustration-video-games-red-text-gamers-Gamer-Rockstar-Games-poster-Red-Dead-Redemption-2-brand-western-Red-Dead-Redemption-advertising-font-album-cover.png" class="card-img" /> */}
                                <div class="card-img-overlay">
                                    <h5 class="card-title">RED DEAD REDEMPTION 2</h5>
                                    <p class="card-text">Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.
                                    </p>

                                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <Link to="/component/buynow">
                                        <button type="button" class="btn btn-light">BUY NOW</button>
                                    </Link>
                                    <Link>
                                        <button type="button" class="btn btn-light ms-2"><i className="bi bi-plus-circle"></i> ADD TO WISHLIST</button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container card-group m-4">
                    <div className="">
                        <a class="icon-link icon-link-hover" href="#">
                            Icon link
                            <svg class="bi" aria-hidden="true"><use href="#arrow-right"></use></svg>
                        </a>
                    </div>
                    <div className="cards">
                        <div class="card" >
                            <img src="/images/58.webp" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div class="card" >
                            <img src="/images/fc24-1689029623566.jpg" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div class="card" >
                            <img src="/images/58.webp" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Homepage