import ResumeImg from '../assets/resume.jpg'
export default function Contact(){
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
            
                <h1 className='text-4xl border-b-4  w-[140px] mb-5 font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail,please contact me</p>
                <p className='py-2'><span className='font-bold'>Email:</span>sooryasoor003@gmail.com</p>
                <p className='py-2'><span className='font-bold'>Phone:</span>+91 9626727673</p>
        </div>
    </section>
}