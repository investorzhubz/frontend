import React from 'react'
import './dashboard.css'
import Sidebar from '../sidebar/Sidebar'
import MainDash from '../MainDash/MainDash'
import { useErrorContext } from '../../hooks/useErrorContext'
import Alert from '../alerts/Alert'
import DashBoardMenu from '../Dash Board Menu/DashBoardMenu'
function Dashboard() {
  const {error}=useErrorContext()
  return (
    <div className='Appp'>
        <div className="AppGlass">
            <div>
            <DashBoardMenu/>

            </div>
            <div>
            {error && (
          <div>
            <Alert type='error'>
              <p>{error}</p>
            </Alert>
          </div>
        )}
                <MainDash/>

            </div>
            <div>

            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
