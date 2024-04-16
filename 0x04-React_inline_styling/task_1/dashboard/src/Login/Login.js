import React from 'react';
import { StyleSheet, css } from "aphrodite";

function Login() {
    return (
        <main role='main' className={css(styles.login)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className={css(styles.loginInput)} />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' className={css(styles.loginInput)} />
            <button type='button'>OK</button>
        </main>
    );
}

const styles = StyleSheet.create({
    login: {
        margin: "50px",
        flexGrow: 1,
    },

    loginInput: {
        marginLeft: "10px",
        marginRight: "20px",
    },
});

export default Login;