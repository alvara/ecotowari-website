import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function EnvironmentImpact() {
  return (
    <div className="row">
      <span className="text-center preTitle">Environmental Impact</span>
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
        <div className="col-md-6">
          <InfoCard 
            title='Text Block 3 goes here'
            content='content is here'
          />
        </div>
        <div className="col-md-6">
          <InfoCard 
            title='Text Block 4 goes here'
            content='content is here'
          />
        </div>
     
      </div>
  )
}
