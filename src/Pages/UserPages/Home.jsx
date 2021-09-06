import UserHeader from "../../Components/UserHeader"
import GeneralButton from '../../Components/GeneralButton'

const Home = () =>{
    return(
        <>
            <div className="flex w-screen h-screen bg-gray-900">
                <UserHeader />


                <div className="absolute bottom-0">
                    <GeneralButton text="SOLICITAR SERVICIOS"/>
                </div>
            </div>
        </>
    )
}

export default Home