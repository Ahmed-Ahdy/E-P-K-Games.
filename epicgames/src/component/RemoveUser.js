import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function RemoveUser() {

    let [user, setUsers] = useState({

        username: '',
        email: '',
        password: 0,
        dateofjoin: ""
    })

    let { id } = useParams()
    let navigate = useNavigate()

    async function getUsers() {
        let us = await axios.get(`http://localhost:4000/users/${id}`)
        setUsers(us.data)
    }
    function Deleteuser() {
        axios.delete(`http://localhost:4000/users/${user.id}`)
        navigate("/component/Users")
    }

    useEffect(() => { getUsers() }, [])


    return (
        <div className="p-3 mb-2 bg-dark text-white " style={{ height: 630 }}>
            <div className="container4">
                <div className="receip2t">
                    <img style={{ height: 200, marginTop: 60 }} src="/images/Epic+Games+Node_epicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png" />
                </div>


                <div className="close2">
                    <Link to="/component/Users"><button className="btn btn-light mb-4 fs-4"><i class="bi bi-arrow-left-circle-fill"></i></button>

                    </Link>
                </div>
                <table className="table table-borderd table-hover text-center table-striped">
                    <tbody>

                        <tr>
                            <th>
                                User Name
                            </th>
                            <td>
                                {user.username}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Email
                            </th>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Password
                            </th>
                            <td>
                                {user.password}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Joining Date
                            </th>
                            <td>
                                {user.dateofjoin}
                            </td>
                        </tr>

                    </tbody>

                </table>

                <button className="btn btn-light" onClick={Deleteuser}>Confirm Delete</button>

            </div>
        </div>
    )
}
export default RemoveUser