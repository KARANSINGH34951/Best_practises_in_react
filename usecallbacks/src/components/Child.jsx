import React, { memo } from 'react'

const Child = ({learning,count}) => {
  console.log("child hu");
  return (
    <div>
      <h2>insisde Child</h2>
    </div>
  )
}

export default memo(Child);
