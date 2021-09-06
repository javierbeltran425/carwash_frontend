import { useHistory } from 'react-router-dom'

const SimpleButton = ({ text }) => {
    const history = useHistory()

    return(
        <button className="text-white font-bold bg-gradient-to-b from-purple-900 
                            via-purple-800 to-pink-900 max-w-max p-2 rounded-lg"
                onClick={e => {
                    e.preventDefault()
                    history.push('/home')
                }}                    
        >
            {text}
        </button>
    )
}

export default SimpleButton