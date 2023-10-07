import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function AddNewUser() {

    let [user, setUsers] = useState({
        username: '',
        email: "",
        password: 0,
        dateofjoin: currentDate()
    })

    let navigate = useNavigate()

    function change(event) {
        // customer[event.target.name] = event.target.value
        setUsers({ ...user, [event.target.name]: event.target.value })
    }
    function submit() {

        axios.post('http://localhost:4000/users', user)
        navigate("/component/Users")

    }
    function currentDate(event) {
        let newdate = new Date()
        let Year = newdate.getUTCFullYear()
        let month = newdate.getUTCMonth() + 1
        let date = newdate.getUTCDate()
        let date1 = date + "/" + month + "/" + Year
        return (date1
        )

    }

    return (

        <div className="p-3 mb-2 bg-dark text-white " style={{ height: 630 }}>
            <div className="container4">
                <div className="receip2t">
                    <img style={{ height: 200, marginTop: 150 }} src="/images/Epic+Games+Node_epicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png" />
                </div>
                <div className="AddNewUserForm">

                    <form className="col-4 m-2" onSubmit={submit}>
                        <div>
                            <label className="form-label" style={{ float: "left" }}>User Name</label>
                            <input type="text" name="username" className="form-control" onChange={change} required />
                        </div>
                        <div>
                            <label className="form-label" style={{ float: "left" }}>Email</label>
                            <input type="text" name="email" className="form-control" onChange={change}
                                required />
                        </div>
                        <div>
                            <label className="form-label" style={{ float: "left" }}>Password</label>
                            <input type="text" name="password" className="form-control" onChange={change}
                                required />
                        </div>
                        {/* <div>
                    <label className="form-label" style={{ float: "left" }}>Joining Date</label>
                    <input type="text" name="imageUrl" className="form-control" onChange={change} />
                </div> */}
                        <button type="submit" className="btn btn-secondary mt-3" >Confirm</button>
                    </form>
                </div>
            </div>


        </div>
    )
}
export default AddNewUser