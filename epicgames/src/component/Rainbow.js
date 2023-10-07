import { Link } from "react-router-dom"

function Rainbow() {
    return (
        <div className="background bg-black" >
            <div className="back1">
                <div className="left-side">

                    <h1 className="title">Rainbow Six Siege


                    </h1>
                    <div className="rain-image">

                    </div>
                    <div className="klam">
                        <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                            Rainbow Six Siege
                        </h5>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            “One of the best first-person shooters ever made.” 10\10 —GameSpot

                        </p>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            Tom Clancy's Rainbow Six® Siege is an elite, realistic, tactical, team-based shooter where superior planning and execution triumph. It features 5v5 attack vs. defense gameplay and intense close-quarters combat in destructible environments.

                        </p>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            Choose from over 60 operators, each with unique gadgets and customizable weapon loadouts. Outthink your opponents by breaching walls, floors, and windows, or lie in wait with deadly traps.

                        </p>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            In Defense mode, coordinate with your team to transform your environments into impregnable strongholds. Fortify your positions, place traps, and create defensive systems to prevent the enemy team from breaching in. Then, hold your positions and ambush your opponent to ensure victory.

                        </p>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            In Attack mode, observe the enemy positions and craft your cunning plan to breach in the enemy defenses, then execute your strategy by leading your team through narrow corridors, barricaded doorways, floors, windows, and reinforced walls. The right team can overcome any defense to win.

                        </p>
                        <p className="" style={{ textAlign: "left", color: "gray" }}>
                            Tom Clancy's Rainbow Six Siege is constantly expanding: each season brings new content, in-game events, and more.

                        </p>


                        <div>

                            <img src="/images/images (39).jpeg" className="arthuer-images" />
                            <img src="/images/images (37).jpeg" className="arthuer-images" />
                            <img src="/images/download (20).jpeg" className="arthuer-images" />
                            <img src="/images/downl1oad.jpeg" className="arthuer-images" />
                            <img src="/images/images (38).jpeg" className="arthuer-images" />

                            <img src="/images/download (22).jpeg" className="arthuer-images" />

                        </div>
                        <div>
                            <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Epic Players Rating
                            </h5>
                            <div className="stars text-white ">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><p>4.6</p>
                            </div>
                            <h4 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Rainbow Six Siege                              System Requirments
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
                                            <p className="dam">Intel Core i3 560 @ 3.3 GHz | AMD Phenom II X4 945 @ 3.0 GHz


                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">8 GB RAM</p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">NVIDIA GeForce GTX 460 | AMD Radeon HD 5870 (DirectX-11 compliant with 1GB of VRAM)


                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">61 GB available space</p>
                                            <p className="dom">Network</p>
                                            <p className="dam">Broadband Internet connection
                                            </p>

                                            <p className="dom">Sound Card

                                            </p>
                                            <p className="dam">DirectX® 9.0c compatible sound card with latest drivers
                                            </p>

                                        </div>
                                    </div>
                                    <div className="elpop2">
                                        <p className="dom mb-3">Recommended</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">Windows 10


                                            </p>
                                            <p className="dom">CPU</p>
                                            <p className="dam">Intel Core i5-2500K @ 3.3 GHz | AMD FX-8120 @ 3.1 Ghz


                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">8 GB RAM</p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">NVIDIA GeForce GTX 670 (or GTX 760 / GTX 960) | AMD Radeon HD 7970 (or R9 280x [2GB VRAM] / R9 380 / Fury X)


                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">61 GB available space</p>
                                            <p className="dom">Network</p>
                                            <p className="dam">Broadband Internet connection
                                            </p>

                                            <p className="dom">Sound Card
                                            </p>
                                            <p className="dam">DirectX® 9.0c compatible sound card 5.1 with latest drivers
                                            </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="rain-right-side-img">
                        <img style={{ width: 430, height: 250 }} src="/images/large.jpg" />
                    </div>
                    <div style={{ color: "white", textAlign: "left", marginLeft: 110 }}>
                        $8.99
                    </div>
                    <div className="mb-2 " style={{ textAlign: "left", marginLeft: 109 }}>
                        <Link to="/component/buynow">
                            <button type="button" class="btn btn-outline-primary zorar2">BUY NOW</button>
                        </Link>
                    </div>
                    <div className="mb-2 " style={{ textAlign: "left", marginLeft: 101 }}>
                        <Link>
                            <button type="button" class="btn btn-outline-primary ms-2 zorar2"><i className="bi bi-plus-circle"></i> ADD TO WISHLIST</button>
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
                                        Ubisoft
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Publisher
                                    </th>
                                    <td>
                                        Ubisoft
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Release Date
                                    </th>
                                    <td>
                                        12/01/22
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
export default Rainbow