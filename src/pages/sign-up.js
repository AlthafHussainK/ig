import { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import FirebaseContext from "../context/firebase"
import * as ROUTES from '../constants/routes'

export default function SignUp() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const isInvalid = password === '' || emailAddress === ''

  const handleSignUp = async (event) => {
    event.preventDefault()

    // try {
      
    // } catch (error) {
      
    // }
  }

  useEffect(() => {
    document.title = 'Signup - Instagram'
  }, [])


  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with ig" />
      </div>
      <div className="flex flex-col w-2/5">
      <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
      <h1 className="flex justify-center w-full">
        <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
      </h1>
      { error && <p className="mb-4 text-xs text-red-primary">{error}</p> }
      
      <form onSubmit={handleSignUp} method="POST">
        <input aria-label="Enter your username" 
          type="text"
          placeholder="Username"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input aria-label="Enter your full name" 
          type="text"
          placeholder="Full name"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          onChange={({ target }) => setFullname(target.value)}
        />
        <input aria-label="Enter your email addres" 
          type="text"
          placeholder="Email address"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          onChange={({ target }) => setEmailAddress(target.value)}
        />
         <input aria-label="Enter your password" 
          type="password"
          placeholder="Password"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button 
          disabled={isInvalid}
          type="submit"
          className={`bg-blue-medium text-white w-full rounded h-8 font-bold 
          ${isInvalid && 'opacity-50'}`}
        > 
          Signup
        </button>
      </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full rounded bg-white p-4 border border-gray-primary">
        <p className="text-sm">
          Have an account?{` `}
          <Link to="/login" className="font-bold text-blue-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}