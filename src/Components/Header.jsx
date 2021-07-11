import React, { useState, useContext } from "react";
// Style import
import scss from "./header.module.scss";
// Context Import 
import { appContext } from "../Context/Context";

export default function Header() {

    //const { userModal } = useContext(appContext);
    const { setShow } = useContext(appContext);
    //const [show, setShow] = useState(false)
    return (
        <div className={scss["headerContainer"]}>
            <div className={scss['title']}>
                <h1>Title</h1>
            </div>
            <div className={scss['navbar']}>
                <ul className={scss['navList']}>
                    <button
                        className={scss["navBarLink"]}
                        onClick={() => setShow(true)}
                        type='button'
                    >Log In
                    </button>
                    <button
                        className={scss["navBarLink"]}
                        onClick={() => setShow(true)}
                        type='button'
                    >Register
                    </button>
                    <button
                        className={scss["navBarLink"]}
                        type='button'
                    >Button
                    </button>
                </ul>
            </div>
        </div>
    )
}
