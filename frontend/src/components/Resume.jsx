import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    return <section id="resume" className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 w-[140px] mb-5 font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href="https://drive.google.com/file/d/1kDKBJhLO0U1bJb3D0ozWbVg8gW5pqqdw/view?usp=drive_link"> View</a></p>
                            </div>
        </div>
    </section>
}