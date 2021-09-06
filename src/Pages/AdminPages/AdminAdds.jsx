import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import AdminHeader from "../../Components/AdminHeader"
import GeneralButton from '../../Components/GeneralButton'

const AdminAdds = () => {
    const subject = useRef(null)
    const textArea = useRef(null)

    return (
        <>
        <div className="flex flex-col w-screen h-screen bg-gray-900 overflow-x-auto pb-20">
            <AdminHeader />
                
            <span className="p-float-label mx-3 mt-5">
                <InputText id="username" ref={subject} className="w-full"/>
                <label htmlFor="username">Asunto</label>
            </span>

            <div className="mx-3 mt-3">
                <InputTextarea ref={textArea} rows={20} cols={30} autoResize  className="w-full"/>
            </div>

            <div className="absolute bottom-0">
                <GeneralButton text="ENVIAR ANUNCIO"/>
            </div>
        </div>
        </>
    )
}

export default AdminAdds