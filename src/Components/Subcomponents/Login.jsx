import React from "react";

import scss from "./login.module.scss";

export default function Login() {
	return (
		<div className={scss['container']}>
            <div className={scss['form']}>
                <br/>
                <form>
                    <p>Email: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='email'
                        placeholder='Email'
                    />
                    <p>Password: </p>
                    <input
                        className={scss['formField']}
                        type='password'
                        name='password'
                    />
                    <input
                        type='submit'
                    />
                </form>
            </div>
        </div>
	);
}
