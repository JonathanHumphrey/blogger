import React from 'react'

// Style Import
import scss from './body.module.scss'

// Component Imports
import Compose from './Subcomponents/Compose'
import Feed from './Subcomponents/Feed'

export default function Body() {
    return (
        <div className={scss['container']}>
            <Compose />
            <Feed />
        </div>
    )
}
