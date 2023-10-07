import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Home() {

    // let [users, setUsers] = useState([])

    // let [Searchtext, SetSearch] = useState("")


    // function SearchChange(event) {

    //     SetSearch(event.target.value)
    // }
    // async function search() {
    //     let SearchResult = await axios.get(`http://localhost:4000/products?q=${Searchtext}`)
    //     setUsers(SearchResult.data)
    // }


    return (
        <div className="background bg-dark">
            {/* <div className="input-group " style={{ marginLeft: 150, marginBottom: 40, width: 400 }}>
                <input type="text" className="form-control" placeholder="SEARCH USER"
                    onChange={SearchChange}
                />
                <Link to={"/component/" + search()}>
                    <button className="btn btn-secondary"
                        onClick={search}
                    ><i className="bi bi-search"></i> </button>
                </Link>
            </div> */}

            <div className="back">
                <div className="lan">
                    {/* <h3 className="text-white">RED DEAD REDEMPTION 2</h3> */}
                    <div className="over">
                        {/* <p className="p1">Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.</p> */}
                        <p className="p2">starting at $59.99</p>
                        <Link to="/component/RedDeadRedemption">
                            <button type="button" class="btn btn-outline-light zorar ">GO TO STORE PAGE</button>
                        </Link>
                        <Link to="/component/buynow">
                            <button type="button" class="btn btn-outline-light zorar ms-2">BUY NOW</button>
                        </Link>
                        <Link>
                            <button type="button" class="btn btn-outline-light ms-2 zorar"><i className="bi bi-plus-circle"></i> ADD TO WISHLIST</button>
                        </Link>
                    </div>
                </div>
                <div className="rightDiv">
                    <Link className="link11" to="/component/DaysGone">
                        <div className="smallDiv">
                            <img src="/images/58.png" />
                            <h3>Days Gone</h3>
                        </div>
                    </Link>
                    <Link className="link11" to="/component/Creed">

                        <div className="smallDiv">
                            <img src="/images/Share_Image_1920x1080_1920x1080-3ec6b92b109d6ebe190c7fd8da23b989.png" />
                            <h3>Assassin's Creed Mirage</h3>
                        </div>
                    </Link>

                    <Link className="link11" to="/component/Gta">
                        <div className="smallDiv">
                            <img src="/images/download (1).jpeg" />
                            <h3>Grand Theft Auto V</h3>
                        </div>
                    </Link>
                    <Link className="link11" to="/component/Cry">
                        <div className="smallDiv">
                            <img src="/images/download (2).jpeg" />
                            <h3>Far Cry 6</h3>
                        </div>
                    </Link>
                    <Link className="link11" to="/component/Rainbow">

                        <div className="smallDiv">
                            <img src="/images/images (2).jpeg" />
                            <h3>Rainbow Six Siege</h3>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="second-Section">
                <div className="heading ">
                    <Link style={{ color: "white", textDecoration: "none" }}>
                        <h2 className="fs-6">GAMES ON SALE  <i className="bi bi-arrow-right "></i></h2>
                    </Link>
                    <div className="icons">
                        <Link style={{ textDecoration: "none", color: "white" }}>
                            <i class="bi bi-arrow-left-circle-fill fs-3"></i>                        </Link>
                        <Link style={{ textDecoration: "none", color: "white" }}>
                            <i class="bi bi-arrow-right-circle-fill fs-3"></i>                        </Link>
                    </div>
                </div>
                <div className="games">
                    <div className="game-card">
                        <Link to="/component/Cyber">
                            <img src="/images/download (9).jpeg" />
                            <p><span className="span-1">-11%  </span><del> $35.44  </del><span> $29.99</span></p>
                        </Link>
                    </div>
                    <div className="game-card">
                        <Link to="/component/Hunter">
                            <img src="/images/download (6).jpeg" />
                            <p><span className="span-1">-2%  </span><del> $25.99  </del><span> $22.99</span></p>
                        </Link>
                    </div>

                    <div className="game-card">
                        <Link to="/component/Hitman">
                            <img src="/images/download (5).jpeg" />
                            <p><span className="span-1">-10%  </span><del> $32.29  </del><span> $24.15</span></p>
                        </Link>
                    </div>
                    <div className="game-card">
                        <Link to="/component/Tomb">
                            <img src="/images/download (7).jpeg" />
                            <p><span className="span-1">-50%  </span><del> $39.99  </del><span> $19.99</span></p>
                        </Link>
                    </div>
                    <div className="game-card">
                        <Link to="/component/Fifa">
                            <img src="/images/download (8).jpeg" />
                            <p><span className="span-1">-5%  </span><del> $99.99  </del><span> $90.99</span></p>
                        </Link>
                    </div>
                    <div className="game-card">
                        <Link to="/component/Civil">
                            <img src="/images/Civilization_VI_cover_art.jpg" />
                            <p><span className="span-1">-10%  </span><del> $69.99  </del><span> $59.99</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Home