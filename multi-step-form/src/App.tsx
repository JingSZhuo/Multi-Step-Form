import { useState } from 'react'

//Components
import PersonalInfoComponent from './components/personInfo';

function App() {
  const [page, setPage] = useState(0);

  function testFunction(){
    //setPage(a => a + 1);
  }

  return (
    <div className='flex flex-col h-screen md:p-12'>
        <div className='bg-bg-sidebar-mobile bg-cover p-7 w-full'>
            <div className='grid grid-cols-4 grid-rows-1 justify-items-center w-8/12 m-auto mt-4 mb-14'>
              <div className='form-navigation-buttons'>1</div>
              <div className='form-navigation-buttons'>2</div>
              <div className='form-navigation-buttons'>3</div>
              <div className='form-navigation-buttons'>4</div>
            </div>
        </div>
        <div className='relative flex flex-1 justify-center'>
          <form className='absolute -top-12 p-5 bg-white rounded-lg w-11/12' >
            {page === 0 ? <PersonalInfoComponent comp={testFunction}/> : null}
            {/* {page >= 0 ? <button className='' onClick={testFunction} >Next</button> : null} */}
          </form>
        </div>
    </div>
  )
}

export default App
