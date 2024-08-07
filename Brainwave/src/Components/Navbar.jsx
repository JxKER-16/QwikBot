import { useTheme } from '../Content/ThemeContext';
import logoLight from '../../src/assets/Navbar/logo-light.png'
import logoDark from '../../src/assets/Navbar/logo-dark.png'
import {useNavigate} from 'react-router-dom'



function Navbar() {
    const navigate = useNavigate();

    const { theme } = useTheme();
    const logo = theme === 'light' ? logoDark : logoLight;

  return (
    <header className='font-roboto-mono'>
        <nav>
            <div className='absolute -ml-7 -mt-5'>
                <a href="/"><img className='h-[120px]' src={logo} alt="logo" /></a>
            </div>
            <div>
                <a href="/">
                <h1 id='title' className="text-white py-5 px-[65px] text-4xl font-bold font-rubik cursor-pointer transition ">
                    QwikChat
                </h1>   
                </a>
            </div>
            <div>
                <ul id='list-icons' className="flex gap-10 justify-end -mt-10 cursor-pointer text-white font-semibold text-lg pr-52 hover:text-bold">
                    <li id='icons'> <a href="">Home</a> </li>
                    <li id='icons'> <a href="http://localhost:3000/">Chat</a> </li>
                    <li id='icons'> <a href="/">Encharge</a> </li>
                    <li id='icons'> <a href="/">About</a> </li>
                    <li id='icons'> <a href="/">Contact</a> </li>
                </ul>
            </div>
            <div className="flex justify-end h-16 -mt-12">
                <button id="user" onClick={()=>navigate("/login")} className="bg-[#161a20] border-none text-[#f0f0f0] rounded-[1000px] relative flex justify-center items-center font-rubik w-36 cursor-pointer"><a href="/login">Account</a></button>
            </div>
             
        </nav>
    </header>
  )
}

export default Navbar