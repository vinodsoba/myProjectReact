import React from 'react'
import * as FaIcons from 'react-icons/fa'
import  './styles.scss'

function freeshipping() {
    return (

        <div className="container fluid">
            <div className="row">
             <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 discount">
                <FaIcons.FaUser />
                <p>10% Off Your First Order USE CODE: BBOP10</p>
            </div>
        
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 freeshipping">              
                <span><FaIcons.FaTruck/></span>           
                <p>Free Shipping on Orders over £100</p>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 email pr-0">              
                <FaIcons.FaEnvelopeOpen/>        
                <p><a href="mailto:info@beautybop.co.uk">info@beautybop.co.uk</a></p>
            </div>
        </div>
        
        </div>

    )
}

export default freeshipping;
