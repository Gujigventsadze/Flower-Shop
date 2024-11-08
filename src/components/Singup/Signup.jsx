import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section id="login-section">
      <div className="login-title">Sign Up</div>
      <form className="login-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <input className="submit-btn" type="submit" value="Sign Up" />
      </form>
      <div className="login-sent">
        Have an account?<Link to="/login"> Log In!</Link>
      </div>
    </section>
  );
};
export default Signup;
