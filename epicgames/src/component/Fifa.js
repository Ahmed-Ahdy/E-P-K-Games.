import { Link } from "react-router-dom"

function Fifa() {
    return (
        <div className="background bg-black" >
            <div className="back1">
                <div className="left-side">

                    <h1 className="title">EA SPORTS FC™ 24 Standard Edition
                    </h1>
                    <div className="Fifa-image">

                    </div>
                    <div className="klam">
                        <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                            EA SPORTS FC™ 24                        </h5>
                        {/* <p className="text-white" style={{ textAlign: "left" }}>
                            Includes Red Dead Redemption 2: Story Mode and Red Dead Online.
                        </p>
                        <p className="text-white" style={{ textAlign: "left" }}>
                            Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age.
                        </p>
                        <p className="text-white" style={{ textAlign: "left" }}>
                            America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
                        </p>
                        <p className="text-white" style={{ textAlign: "left" }}>
                            Red Dead Redemption 2 also includes the shared living world of Red Dead Online forge your own path as you battle lawmen, outlaw gangs and ferocious wild animals to build a life on the American frontier. Build a camp, ride solo or form a posse and explore everything from the snowy mountains in the North to the swamps of the South, from remote outposts to busy farms and bustling towns. Chase down bounties, hunt, fish and trade, search for exotic treasures, run your own underground Moonshine distillery, or become a Naturalist to learn the secrets of the animal kingdom and much more in a world of astounding depth and detailincludes all new features, gameplay content and additional enhancements released since launch.
                        </p> */}

                        <div>
                            <img src="/images/download (13).jpeg" className="arthuer-images" />
                            <img src="/images/images (11).jpeg" className="arthuer-images" />
                            <img src="/images/images (12).jpeg" className="arthuer-images" />
                            <img src="/images/images (13).jpeg" className="arthuer-images" />
                            <img src="/images/download (15).jpeg" className="arthuer-images" />
                            <img src="/images/images (14).jpeg" className="arthuer-images" />

                        </div>
                        <div>
                            <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Epic Players Rating
                            </h5>
                            <div className="stars text-white ">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><p>4.4</p>
                            </div>
                            <h4 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                EA SPORTS FC™ 24 System Requirments
                            </h4>
                            <div className="req">
                                <div className="left-left-side">
                                    <div className="elpop">
                                        <p className="fw-bold text-white" style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>WINDOWS</p>
                                        <p className="dom mb-3">Minimum</p>
                                        <div>
                                            <p className="dom"> OS</p>
                                            <p className="dam">Windows 10 - 64-Bit</p>
                                            <p className="dom">Processor</p>
                                            <p className="dam">Intel Core i5-6600K @ 3.50GHz or AMD Ryzen 5 1600 @ 3.2 GHZ</p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">8GB</p>

                                            <p className="dom">Graphics</p>
                                            <p className="dam">NVIDIA GeForce GTX 1050 Ti 4GB or AMD Radeon RX 570 4GB </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">100GB</p>
                                            <p className="dom">Direct X</p>
                                            <p className="dam">DirectX: 12 Compatible video card or equivalent (feature level 12_0) </p>
                                            <p className="dom">Login Accounts Required </p>
                                            <p className="dam">EA app </p>

                                        </div>
                                    </div>
                                    <div className="elpop2">
                                        <p className="dom mb-3">Recommended</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">Windows 10 - 64-Bit
                                            </p>
                                            <p className="dom">Processor</p>
                                            <p className="dam">Intel Core i7-6700 @ 3.40GHz or AMD Ryzen 7 2700X @ 3.7 GHZ

                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">12GB</p>

                                            <p className="dom">Graphics</p>
                                            <p className="dam">NVIDIA GeForce GTX 1660 or AMD RX 5600 XT
                                                B
                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">100GB</p>
                                            <p className="dom">Direct X</p>
                                            <p className="dam">DirectX: 12 Compatible video card or equivalent (feature level 12_0)  </p>
                                            <p className="dom">Login Accounts Required </p>
                                            <p className="dam">EA app </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="right-side-fifa-img">
                        <img src="/images/images.png" />
                    </div>
                    <div style={{ color: "white", textAlign: "left", marginLeft: 109 }}>
                        $90.99
                    </div>
                    <div className="mb-2" style={{ textAlign: "left", marginLeft: 109 }}>
                        <Link to="/component/buynow">
                            <button type="button" class="btn btn-outline-primary text-white Fifa-zorar2">BUY NOW</button>
                        </Link>
                    </div>
                    <div className="mb-2" style={{ textAlign: "left", marginLeft: 100 }}>
                        <Link>
                            <button type="button" class="btn btn-outline-primary
                         text-white ms-2 Fifa-zorar2"><i className="bi bi-plus-circle"></i> ADD TO WISHLIST</button>
                        </Link>
                    </div>
                    <div className="description-table">
                        <table className="table table-borderd table-hover text-center table-secondary">
                            <tbody>
                                <tr>
                                    <th>
                                        Epic Rewards
                                    </th>
                                    <td>
                                        Earn 5% Back <i></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Refund Type
                                    </th>
                                    <td>
                                        Self-Refundable <i class="bi bi-question-circle"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Developer
                                    </th>
                                    <td>
                                        Ea Canada
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Publisher
                                    </th>
                                    <td>
                                        Electronic Arts
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Release Date
                                    </th>
                                    <td>
                                        09/29/23
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Platform                                    </th>
                                    <td>
                                        <i class="bi bi-windows"></i>                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >

    )
}
export default Fifa