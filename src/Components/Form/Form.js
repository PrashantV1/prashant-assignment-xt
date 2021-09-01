import React, { useState } from "react";
import "./Form.scss";
import Button from "../Button/Button";
import { setCurrentUser } from "../../redux/user/user.actions";
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


function Form({ className = "", button ,setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  const user={
    id:email
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(user)
  history.push("/");
  };

  return (
    <form
      className={`${className} form`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        type="email"
        className="floating-input"
        id="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        noValidate
      />

      <label className="floating-label">Email</label>
      <input
        type="password"
        className="floating-input"
        id="Password"
        placeholder="Password"
        name="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        noValidate
      />

      <label className="floating-label">Password</label>

      <Button className={"form__login-button"}               
>{button}</Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Form);
