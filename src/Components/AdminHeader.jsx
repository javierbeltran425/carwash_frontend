import { useHistory } from 'react-router-dom'

const AdminHeader = () => {
    const history = useHistory()

    return(
        <header className="relative bg-purple-800 h-10 rounded-full m-3 bg-transparent">
            <ul className="flex flex-row justify-around text-white font-bold">
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/sells')
                    }}
                >Ventas</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/clients')
                    }}
                >Clientes</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/adds')
                    }}
                >Anuncios</li>
                <li className="p-2 hover:text-purple-400 hover:bg-white rounded-full"
                    onClick={e => {
                        e.preventDefault()
                        history.push('/admin-services')
                    }}
                >Servicios</li>
            </ul>
        </header>
    )
}

export default AdminHeader