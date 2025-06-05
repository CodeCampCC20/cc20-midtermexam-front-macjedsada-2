import * as Yup from 'yup'
import { useState } from "react"
import { useNavigate } from "react-router";
import { schemaLogin } from "../validator/schemaLogin";
import InputForm from '../components/form/inputForm';
import authApi from '../api/authApi';


const initialInput = {
  username: "",
  password: "",
}
function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setInput((prev) => ({ ...prev, [id]: value }));
    setInputError((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      schemaLogin.validateSync(input, { abortEarly: false });

      const res = await authApi.login(input);
      console.log("res", res.data)

      // setInput(initialInput)
      navigate("/todo")

    } catch (error) {
      console.log(error)
      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    }
  }
  return (
    <div className="h-screen bg-[#121826]">
      <div className="flex">
        <div className="bg-[#212936] w-2/6 p-8 mx-auto rounded-lg flex-col justify-center mt-50" >
          <h1 className="text-white text-4xl">Welcome</h1>

          <form onSubmit={handleSubmit}>


            <InputForm
              id="username"
              placeholder="username"
              value={input.username}
              handleChange={handleChange}
              error={inputError.username}

            />

            <InputForm 
              id="password"
              placeholder="password"
              value={input.password}
              handleChange={handleChange}
              error={inputError.password}
              // type='password'
            />

            {/* <input
              className=" bg-[#394050] text-white rounded-sm h-12 w-6/6 text-md p-4 mt-6 outline-0"
              id="username"
              // type="text"
              placeholder="username"
              handleChange={handleChange}
              error={inputError.username}
              value={input.username}
            /> */}


            {/* <input
              className="bg-[#394050] text-white rounded-sm w-6/6 text-md p-4 mt-4 outline-0"
              id="password"
              type="password"
              placeholder="password"
              handleChange={handleChange}
              error={inputError.password}
              value={input.password}
            /> */}


            <button
              className="bg-[#394050] cursor-pointer hover:bg-[#51555f] rounded-sm h-12 w-6/6 mt-4 text-md"
              type="submit">
              <h1 className="text-white text-lg font-bold text-center ">
                LOG IN</h1>
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage