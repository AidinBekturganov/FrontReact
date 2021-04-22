import React from 'react'

function Ads(props) {
    return (
        <div>
            
            {props.ads && props.ads.map(ads => {
            return (
              <div key = {ads.id}>
            <h2>{ads.title}</h2>
            <p>{ads.description}</p>
    
            <hr/> 
            </div>
            )
            })}
    
            
        </div>
    )
}

export default Ads
