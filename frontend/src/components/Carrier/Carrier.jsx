import React from 'react'
import HeadCard from './HeadCard'
import SubCard from './SubCard'

const Carrier = () => {
    const headCard1Heading= "Are you ready to orchestrate the extraordinary?"
    const headCard1Desc= "If you're looking for a career that's both challenging and rewarding, we invite you to explore the opportunities available at Global Investors Forum."

    const headCard2Heading= "Are you ready to orchestrate the extraordinary?"
    const headCard2Desc= "If you're looking for a career that's both challenging and rewarding, we invite you to explore the opportunities available at Global Investors Forum."

    const subCardImg = "https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Carrier%2FSubCard1.png?alt=media&token=bf309be1-5c73-4469-a912-01c5b29ed9a0"
    const subCard1para1= "Are you passionate about creating extraordinary experiences? Do you thrive in a fast-paced environment where creativity meets meticulous planning? If so, then a career at Global Investors Forum might be the perfect fit for you."
    const subCard1para2= "We are constantly searching for talented individuals to join our team. We offer a dynamic work environment where you'll collaborate with a passionate group of event professionals, all working together to orchestrate unforgettable experiences for our clients."

  return (
    <>
    <div
          className="w-full min-h-screen bg-no-repeat bg-cover bg-center  border-b border-neutral-800 md:py-20 sm:py-10"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Carrier%2FHeadCard1.png?alt=media&token=103a20d0-56ae-4bde-aa30-2a5e59f4183c') `,
          }}
        >
        <div className='pt-10 px-20'> <HeadCard head={headCard1Heading}  desc={headCard1Desc}/> </div>
       
    </div>
    <div
          className="w-full min-h-screen bg-no-repeat bg-cover   border-b border-neutral-800 md:py-20 sm:py-10"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/Carrier%2FHeadCard2.png?alt=media&token=d6c2edcb-babf-494f-a802-755e83845ce6') `,
          }}
        >
        <div className='pt-10 px-20'> <HeadCard head={headCard2Heading} desc={headCard2Desc}/> </div>
       
    </div>
    <div className='w-full min-h-screen bg-white border-b border-neutral-800 p-20'>
            <SubCard img={subCardImg} para1={subCard1para1} para2={subCard1para2}/>
            <h1 className='text-neutral-900 text-2xl'>What It Means to Be Part of Our Team</h1>
            <SubCard img={subCardImg} para1={subCard1para1} para2={subCard1para2} order={1} style={"end"}/>
    </div>
    </>
    
  )
}

export default Carrier