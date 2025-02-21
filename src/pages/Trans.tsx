import React from 'react'
// <GetTrans/> is commented in list of the Trans section
import GetTrans from '../components/tran/GetTrans'
import Trans from '../components/tran/Trans'


const TransPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '2em' }}>List of Transactions (Income and Exepenses)</h3>

            <Trans/>
       </div>
    )
}

export default TransPage
