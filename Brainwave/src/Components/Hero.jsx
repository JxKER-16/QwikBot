import {TypeAnimation} from 'react-type-animation'

function Hero() {
  return (
    <section className='m-4 py-4'>
      <div className="flex justify-center w-ful">
        <h1 id="hero-title" className="text-white text-[80px] font-rubik mt-[70px] text-center"> <span  className="text-[70px] font-rubik">QwikChat</span></h1>
    </div>
    <div id='hero-content' className='text-white text-center py-5 font-roboto-mono font-medium text-sm '>
    <TypeAnimation 
      sequence={[
        'Generate a code for a Ecommerce Website.',
        2000,
        'Generate an essay on Slavery.',
        2000,
        'Generate a recipe for making Lasagna.',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
    <div className="flex justify-center h-11 mt-6">
      <a href="http://localhost:3000/"><button id='hero-button' className="bg-white rounded-xl flex items-center gap-3 p-3 -mb-2 text-[22px] font-semibold font-rubik text-black ">Get Started <span className="mt-[px]">►</span></button></a>
    </div>
    </section>
  )
}

export default Hero