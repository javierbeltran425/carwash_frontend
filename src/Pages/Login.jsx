import styled from 'styled-components'
import bgimage from '..//Resources/LoginImage.png'

import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import './PasswordStyle.css';

import SimpleButton from '../Components/SimpleButton'

const BackDivLogin = styled.div`
    background: url(${bgimage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

const Login = () => {
    const history = useHistory()
    const email = useRef(null), password = useRef(null)

    return(
        <>
        <BackDivLogin className="flex flex-col w-screen h-screen justify-center ">
            <div className="absolute w-screen h-screen bg-black opacity-60"/>
            <div className="flex w-screen md:w-1/2 flex-row z-10">
                <div className="flex flex-col w-full md:w-1/2">
                    <div className="flex flex-col justify-center mx-3">
                        <label className="mt-3 text-lg text-white font-bold text-blue-600">Email</label>
                        <InputText ref={email} className="border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                    </div>
                    <div className="mt-5 flex flex-col justify-center mx-3">
                        <label className="mt-3 text-lg text-white font-bold text-blue-600">Password</label>
                        <Password ref={password} toggleMask className="rounded shadow-md text-gray-600  focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                    </div>
                    
                    <div className="flex flex-col w-full justify-center items-center mt-5">    
                        <SimpleButton text="Iniciar sesión" />
                        <p className="text-white font-bold mt-2 text-blue-600"
                            onClick={e => {
                                e.preventDefault()
                                history.push('/register')
                            }}
                        >ó registrate</p>
                    </div>
                </div>

                <div className="hidden w-full md:w-1/2 md:flex">

                </div>
            </div>
        </BackDivLogin>
        </>
    )
}

export default Login