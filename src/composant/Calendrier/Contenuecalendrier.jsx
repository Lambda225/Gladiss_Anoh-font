import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

function Contenuecalendrier() {
  return (
    <div className='py-20 flex justify-center'>
        <div className='flex flex-col items-center rounded-lg shadow-3xl overflow-hidden w-10/12 lg:w-3/4 xl:w-1/2 sm:flex-row'>
              <div className='bg-rose-50 px-[10%] py-7 sm:px-[6%] w-full lg:w-[45%] '>
                <div className=''>
                  <h2 className="text-2xl text-marron-200 font-semibold pb-2 w-3/4 after:content-[''] after:h-0.5 after:w-full after:bg-marron-200 relative after:absolute after:left-0 after:bottom-0 mb-4">Evenement</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit a, illum eos magni obcaecati repellendus deleniti inventore rerum, asperiores ipsa maiores temporibus fugiat molestias saepe cum. Suscipit, mollitia nemo.</p>
                <div className='flex justify-center mt-4 '><a href="#" className='px-5 py-3 rounded-lg bg-marron-200 text-white'>Acheter accès</a></div>
              </div>
            </div>
          <div className='w-full lg:w-[55%]'>
                <CalendarComponent className='' />
          </div>
        </div>
    </div>
  )
}

export default Contenuecalendrier