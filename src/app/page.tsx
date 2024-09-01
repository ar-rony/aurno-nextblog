import Link from 'next/link'
import CatButton from '@/components/CatButton'
import Image from 'next/image'

const Home = () => {
  return (
    <main className="">      
      {/* Main Blog Banner */}
      <div className="bg-dark/60 bg-cover bg-center h-96 md:h-[500px] p-5 md:px-14 md:py-20 flex flex-col justify-end rounded-lg gap-6 *:text-light relative">
        <Image src={"/blogs/homepagebanner.jpg"} alt='' fill className='object-cover rounded-lg -z-10'/>
        <CatButton url={"/"} text={"Web Development"}/>
        <h1 className='w-full lg:w-8/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Building Progressive Web Apps: Bridging the Gap Between Web and Mobile</h1>
        <p className='hidden text-xl md:block w-full lg:w-9/12'>Integrating mindfulness practices helps developers cultivate present-moment awareness, fostering focus, problem-solving, and work-life balance.</p>
      </div>
      
    </main>
  )
}

export default Home