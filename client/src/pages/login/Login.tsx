import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext";
import "./login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,
    password:undefined
  })

  const { loading, error, dispatch } = useContext(AuthContext);

  function handleChange() {
    console.log("handlechange")
  }

  return (
    <div className="login">
      <div className="lContainer">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        <input type="password" placeholder="password" id="username" onChange={handleChange} className="lInput" />
      </div>
    </div>
  )
}

export default Login