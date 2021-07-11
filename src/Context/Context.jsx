import React, { createContext, useState, useEffect } from 'react'

export const appContext = createContext()
const Context = ({ children }) =>{

    //const [userModal, setUserModal] = useState(false)
    const [show, setShow] = useState(false)
        
    useEffect(() => {

    }, [])
    return (
        <appContext.Provider
            value={{
                show: show,
                setShow: setShow,
                
            }}
        >
            {children}
        </appContext.Provider>
    )
}
export default Context