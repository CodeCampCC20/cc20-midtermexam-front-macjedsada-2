
function LoginPage() {
  return (
    <div className="h-screen bg-[#121826]">

      <div className="flex">

        <div className="bg-[#212936]  w-2/6 p-8 mx-auto rounded-lg flex-col justify-center mt-50" >

          <h1 className="text-white text-4xl">Welcome</h1>


          {/* <input
            className="bg-[#394050] text-[#777c89] rounded-sm h-12 w-6/6 text-md p-4 mt-6 outline-0"
            type="email"
            placeholder="email"
            /> */}

          <input className="input validator bg-[#394050] text-white rounded-sm h-12 w-6/6 text-md p-4 mt-6 outline-0"
            type="email"
            required placeholder="email" />
          <div className="validator-hint">Enter valid email address</div>

          {/* <input
            className="bg-[#394050] text-[#777c89] rounded-sm h-12 w-6/6 text-md p-4 mt-6 outline-0"
            type="password"
            placeholder="password"
          /> */}

          <input 
          type="password" 
          className="input validator bg-[#394050] text-white rounded-sm w-6/6 text-md p-4 outline-0" 
          required placeholder="Password" 
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
          <p className="validator-hint">
            Must be more than 8 characters, including
            <br />At least one number
            <br />At least one lowercase letter
            <br />At least one uppercase letter
          </p>

          <button className="bg-[#394050] cursor-pointer hover:bg-[#51555f] rounded-sm h-12 w-6/6 text-md">
            <h1 className="text-white text-lg font-bold text-center ">
              LOG IN</h1>
          </button>

        </div>
      </div>
    </div>
  )
}

export default LoginPage