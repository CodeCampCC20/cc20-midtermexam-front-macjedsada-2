import axios from "axios"


const baseurl = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com"

const authApi ={}
authApi.login = (input) => {
  return axios.post(`${baseurl}/api/V1/auth/login`,input)
}



export default authApi