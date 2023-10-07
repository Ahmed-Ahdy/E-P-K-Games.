import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Users() {


    let [users, setUsers] = useState([])

    async function getUsers() {
        let Allusers = await axios.get('http://localhost:4000/users')
        setUsers(Allusers.data)
    }
    useEffect(() => { getUsers() }, [])

    let [SearchText, SetSearch] = useState("")

    function SearchChange(event) {

        SetSearch(event.target.value)
    }
    async function search() {
        let SearchResult = await axios.get(`http://localhost:4000/users?q=${SearchText}`)
        setUsers(SearchResult.data)
    }


    function ShowUsers() {
        if (users.length > 0) {
            return (
                <div className="container">
                    <div className="UserTable">
                        <table className="table table-borderd table-striped table-hover text-center caption-top">

                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((us) => <tr key={us.id}>

                                    <td>
                                        {us.username}
                                    </td>
                                    <td>
                                        {us.email}
                                    </td>
                                    <td>
                                        <div className="btn-group btn-group-sm">
                                            <Link to={`/component/DetailsUser/${us.id}`} className="btn btn-seconary">
                                                <i className="bi bi-list-ul"></i>
                                            </Link>
                                            <Link to={`/component/EditUser/${us.id}`} className="btn btn-seconary">
                                                <i className="bi bi-pencil-square"></i>
                                            </Link>
                                            <Link to={`/component/RemoveUser/${us.id}`} className="btn btn-seconary">
                                                <i className="bi bi-trash"></i>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>)}
                            </tbody>

                        </table>


                    </div>
                </div>
            )
        } else {
            return (
                <h1 className="alert alert-danger text-center m-3">USER NOT FOUND</h1>
            )
        }
    }

    return (
        <div className="p-4 mb-2 bg-dark text-white ahmed" >



            <p className="text-center fs-1 text-white mb-4">YOUR ACCOUNTS <img src="/images/Epic+Games+Node_epicLogo_1920x1080-1920x1080-401b77ef30fa9e5aaadbdd99ad2ff27ceda27a6f.png" style={{ width: 80, marginBottom: 12 }} /></p>

            <div className="input-group " style={{ marginLeft: 150, marginBottom: 40, width: 400 }}>
                <input type="text" className="form-control" placeholder="SEARCH USER" onChange={SearchChange} />
                <button className="btn btn-secondary" onClick={search}><i className="bi bi-search"></i> </button>
            </div>

            {ShowUsers()}

            <Link to='/component/AddNewUser' className="ms-5 btn btn-light">
                New User
            </Link>




        </div>

    )
}
export default Users