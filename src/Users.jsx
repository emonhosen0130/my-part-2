import { useEffect, useState } from "react"
import Use from "./Use"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="box">
            <h3>Users: {users.length}</h3>
            {
                users.map(use => <Use use={use}></Use>)
            }
        </div>
    )
}