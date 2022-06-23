import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <section>
                <div className="auth">
                    <h2>Login</h2>
                    <form action="">
                        <input name="name" id="name"  placeholder="Username" type="text"/>
                        <input name="password" id="password" required placeholder="Password" type="text"/>
                        <p>Forgot Password</p>
                        <button type="submit">Login</button>
                    </form>
                    <p className="login-message">Not a member? <span>Sign Up</span></p>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    )
}

export default Login