import React from 'react'

const Test = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  )
}

export default React.memo(Test);
