function Signup(props) {
    return (
        <>
            <button>{props.isLoggedIn ? "Logout" : "Signup"}</button>
            {props.showForgotPassword && <a href="">Forgot Password</a>}
        </>
    );
}

export default Signup;