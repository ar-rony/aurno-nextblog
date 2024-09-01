import Link from 'next/link'
import CatButton from '@/components/CatButton'
import Image from 'next/image'

const Home = () => {
  return (
    <main className="">      
      {/* Main Blog Banner */}
      <div className="bg-gradient-to-b from-light/10 to-dark/80 bg-cover bg-center h-96 md:h-[500px] p-5 md:px-14 md:py-20 flex flex-col justify-end rounded-lg gap-6 *:text-light relative">
        <Image src={"/blogs/homepagebanner.jpg"} alt='' fill className='object-cover rounded-lg -z-10'/>
        <CatButton url={"/"} text={"Web Development"}/>
        <h1 className='w-full lg:w-8/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Building Progressive Web Apps: Bridging the Gap Between Web and Mobile</h1>
        <p className='hidden text-xl md:block w-full lg:w-9/12'>Integrating mindfulness practices helps developers cultivate present-moment awareness, fostering focus, problem-solving, and work-life balance.</p>
      </div>

      {/* Featured Post  */}
      <div className="mt-14 sm:mt-20 md:px-20 flex flex-col gap-y-6  sm:gap-y-20">
        <h2 className='text-3xl font-bold'>Featured Post</h2>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-5">

          <div className="bigpost w-full md:w-1/2">
            <div className="bg-gradient-to-b from-light/15 to-dark/60 bg-cover bg-center h-80 sm:h-96 p-5 sm:p-8  flex flex-col justify-end rounded-lg gap-6 *:text-light relative">
              <Image src={"/blogs/earphone.jpg"} alt='' fill className='object-cover rounded-lg -z-10'/>
              <CatButton url={"/"} text={"productivity"}/>
              <h1 className='w-full text-xl sm:text-2xl'>Mindfulness and Meditation Techniques for Developers: Improving Focus and Clarity</h1>
            </div>
          </div>

          <div className="listpost flex flex-col gap-7 sm:gap-5 w-full md:w-1/2">

            <div className="relative  sm:h-1/2 flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="bg-[url('/blogs/code.jpg')] h-80 sm:h-full sm:w-2/6 bg-cover bg bg-center rounded-lg"/>
              <div className="flex flex-col gap-2 sm:w-4/6">
                <Link href={"#"} className='uppercase text-sm text-accent w-max'>Code Quality</Link>
                <h2 className='text-xl font-bold capitalize'>Best Practices for Writing Clean and Maintainable Code</h2>
                <span className='text-gray/90'>January 02, 2023</span>
              </div>
            </div>

            <div className="relative  sm:h-1/2 flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="bg-[url('/blogs/email.jpg')] h-80 sm:h-full sm:w-2/6 bg-cover bg bg-center rounded-lg"/>
              <div className="flex flex-col gap-2 sm:w-4/6">
                <Link href={"#"} className='uppercase text-sm text-accent w-max'>productivity</Link>
                <h2 className='text-xl font-bold capitalize'>Automating Repetitive Tasks: Productivity Hacks for Developers
                </h2>
                <span className='text-gray/90'>January 02, 2023</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </main>
  )
}

export default Home