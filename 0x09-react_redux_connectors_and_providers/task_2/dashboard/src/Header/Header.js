import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

function Header() {
    const { user, logOut } = useContext(AppContext);

    return (
        <>
            <header className={css(styles.header)}>
                <img src={logo} className={css(styles.headerImg)} alt="logo" />
                <h1>School dashboard</h1>
            </header>

            {user.isLoggedIn && (
                <section className={css(styles.greeting)} id="logoutSection">
                    Welcome<strong> {user.email} </strong>
                    <em>
                        <a href="#" onClick={logOut}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
        </>
    );
}

const cssVars = {
    mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        color: cssVars.mainColor,
        fontSize: "20px",
    },

    headerImg: {
        width: "200px",
    },
});

export default Header;