import React, {useContext} from "react";

// Style Import
import scss from './body.module.scss'

// Component Imports
import Compose from './Subcomponents/Compose'
import Feed from './Subcomponents/Feed'
import UserModal from "./UserModal";

// Context Import
import { appContext } from "../Context/Context";

export default function Body() {
    const { show } = useContext(appContext)
    return (
        
        <div className={scss['container']}>
            <Compose />
            <Feed />
            {show ? 
                <UserModal />
                :null
            }
        </div>
    )
}
