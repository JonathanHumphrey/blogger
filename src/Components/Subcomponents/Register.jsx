import React from 'react'
import scss from './register.module.scss';


export default function Register() {
    return (
        <div className={scss['container']}>
            <div className={scss['form']}>
                <br/>
                <form>
                    <p>First Name: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='firstname'
                        placeholder='First Name'
                    />
                    <p>Last Name: </p>
                    <input
                        className={scss['formField']}
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                    />
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
    )
}
