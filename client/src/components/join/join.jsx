import React, { useRef } from 'react'
import io from 'socket.io-client'

export default function Join({ setChatVisibility, setSocket }) {

    const userNameRef = useRef()

    const handleSubmit = async () => {
        const userName = userNameRef && userNameRef.current.value
        if(!userName.trim()) return
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', userName)
        setSocket(socket)
        setChatVisibility(true)
    }

    return (
        <div>
            <h1>Entrar</h1>
            <input type="text" ref={userNameRef} placeholder="Nome de Usuário"></input>
            <button onClick={() => handleSubmit()}>Entrar</button>
        </div>
    )
};