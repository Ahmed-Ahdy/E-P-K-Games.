import { Link } from "react-router-dom"

function Cyber() {
    return (
        <div className="background bg-black" >
            <div className="back1">
                <div className="left-side">

                    <h1 className="title">Cyberpunk 2077: Phantom Liberty


                    </h1>
                    <div className="cyber-image">

                    </div>
                    <div className="klam">
                        <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                            Cyberpunk 2077: Phantom Liberty
                        </h5>
                        <p className="text-white" style={{ textAlign: "left" }}>
                            Phantom Liberty is a spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of shattered loyalties and sinister political machinations.
                        </p>


                        <div>
                            <img src="/images/images (48).jpeg" className="arthuer-images" />
                            <img src="/images/images (50).jpeg" className="arthuer-images" />
                            <img src="/images/images (51).jpeg" className="arthuer-images" />
                            <img src="/images/images (52).jpeg" className="arthuer-images" />
                            <img src="/images/download (23).jpeg" className="arthuer-images" />
                            <img src="/images/images (47).jpeg" className="arthuer-images" />
                        </div>
                        <div>
                            <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Epic Players Rating
                            </h5>
                            <div className="stars text-white ">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><p>4.4</p>
                            </div>
                            <h4 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Cyberpunk 2077: Phantom Liberty
                                System Requirments
                            </h4>
                            <div className="req">
                                <div className="left-left-side">
                                    <div className="elpop">
                                        <p className="fw-bold text-white" style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>WINDOWS</p>
                                        <p className="dom mb-3">Minimum</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">Windows 10

                                            </p>
                                            <p className="dom">CPU</p>
                                            <p className="dam">Intel Core i7-6700 or Ryzen 5 1600

                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">12 GB RAM</p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">NVIDIA GeForce GTX 1060 6 GB or Radeon RX 580 8GB or Arc A380


                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">70GB SSD (90GB SSD with Phantom Liberty)

                                            </p>
                                            <p className="dom">DirectX</p>
                                            <p className="dam">12 </p>

                                            <p className="dom">Login Accounts Required
                                            </p>
                                            <p className="dam">Ubisoft</p>

                                        </div>
                                    </div>
                                    <div className="elpop2">
                                        <p className="dom mb-3">Recommended</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">Windows 10


                                            </p>
                                            <p className="dom">CPU</p>
                                            <p className="dam">Intel Core i7-12700 or Ryzen 7 7800X



                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">16 GB RAM</p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">NVIDIA GeForce GTX 2060 SUPER or Radeon RX 5700 XT or Arc A770


                                            </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="cyber-right-side-img">
                        <img style={{ width: 430, height: 250 }} src="/images/HD-wallpaper-cyberpunk-2077-logo-2019-cyberpunk2077-game-huawei-iphone-juego-logo-samsung-thumbnail.jpg" />
                    </div>
                    <div style={{ color: "white", textAlign: "left", marginLeft: 110 }}>
                        $29.99
                    </div>
                    <div className="mb-2 " style={{ textAlign: "left", marginLeft: 109 }}>
                        <Link to="/component/buynow">
                            <button type="button" class="btn btn-outline-danger zorar2">BUY NOW</button>
                        </Link>
                    </div>
                    <div className="mb-2 " style={{ textAlign: "left", marginLeft: 101 }}>
                        <Link>
                            <button type="button" class="btn btn-outline-danger ms-2 zorar2"><i className="bi bi-plus-circle"></i> ADD TO WISHLIST</button>
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
                                        Refundable <i class="bi bi-question-circle"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Developer
                                    </th>
                                    <td>
                                        CD PROJEKT RED
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Publisher
                                    </th>
                                    <td>
                                        CD PROJEKT RED
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Release Date
                                    </th>
                                    <td>
                                        09/26/23
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
export default Cyber