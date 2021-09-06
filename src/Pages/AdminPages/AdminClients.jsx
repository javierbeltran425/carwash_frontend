import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';

import AdminHeader from "../../Components/AdminHeader"

const AdminClients = () => {
    const search = useRef(null)
    return(
        <>
            <div className="flex flex-col w-screen h-screen bg-gray-900">
                <AdminHeader />
                
                <span className="p-input-icon-left mx-3">
                    <i className="pi pi-search" />
                    <InputText ref={search} placeholder="Search" className="w-full" />
                </span>
                <div className="flex flex-row w-full justify-end mt-2">
                    <button className="mx-3 border rounded bg-purple-200 text-black font-bold
                    px-1">Buscar</button>
                </div>

                                
            </div>
        </>
    )
}

export default AdminClients