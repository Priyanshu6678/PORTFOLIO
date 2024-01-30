import Send from '../assets/send.svg';

export default function WriteToUs(){
 return(
  <>
   <div className="flex flex-col w-screen justify-start p-4 items-center space-y-4">
   <h1 className="text-gray-800 text-xl">Say us your name</h1>
    <div className="flex justify-center items-center w-screen">
  <input 
   type="text" 
   className="p-2 w-7/12 outline-none"
   placeholder="Name"
   />
    <button className="bg-black p-2"><svg xmlns="http://www.w3.org/2000/svg" height="24" fill="white" viewBox="0 -960 960 960" width="24"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
</button>
   </div>
   </div>
  </>
 )
}