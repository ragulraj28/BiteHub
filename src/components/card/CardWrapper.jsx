import React from 'react'

const Card = ({image, name, location}) => {

  return(
    <div className='res-card'>
      <figure className='res-image'>
        <img src={image} alt={name} />
      </figure>
      <div className="res-details">
        <h3 className='res-name'>{name}</h3>
        <p className='res-loc'>{location}</p>
      </div>
    </div>
  )

}

const CardWrapper = ({resDetails}) => {

  return (
    <div className='card-wrapper'>
        {resDetails?.map((item, index) => <Card key={index} {...item}/>)}
    </div>
  )
}

export default CardWrapper