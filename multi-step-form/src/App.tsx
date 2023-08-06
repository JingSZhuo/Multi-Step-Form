import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-1'>
        <div className='bg-bg-sidebar-mobile bg-cover p-7 w-full'>
            <div className='grid grid-cols-4 grid-rows-1 justify-items-center w-8/12 m-auto mt-4 mb-14'>
              <div className='form-navigation-buttons'>1</div>
              <div className='form-navigation-buttons'>2</div>
              <div className='form-navigation-buttons'>3</div>
              <div className='form-navigation-buttons'>4</div>
            </div>
        </div>
    </div>
  )
}

export default App
