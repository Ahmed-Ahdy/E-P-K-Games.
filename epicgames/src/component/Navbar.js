import { NavLink } from "react-router-dom"


function Navbar() {

    return (
        <div className="navbar tree text-white sticky-top navbar-expand">

            <NavLink to="/component/Home" className="navbar-brand ms-3 mb-1">
                <i className="bi bi-controller controller"></i>
            </NavLink>

            <ul className="links" >
                {/* 
                <li className="nav-item ">
                    <NavLink to="/" className="nav-link active">
                        STORE
                    </NavLink>
                </li> */}
                <li className="nav-item ms-3 ">

                    <NavLink to="/component/Home" className="nav-link">

                        STORE                    </NavLink>
                </li>
                <li className="nav-item ms-3 ">
                    <NavLink to="/component/Support" className="nav-link">
                        SUPPORT
                    </NavLink>
                </li>
                <li className="nav-item ms-3 ">
                    <NavLink to="/component/Users" className="nav-link">
                        <i class="bi bi-person-fill"> </i>
                        SIGN IN
                    </NavLink>
                </li>
                <li className="nav-item ms-3 li-4 ">

                    <NavLink to="/component/DownloadApp" className="nav-link">
                        <i class="bi bi-cloud-arrow-down-fill"> </i>
                        GET EPIC GAMES
                    </NavLink>
                </li>

            </ul>

        </div>
    )
}
export default Navbar