import React from 'react'

import Summary from '../components/dashboard/summary'
import IncomeWidget from '../components/dashboard/income'
import ExepenseWidget from '../components/dashboard/expense'
import TransWidget from '../components/dashboard/transbymonthv1'

const DashboardPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <h1 style={{ fontSize: '4em' }}>Financial Summary</h1>
            <Summary></Summary>

            <tr>
            <td>
            <h4 style={{ fontSize: '3em' }}><center>Income Summary</center></h4>
            <IncomeWidget></IncomeWidget>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <h4 style={{ fontSize: '3em' }}><center>Expense Summary</center></h4>
            <ExepenseWidget></ExepenseWidget>
            </td>

            </tr>
            <h4 style={{ fontSize: '3em' }}>Income and Exepenses (Monthly)</h4>
            <TransWidget />
        </div>

    )
}

export default DashboardPage
