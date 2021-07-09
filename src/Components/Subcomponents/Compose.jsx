import React from 'react'

import scss from './compose.module.scss'

export default function Compose() {
    return (
        <div className={scss['compose']}>
            <form>
                <h3>Write a post!</h3>
                <textArea
                    className={scss['textArea']}
                    type='text'
                    maxLength='140'
                >
                </textArea>
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
        </div>
    )
}
