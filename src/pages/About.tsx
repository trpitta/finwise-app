import React from 'react'
import PdfReactPdf from "../components/license";
import LicensePDF from "../images/allterms.pdf";

const AboutPage: React.FC = () => {

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1 style={{ fontSize: '4em' }}>About us</h1>
            <div className="pdf-container">
                <PdfReactPdf src={LicensePDF} />
            </div>
        </div>
    )
}

export default AboutPage
