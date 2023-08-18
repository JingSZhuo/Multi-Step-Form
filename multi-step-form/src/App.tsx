import { useState } from 'react'

//Components
import PersonalInfoComponent from './components/personInfo';

function App() {
  const [page, setPage] = useState(0);

  function incrementPage(){
    //setPage(a => a + 1);
  }

  return (
    <div className='flex flex-col h-screen md:p-4 md:flex-row md:h-auto md:bg-white md:w-auto m-auto md:rounded-lg'>
        <div className='bg-bg-sidebar-mobile bg-cover p-7 w-full md:bg-bg-sidebar-desktop md:w-auto'>
            <div className='flex justify-evenly w-8/12 m-auto mt-4 mb-14 md:flex-col md:w-auto'>
              <div className='flex flex-row items-center mb-5'>
                <div className='form-navigation-buttons mr-4'>1</div>
                <div className='md:flex md:flex-col hidden'>
                  <span className='text-Cool-gray text-sm'>Step 1</span> 
                  <span className='text-white text-sm font-bold '>YOUR INFO</span>
                </div>
              </div>
              
              <div className='flex flex-row items-center mb-5'>
                <div className='form-navigation-buttons mr-4'>2</div>
                <div className='md:flex md:flex-col hidden'>
                  <span className='text-Cool-gray text-sm'>Step 2</span> 
                  <span className='text-white text-sm font-bold '>SELECT PLAN</span>
                </div>
              </div>
              
              <div className='flex flex-row items-center mb-5'>
                <div className='form-navigation-buttons mr-4'>3</div>
                <div className='md:flex md:flex-col hidden'>
                  <span className='text-Cool-gray text-sm'>Step 3</span> 
                  <span className='text-white text-sm font-bold '>ADD-ONS</span>
                </div>
              </div>
              
              <div className='flex flex-row items-center mb-5'>
                <div className='form-navigation-buttons mr-4'>4</div>
                <div className='md:flex md:flex-col hidden'>
                  <span className='text-Cool-gray text-sm'>Step 4</span> 
                  <span className='text-white text-sm font-bold '>SUMMARY</span>
                </div>
              </div>
              
            </div>
        </div>
        <div className='relative flex flex-1 justify-center'>
          <form className='absolute -top-12 p-5 bg-white rounded-lg w-11/12 md:relative md:top-0 md:p-9 md:py-3' >
            {page === 0 ? <PersonalInfoComponent comp={incrementPage}/> : null}
            {/* {page >= 0 ? <button className='' onClick={testFunction} >Next</button> : null} */}
          </form>
        </div>
    </div>
  )
}

export default App
