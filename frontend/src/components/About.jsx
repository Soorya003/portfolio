import AboutImg from '../assets/About.avif'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 w-[170px] mb-5 font-bold'>About Me</h1>
                <p className='pb-5'>Hi,My name is Soorya.I am a full stack web developer.I have done projects with React.js</p>
                <p className='pb-5'>I am proficient in Frontend skills like React.js,CSS,Tailwind CSS,Axios,Redux,Redux Tool kit etc</p>
                <p className='pb-5'>In Backend I know Node.js,Express.js,Mongodb,Mongoose</p>
            </div>
        </div>
    </section>
}