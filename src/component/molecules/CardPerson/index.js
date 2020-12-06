import React from 'react'
import formatNumber from '../../../utils/formatNumber';
import './card.css'

 const CardPerson = ({name,photo,amount,phone,status}) => {
    return (
        <>
            <div className="card-person shadow-sm " >
                <div style={{flex:1}}>
                         <div className="wrapper-card-person" >
                        <img alt=" " src={process.env.REACT_APP_API_IMAGE+photo}  className="img-fluid" />
                        <div>
                             <h2 className="mt-0">{name}</h2>
                            <span className="mt-0">{phone && `+${phone}`}{status && `${status}`}</span>
                        </div>
                        </div>
                </div>
                <div >
                    <p className="mt-4">{amount && `- Rp ${formatNumber(amount)}`}</p>
                </div>
            </div>            
        </>
    )
}

export default  CardPerson;
