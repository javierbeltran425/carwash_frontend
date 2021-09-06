import UserHeader from '../../Components/UserHeader'
import GeneralButton from '../../Components/GeneralButton'

const Services = () =>{
    return(
        <>
            <div className="flex w-screen h-screen bg-gray-900">
                <UserHeader />

                
                <div className="absolute w-full bottom-0">
                    <GeneralButton text="PROGRAMAR SERVICIO"/>
                </div>
            </div>
        </>
    )
}

export default Services