import { Link } from "react-router-dom"

function Support() {
    return (
        <div className="landing">
            <div className="container">
                <div className="alert1">

                    <p className="alert alert-white bg-secondary text-white fs-5 mt-3"><i class="bi bi-exclamation-circle"></i> We've fixed an issue that may have prevented players from adding new friends or searching for current friends within the Epic Games Launcher. Please close and restart your Epic Games Launcher application for these features to function correctly again.

                    </p>
                </div>
                <div className="alert1">

                    <p className="alert alert-white bg-secondary text-white fs-5 mt-3"><i class="bi bi-exclamation-circle"></i> You are not currently logged in. Log in to your Epic Games account <Link to="/component/AddNewUser" className="text-white">here</Link>  to view, update, and submit requests for support   .</p>
                </div>
                <div>

                    <h1 className="text-white mt-5">Welcome to Epic Games Player Support</h1>

                </div>
                <div className="search">

                    <form class="d-flex mt-5" role="search">
                        <input class="form-control me-2" type="search" placeholder="SEARCH HELP CENTER..." aria-label="Search" />
                        <button class="btn btn-outline-light" type="submit"><i class="bi bi-search"></i></button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Support