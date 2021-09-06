import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';

import AdminHeader from "../../Components/AdminHeader"

const AdminSell = () => {
    const search = useRef(null)
    return(
        <>
            <div className="flex flex-col w-screen h-screen bg-gray-900">
                <AdminHeader />
                
               
                <div className="absolute flex justify-around grid-cols-3 gap-4 justify-center items-center bottom-0 w-screen h-32 bg-gray-800 rounded-t-3xl">
                   <div className="flex flex-col items-center w-full">
                        <h3 className="text-white font-extrabold text-md">VENTAS</h3>
                        <p className="text-green-500 text-2xl">$8</p>
                   </div>
                   <div className="flex flex-col items-center w-full">
                        <h3 className="text-white font-extrabold text-md">COSTOS</h3>
                        <p className="text-red-600 text-2xl">$4</p>
                   </div>
                   <div className="flex flex-col items-center w-full">
                        <h3 className="text-white font-extrabold text-md">GANANCIAS</h3>
                        <p className="text-green-500 text-2xl">$4</p>
                   </div>
                </div>
                                
            </div>
        </>
    )
}

export default AdminSell