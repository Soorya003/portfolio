import Heroimg from '../assets/intro.avif'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai"; 

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
             <h1 className=' text-white text-6xl font-hero-font '>Hi , <br/>I am Soorya
                  <p className='text-2xl'>I am a Full Stack Developer</p>
             </h1>
             <div className='flex py-10'>
                <a href='#' className='pr-5 hover:text-white '><AiOutlineTwitter  size={50}/></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={50} /></a>
                <a href='#' className=' hover:text-white'><AiOutlineLinkedin size={50}/></a>
             
             </div>
        </div>
      <img className='md:w-1/2' src={Heroimg} />
    </section>
}