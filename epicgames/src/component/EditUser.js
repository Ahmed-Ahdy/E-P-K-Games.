import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditUser() {

    let navigate = useNavigate()

    let [users, setUsers] = useState({

        username: "",
        email: "",
        password: 0
    })

    let { id } = useParams()

    async function getUsers() {
        let us = await axios.get(`http://localhost:4000/users/${id}`)
        setUsers(us.data)
    }

    function Change(event) {
        setUsers({ ...users, [event.target.name]: event.target.value })
    }

    function submit() {
        axios.put(`http://localhost:4000/users/${id}`, users)
        navigate("/component/Users")
    }
    useEffect(() => { getUsers() }, [])


    return (
        <div className="p-3 mb-2 bg-dark text-white " style={{ height: 630 }}>
            <div className="container4">
                <div className="receip2t">
                    <img style={{ height: 200, marginTop: 60 }} src="/images/Epic+Games+Node_epicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png" />
                </div>
                <div className="EditUserTable">
                    <div className="row">
                        <form className=" m-2" onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label" style={{ float: "left" }}>User Name</label>
                                <input type="text" name="username" className="form-control" onChange={Change} value={users.username} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ float: "left" }}>Email</label>
                                <input type="text" name="email" className="form-control" onChange={Change} value={users.email} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ float: "left" }}>Password</label>
                                <input type="text" name="password" className="form-control" onChange={Change} value={users.password} />
                            </div>
                            {/* <div className="mb-3">
                            <label className="form-label" style={{ float: "left", placeholder: "disabled input" }}>Joinong Date</label>
                            <input type="text" name="dateofjoin" className="form-control" onChange={Change} value={users.dateofjoin} />
                        </div> */}
                            <button type="submit" className="btn btn-light mt-4" >Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditUser
