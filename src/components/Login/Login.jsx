import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section id="login-section">
      <div className="login-title">Log In</div>
      <form className="login-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input className="submit-btn" type="submit" value="Log In" />
      </form>
      <div className="login-sent">
        Don&#39;t have an account?<Link to="/sign-up"> Sign Up!</Link>
      </div>
    </section>
  );
};

export default Login;
