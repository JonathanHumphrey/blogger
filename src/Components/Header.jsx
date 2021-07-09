import React from "react";

import scss from "./header.module.scss";

export default function Header() {
    return (
        <div className={scss["headerContainer"]}>
            <div className={scss['title']}>
                <h1>Title</h1>
            </div>
            <div className={scss['navbar']}>
                <ul className={scss['navList']}>
                    <button
                        className={scss["navBarLink"]}
                        type='button'
                    >Button
                    </button>
                    <button
                        className={scss["navBarLink"]}
                        type='button'
                    >Button
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
