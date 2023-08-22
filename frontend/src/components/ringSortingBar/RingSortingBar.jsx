import React from 'react'
import { Link } from 'react-router-dom'

function RingSortingBar() {
  return (
    <div className="row p-3">
            <h5 className='text-uppercase text-center my-5'>Rings</h5>
            <div className="sorting-navbar">
                <div className="left-nav px-3">
                    <div className="grid-icon notfill mx-1 d-none d-sm-block d-md-block">
                        <Link to="/Rings"> <i className="bi bi-grid-3x3-gap-fill fs-4"></i></Link>
                    </div>
                    <div className="grid-icon fill mx-1 d-none d-sm-block d-md-block">
                        <Link to="/ring-grid"><i className="bi bi-grid-fill fs-4 mx-2"></i></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RingSortingBar