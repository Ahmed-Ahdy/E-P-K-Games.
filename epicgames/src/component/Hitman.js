import { Link } from "react-router-dom"

function Hit() {
    return (
        <div className="background bg-black" >
            <div className="back1">
                <div className="left-side">

                    <h1 className="title">HITMAN 3

                    </h1>
                    <div className="hit-image">

                    </div>
                    <div className="klam">
                        <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                            HITMAN 3

                        </h5>
                        <p className="text-white" style={{ textAlign: "left" }}>
                            Become Agent 47 and experience the start of the World of Assassination trilogy for FREE. Begin your journey as an initiate and meet your handler at the training facility to become an Agent of the ICA. Now, you're ready for action.
                        </p>
                        <h6 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                            HITMAN 3

                        </h6>
                        <p className="text-secondary" style={{ textAlign: "left" }}>
                            Become Agent 47 and experience the start of the World of Assassination trilogy for FREE. Begin your journey as an initiate and meet your handler at the training facility to become an Agent of the ICA. Now, you're ready for action.
                        </p>
                        <p className="text-secondary" style={{ textAlign: "left" }}>
                            You are required to sign up for a free IOI Account and receive updates from IO Interactive to access some content.
                        </p>

                        <div>

                            <img src="/images/images (41).jpeg" className="arthuer-images" />
                            <img src="/images/images (40).jpeg" className="arthuer-images" />
                            <img src="/images/images (42).jpeg" className="arthuer-images" />
                            <img src="/images/images (43).jpeg" className="arthuer-images" />
                            <img src="/images/images (44).jpeg" className="arthuer-images" />

                            <img src="/images/images (45).jpeg" className="arthuer-images" />
                        </div>
                        <div>
                            <h5 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                Epic Players Rating
                            </h5>
                            <div className="stars text-white ">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                <i class="bi bi-star"></i><p>4.0</p>
                            </div>
                            <h4 className="text-white " style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>
                                HITMAN 3                                System Requirments
                            </h4>
                            <div className="req">
                                <div className="left-left-side">
                                    <div className="elpop">
                                        <p className="fw-bold text-white" style={{ textAlign: "left", marginTop: 30, marginBottom: 35 }}>WINDOWS</p>
                                        <p className="dom mb-3">Minimum</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">OS 64-bit Windows 10


                                            </p>
                                            <p className="dom">CPU</p>
                                            <p className="dam">Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940


                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">8 GB </p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">NVIDIA GeForce GTX 660 / Radeon HD 7870

                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">80 GB </p>
                                            <p className="dom">DirectX</p>
                                            <p className="dam">12 </p>

                                            <p className="dom">Login Accounts Required
                                            </p>
                                            <p className="dam">Epic Games</p>

                                        </div>
                                    </div>
                                    <div className="elpop2">
                                        <p className="dom mb-3">Recommended</p>
                                        <div>
                                            <p className="dom">OS</p>
                                            <p className="dam">OS 64-bit Windows 10


                                            </p>
                                            <p className="dom">CPU</p>
                                            <p className="dam">Intel CPU Core i7 4790 4 GHz



                                            </p>
                                            <p className="dom">Memory</p>
                                            <p className="dam">16 GB </p>

                                            <p className="dom">GPU</p>
                                            <p className="dam">Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56 8GB


                                            </p>
                                            <p className="dom">Storage</p>
                                            <p className="dam">80 GB </p>
                                            <p className="dom">DirectX</p>
                                            <p className="dam">12 </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="cry-right-side-img">
                        <img style={{ width: 430, height: 250 }} src="/images/HITMAN-3-Header-Logo.jpg" />
                    </div>
                    <div style={{ color: "white", textAlign: "left", marginLeft: 110 }}>
                        $24.15
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
                                        Developer
                                    </th>
                                    <td>
                                        IO interactive
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Publisher
                                    </th>
                                    <td>
                                        IO interactive
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Release Date
                                    </th>
                                    <td>
                                        03/30/21
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
export default Hit