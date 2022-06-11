import React from 'react'
import Headerapropos from '../../composant/Apropos/Headerapropos'
import Footer from '../../composant/General/Footer'
import Navbar from '../../composant/General/Navbar'

function Apropos() {
  return (
    <div className=' relative'>
        <Navbar />
        <Headerapropos />
        <div className='px-[10%] my-20'>
            <h2 className='text-center text-xl font-semibold mb-12 2xl:text-4xl'>A propos</h2>
            <p className='mb-8 2xl:text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deleniti maiores aliquid accusantium quas nobis, fugit vel excepturi, atque, deserunt vero veritatis fugiat aperiam inventore incidunt veniam! Quam numquam iste id delectus, natus soluta? Asperiores dolor obcaecati at recusandae nihil ipsa illo cupiditate, est assumenda omnis maiores illum totam! A laudantium, voluptates porro minima architecto hic consequatur debitis enim nisi iusto deserunt vero accusantium mollitia animi ex numquam voluptate blanditiis molestias quis. Sit debitis incidunt amet asperiores pariatur fuga minus quisquam quis libero laboriosam dolores, eligendi laudantium? Eum rem officia voluptas ipsam ullam aliquid numquam eos, maiores porro voluptates optio.</p>
            <p className='2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem cupiditate est a et officia pariatur omnis enim maxime atque. Modi soluta natus recusandae, quisquam cum repudiandae quaerat possimus laborum. Aliquid, reiciendis ratione eaque quas adipisci aut quidem error iusto fugiat debitis aperiam corrupti, nemo ipsum officiis magni corporis. Laborum et maiores perferendis, accusamus unde quaerat odio saepe minus laudantium molestias non ipsum iure consectetur amet. Aliquam minus fugit, deleniti maiores labore rerum eos dolore recusandae quia quod similique iste adipisci repudiandae, eveniet minima quidem atque blanditiis error omnis pariatur. Quia reiciendis facilis optio eius tenetur perferendis hic architecto nihil.</p>
        </div>
        <div className='mb-20'>
            <h2 className='text-center text-xl font-semibold mb-12 2xl:text-4xl'>Contact</h2>
            <div className='flex flex-col items-center px-[6%] md:flex-row md:gap-x-7 md:justify-center'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="flex flex-col items-center">
                        <div className='h-16 w-16 2xl:w-28 2xl:h-28 rounded-full bg-rose-50'></div>
                        <p className='text-center 2xl:text-2xl'>Lorem ipsum dolor</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className='h-16 w-16 2xl:w-28 2xl:h-28 rounded-full bg-rose-50'></div>
                        <p className='text-center 2xl:text-2xl'>Lorem ipsum dolor</p>
                    </div>
                    <div className="flex flex-col items-center col-span-2">
                        <div className='h-16 w-16 2xl:w-28 2xl:h-28 rounded-full bg-rose-50'></div>
                        <p className='text-center 2xl:text-2xl'>Lorem ipsum dolor</p>
                    </div>
                </div>
                <form action="#" className='flex flex-col items-center mt-16 shadow-3xl w-full sm:w-9/12 md:w-1/2 lg:w-[40%] px-[15%] sm:px-[10%] md:px-[6%] py-14 rounded-lg 2xl:w-1/4 2xl:px-[3%]'>
                    <h3 className='text-xl 2xl:text-3xl font-semibold mb-7 w-9/12 text-center relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-4/12 after:bg-marron-200 after:translate-x-[-50%] pb-4'>Envoyer nous un message</h3>
                    <input type="text" placeholder='Nom' className='py-2 border-b-2 2xl:text-xl border-blue-200 w-full focus:outline-none mb-7' />
                    <input type="email" placeholder='Mail' className='py-2 2xl:text-xl border-b-2 border-blue-200 w-full focus:outline-none mb-7' />
                    <textarea name="" id="" rows="2" placeholder='Message' className='px-2 2xl:text-xl border-b-2 border-blue-200 w-full focus:outline-none mb-7 resize-none'></textarea>
                    <button className='py-3 w-full rounded-lg bg-blue-200 text-white 2xl:text-xl'>Envoyer</button>
                </form>
            </div>
        </div>
        <div className='mb-20 px-[6%] lg:px-[10%]'>
            <div className=' w-full h-64 bg-blue-200 rounded-lg'></div>
        </div>
        <Footer />
    </div>
  )
}

export default Apropos