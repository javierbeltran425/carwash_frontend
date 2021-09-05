import styled from 'styled-components'
import bgimage from '..//Resources/LoginImage.png'

import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import SimpleButton from '../Components/SimpleButton'

const BackDivLogin = styled.div`
    background: url(${bgimage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

const Register = () => {
    const history = useHistory()
    const name = useRef(null), email = useRef(null), password = useRef(null)

    return(
        <BackDivLogin className="flex flex-col w-screen h-screen justify-center ">
            <div className="absolute w-screen h-screen bg-black opacity-60"/>
            <div className="z-10">
                <div className="mt-5 flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Name</label>
                    <input ref={name} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Email</label>
                    <input ref={email} type="text" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                <div className="mt-5 flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Password</label>
                    <input ref={password} type="password" className="my-3 border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"></input>
                </div>
                
                <div className="flex flex-col w-full justify-center items-center mt-5">    
                    <SimpleButton text="Registrarse" />
                </div>
            </div>
        </BackDivLogin>
    )
}

export default Register