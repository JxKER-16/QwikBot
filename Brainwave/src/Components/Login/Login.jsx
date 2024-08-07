import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import circle from '../../assets/Circle.png'

function Login() {
    const navigate = useNavigate();
  return (
    <div id="login" className="flex justify-center">
        <div className="mr-[1000px] mt-[600px] absolute z-10">
            <img src={circle}/>
        </div>
        <div className="ml-[950px] -mt-[130px] absolute z-10">
            <img src={circle}/>
        </div>
        <form action="Post" className="bg-white w-1/2 flex justify-center my-20 h-[800px] border-none rounded-md">
                <a href="/" className="absolute my-10 mr-[48rem] text-1xl font-roboto-mono hover:underline cursor-pointer">← Back</a>
            <div id="login-title" className="py-10 font-rubik">
                <h1 id="login-title" className="text-[40px]">Login</h1>
            </div>
            <div className="w-[120px] absolute mt-36">
                    <img src={logo} alt="" className="rounded-[40px]" />
            </div>
            <div id="items" className="absolute flex flex-col justify-center items-center mt-[350px] gap-10">
                <div id="login-input" className="flex gap-5">
                    <label htmlFor="Name" className="text-2xl font-rubik">Username:</label>
                    <input type="text" name="Pass" id="Pass" placeholder="Enter User Name" className="border-[1.5px] border-black rounded-md px-2 font-medium font-roboto-mono" required/>
                </div>
                <div id="login-input" className="flex gap-5">
                    <label htmlFor="Pass" className="text-2xl font-rubik">Password:</label>
                    <input type="password" name="Pass" id="Pass" placeholder="Enter Password" className="border-[1.5px] border-black rounded-md px-2 font-medium font-roboto-mono" required/>
                </div>
                <div id="submit-btn" className="py-10">
                    <button id="btn-login" type="submit" onClick={()=>navigate("/login")} className="bg-gradient-to-r from-cyan-500 to-blue-500 border-none rounded-xl flex items-center gap-3 p-2 px-10 -mb-2 text-[22px] font-semibold font-rubik text-white transition delay-0 ease hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500">Login</button>
                </div>
                <div>
                    <p>New Here? Click here to <span><a href="/signup" className="underline hover:text-purple-400">Signup</a></span></p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login