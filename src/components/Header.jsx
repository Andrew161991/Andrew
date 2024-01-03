import { useState, useEffect } from 'react'
import logo from '/vite.svg'

export default function Header(){
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000)
        return() => {
            clearInterval(interval)
        }
    },[])
    return(
        <header>
            <p>
            <img src={logo} alt="Logo" />
            Hello from VITE
            </p>
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}