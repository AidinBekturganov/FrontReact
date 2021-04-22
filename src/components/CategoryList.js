

import React from 'react'

function CategoryList(props) {
    return (
        <div>
            
        {props.category && props.category.map(category => {
        return (
          <div key = {category.id}>
        <h2>{category.typeOfAd}</h2>
        <p>{category.active}</p>

        <hr/> 
        </div>
        )
        })}

        </div>
    )
}

export default CategoryList
