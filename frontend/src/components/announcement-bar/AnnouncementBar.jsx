import React from 'react'
import './announcementBarStyles.css'
import {Link} from 'react-router-dom'

function AnnouncementBar() {
    return (
        
        <div className="announcement-bar-wrapper ">
            <div className="row">
                <div className="col-md-12">
                    <p className='text-uppercase'><Link to=""> EASY RETURNS & EXCHANGES</Link></p>
                </div>
            </div>
        </div>
        
    )
}

export default AnnouncementBar