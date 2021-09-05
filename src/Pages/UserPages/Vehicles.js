import UserHeader from "../../Components/UserHeader"
import GeneralButton from "../../Components/GeneralButton"

const Vehicles = () => {
    return(
        <>
            <div className="flex w-screen h-screen bg-gray-900">
                <UserHeader />
                <div className="absolute flex flex-row bottom-0 w-screen h-52 bg-gray-800 rounded-t-3xl">
                    <div className="flex w-1/2 flex-col items-center">
                        <div className="flex flex-col mt-5 ml-4">
                            <label className="text-white font-bold">Modelo</label>
                            <input className="w-5/6 border rounded rounded-md focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                        </div>
                        <div className="flex flex-col mt-2 ml-4">
                            <label className="text-white font-bold">Placa</label>
                            <input className="w-5/6 border rounded rounded-md focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-col items-center">
                        <div className="flex flex-col mt-5 ml-4">
                            <label className="text-white font-bold">Color</label>
                            <input className="w-5/6 border rounded rounded-md focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none"/>
                        </div>
                    </div>
                </div>
                <div className="absolute w-full bottom-0">
                    <GeneralButton text="REGISTRAR NUEVO VEHICULO"/>
                </div>
            </div>
        </>
    )
}

export default Vehicles