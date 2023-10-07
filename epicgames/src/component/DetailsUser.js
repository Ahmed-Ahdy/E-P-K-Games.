import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function DetailsUser() {

    let [users, setUsers] = useState({
        username: "",
        email: "",
        password: 0,
        dateofjoin: ""
    })

    let { id } = useParams()
    async function getUsers() {
        let us = await axios.get(`http://localhost:4000/users/${id}`)
        setUsers(us.data)
    }
    useEffect(() => { getUsers() }, [])


    return (
        <div className="p-3 mb-2 bg-dark text-white " style={{ height: 630 }}>
            <div className="container4">
                <div className="receip2t">
                    <img style={{ height: 200, marginTop: 60 }} src="/images/Epic+Games+Node_epicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png" />
                </div>

                <div className="close">
                    <Link to="/component/Users"><button className="btn btn-light fs-4">   <i class="bi bi-arrow-left-circle-fill"></i></button>

                    </Link>
                </div>
                <div className="DetailsUserTable">
                    <table className="table table-borderd table-hover text-center table-striped">
                        {/* <caption className="text-center fs-1 text-white mb-4">
                    INFO ABOUT YOUR ACCOUNT
                </caption> */}
                        <tbody>
                            <tr>
                                <th>User Name</th>
                                <td>{users.username}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{users.email}</td>
                            </tr>
                            <tr>
                                <th>Password</th>
                                <td>{users.password}</td>
                            </tr>
                            <tr>
                                <th>Joining Date</th>
                                <td>{users.dateofjoin}</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )

}
export default DetailsUser