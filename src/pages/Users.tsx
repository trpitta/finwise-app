import React from 'react'
import Users from '../components/user/Users'

const UsersPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '2em' }}>List of Users</h3>
            <Users/>
        </div>
        
    )
}

export default UsersPage
