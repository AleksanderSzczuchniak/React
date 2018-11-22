import React from 'react'
import Counter from './Counter'
import Form from './Form'
import Form2 from './Form2'
import ForceUpdate from './ForceUpdate'


const App = (props) => (
  <div>
    <Counter
      startValue={5}
      min={-10}
      max={10}
    />
    <Counter
      startValue={0}
      min={-5}
      max={5}
    />
    <hr />
    <ForceUpdate />
    <hr />
    <Form />
    <Form2 />
  </div>
)

export default App