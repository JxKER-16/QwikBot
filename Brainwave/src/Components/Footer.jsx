import moon from '../../src/assets/moon-dark.png'
import sun from '../../src/assets/sun-light.png'
import iglight from '../../src/assets/ig-light.png'
import igdark from '../../src/assets/ig-dark.png'
import { useTheme } from '../Content/ThemeContext';

function Footer() {

const { theme, toggleTheme } = useTheme();

const themeIcon = theme === 'light' ? moon : sun;
const ig = theme === 'light' ? iglight : igdark;
    
  return (
    <footer className='flex justify-between px-16 mt-[400px]'>
        <div id="theme">
            <img className='h-6 my-2 cursor-pointer' src={themeIcon} alt="theme change icon" onClick={toggleTheme} />
        </div>
        <div>
            <p id='hero-content' className="text-white font-roboto-mono text-1xl"><span className='text-2xl'>&copy;</span> Copyright 2024</p>
        </div>
        <div>
            <img  className='h-8 my-2' src={ig} alt="ig" />
        </div>
    </footer>
  )
}

export default Footer