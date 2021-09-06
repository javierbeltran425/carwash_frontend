import styled from 'styled-components'
import bgimage from '..//Resources/LoginImage.png'

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import './PasswordStyle.css';

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

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return(
        <BackDivLogin className="flex flex-col w-screen h-screen justify-center ">
            <div className="absolute w-screen h-screen bg-black opacity-60"/>
            <div className="z-10">
                <div className="mt-5 flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Name</label>
                    <InputText ref={name} className="border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                </div>
                <div className="flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Email</label>
                    <InputText ref={email} className="border rounded shadow-md text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                </div>
                <div className="flex flex-col justify-center mx-5">
                    <label className="mt-3 text-lg text-white font-bold text-blue-600">Password</label>
                    <Password ref={email} header={header} footer={footer} />
                </div>
                
                <div className="flex flex-col w-full justify-center items-center mt-5">    
                    <SimpleButton text="Registrarse" />
                </div>
            </div>
        </BackDivLogin>
    )
}

export default Register