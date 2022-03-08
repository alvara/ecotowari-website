import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function AboutUs() {
  return (
    <div className="row">
      <span className="text-center preTitle">About Ecotowari</span>
      <h2 className="text-center">Ecotowariとは</h2>
        <div className="col-md-6">
          <InfoCard 
            title='Text Block 1 goes here'
            content='content is here'
          />
        </div>
        <div className="col-md-6">
          <InfoCard 
            title='Text Block 2 goes here'
            content='content is here'
          />
        </div>
     
      </div>
  )
}
