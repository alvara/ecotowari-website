import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function AboutEcotowari() {
  return (
    <div className="row">
      <span className="text-center preTitle">About Ecotowari</span>
      <h2 className="text-center">Ecotowariとは</h2>
        <div className="col-12">
          <InfoCard 
            title='Text Block 1 goes here'
            content='content is here'
          />
        </div>
      </div>
  )
}
