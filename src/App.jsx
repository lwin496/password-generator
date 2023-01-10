import {useState} from 'react'
function App() {
  const [password, setPassword] = useState("****************")
  
  const generatePassword = () => { 
    const randomPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    setPassword(randomPassword)
    navigator.clipboard.writeText(randomPassword)
  }


  return (
    
    <>
      <div className="bg-purple-800 h-[100vh] text-white font-bold text-2xl flex">
        <div className="h-[10rem] w-[50vw] bg-white flex flex-col justify-center items-center m-auto">
          <h1 className="text-purple-800">Password Generator</h1>
           <div className='text-green-500'>{password}</div>
            <div className="flex flex-row">
               <div className="px-10 text-purple-800 cursor-pointer" onClick={generatePassword}>Generate</div>
               <div className="px-10 text-purple-800 cursor-pointer">Copy</div>
            </div>
        </div>
       
      </div>
    </>
   
  );

}
export default App;
