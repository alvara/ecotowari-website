import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function GetStickerCTA() {
  return (
    <div className="row">
      <span className="text-center preTitle">Get a sticker</span>
      <h2 className="text-center">Get a sticker here</h2>
        <div className="col-md-6">
          <InfoCard 
            title='image of sticker'
            content='content is here'
          />
        </div>

     
      </div>
  )
}
