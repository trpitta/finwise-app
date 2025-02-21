import React from 'react'
import AddUser from '../components/user/AddUser'


const UserPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Add User</h1>
            <AddUser />
        </div>
    )
}

export default UserPage
