import React from 'react'
import AddTran from '../components/tran/AddTran'


const TranPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
             <h1 style={{ fontSize: '4em' }}>Add Transaction (Income or Exepense)</h1>
            <AddTran />
        </div>
    )
}

export default TranPage
