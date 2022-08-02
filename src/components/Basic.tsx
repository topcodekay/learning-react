import "./Basic.css";

function Basic(): string {
  return (
    <div className="container">
      <div className="sub_container">
        <div className="header">
          <h2>Hi there, Welcome</h2>
          <p>Login to access your dashboard</p>
        </div>
        <div className="main-body">
          <label for="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="main-body">
          <label for="pwd"></label>
          <input type="password" id="pwd" name="pwd" placeholder="Password" />
        </div>
        <div className="main-body">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        <span className="main-body">
          Dont have account with us?{" "}
          <button className="button">Sign up now</button>
        </span>
      </div>
    </div>
  );
}

export default Basic;
