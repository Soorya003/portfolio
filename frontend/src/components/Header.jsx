export default function Header(){
    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a  className="font-bold text-black" href="#">Soorya</a>
        <ul className="flex text-white" >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
     </header>
}