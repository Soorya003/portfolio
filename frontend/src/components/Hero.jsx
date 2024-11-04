import Heroimg from '../assets/intro.avif';

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
             <h1 className=' text-white text-6xl font-hero-font '>Hi , <br/>I am Soorya
                  <p className='text-2xl'>I am a Full Stack Developer</p>
             </h1>

        </div>
      <img className='md:w-1/2' src={Heroimg} />
    </section>
}