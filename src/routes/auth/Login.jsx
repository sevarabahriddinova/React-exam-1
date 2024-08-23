import { useState } from "react"
import axios from "../../api"
import "./Login.css";
import Link from "antd/es/typography/Link";
import { Button, Flex } from 'antd';
import ebay from "../../assets/logo.svg"





const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")


  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/login",
        {
          username: name,
          password: password
        })
      console.log(res)
      if (res?.data) {
        localStorage.setItem("x-auth-token", res?.data?.token)
        navigate("/")
        setName("")
        setPassword("")
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (


    <div className="login__container">

      <img src={ebay} alt="" />
      <form onSubmit={handleFormSubmit} className='form__content'>

        <div className="flex flex-col items-center">
          <h2 className="italic text-[36px] font-bold">Hello</h2>
          <div className="flex">
            <p className="w-full text-[14px]">Sign in to eBay or <Link to={"/"}>create an account</Link> </p>
          </div>
        </div>


        <input className="inputs" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Email' />
        <input className="inputs" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
        <Button type="primary" className="btn w-full p-6 rounded-xl">Continue</Button>
        <div>
          
          
          <div className="mt-[200px]">
            <h5 className="text-[13px] text-center mt-4">  Stay signed in <br />Using a public or shared device? <br />Uncheck to protect your account.</h5>
          </div>
          <h2 className="text-center text-blue-600 mt-8">Lern more</h2>
        </div>

        <div className="w-[355px] p-6 bg-blue-600">
          <p className="w-full text-[12px] text-white">With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.</p>
        </div>
      </form>



    </div>
  )
}

export default Login