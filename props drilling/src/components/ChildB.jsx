import React from 'react'
import ChildC from './ChildC'

const ChildB = ({data}) => {
  return (
    <div>
      <ChildC data={data} />
    </div>
  )
}

export default ChildB
