import React from 'react'
import DateDisplay from '../components/DateDisplay'

const AboutPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1 style={{ fontSize: '4em' }}>Contact Us</h1>
            <DateDisplay />

        </div>
    )
}

export default AboutPage
