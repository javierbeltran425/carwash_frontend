import { useHistory } from 'react-router-dom'

const UserHeader = () => {
    const history = useHistory()

    return(
        <header className="relative bg-purple-800 w-full h-10 rounded-full m-3 bg-transparent">
            <ul className="flex flex-row justify-around text-white font-bold">
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/home')
                    }}
                >Inicio</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/services')
                    }}
                >Servicios</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/vehicles')
                    }}
                >Tus vehículos</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/orders')
                    }}
                >Pedidos</li>
            </ul>
        </header>
    )
}

export default UserHeader