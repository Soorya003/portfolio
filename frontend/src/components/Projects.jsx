import ProjectImg from '../assets/project.jpg'
import Gtn from '../assets/gtn.jpg'
import Todo from '../assets/todo.jpg'

export default function Projects(){
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl border-b-4 w-[140px] mb-5 font-bold'>Projects</h1>
            <p>These are some of my best projects.I have built them with MERN stack.Check them out.</p>
            </div>
        </div>
        <div className="w-full">
          <div className='flex flex-col md:flex-row px-10 gap-5'>
             <div className='relative'>
                <img className='h-[200px] w-[1000px]' src={ProjectImg}/>
                   <div className='project-desc'>
                        <p className='text-center py-5'> CRM website build with MERN Stack</p>
                        <div className='flex justify-center'>
                       <a  className="btn" target="_blank" href="https://crm-3-beta.vercel.app">View Project</a>
                   
                   </div>
                   </div>
                </div>
            <div className='relative'>
                <img className='h-[200px] w-[1000px]' src={Gtn}/>
                    <div className='project-desc'>
                        <p className='text-center py-5'>Guess the number game built with reactjs</p>
                        <div className='flex justify-center'>
                       <a  className="btn" target="_blank" href="https://gtn-delta.vercel.app">View Project</a>
                   
                   </div>
                    </div>
             </div>
             <div className='relative'>
                <img className='h-[200px] w-[1000px]' src={Todo}/>
                    <div className='project-desc'>
                        <p className='text-center py-5'>Todolist project done with mern stack</p>
                        <div className='flex justify-center'>
                       <a  className="btn" target="_blank" href="https://todolist-nu-orpin.vercel.app">View Project</a>
                   
                   </div>
                    </div>
             </div>

 
 
            </div>

        </div>
    </section>
}