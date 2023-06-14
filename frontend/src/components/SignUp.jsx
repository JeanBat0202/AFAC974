import { useState } from "react";
import "./SignUp.scss";

function SignUp() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmit, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      firstname: "Test",
      lastnae: "2",
      email: "test2@gmail.com",
      password: "pass1",
    },
    {
      firstname: "Test",
      lastnae: "61",
      email: "test.61@gmail.com",
      password: "pass2",
    },
  ];

  const errors = {
    firstname: "invalid firstname",
    lastname: "invalid lastname",
    email: "invalid emil",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  const handleChangeMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleChangeEmail = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleChangeFirstName = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const handleChangeLastName = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" required />
          {handleChangeFirstName("firstname")}
        </div>
        <div className="input-container">
          <label htmlFor="lastname">Nom </label>
          <input type="text" name="lastname" required />
          {handleChangeLastName("lastname")}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" required />
          {handleChangeEmail("email")}
        </div>
        <div className="input-container">
          <label htmlFor="password">Mot de passe </label>
          <input type="password" name="pass" required />
          {handleChangeMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit"> Enregistrer </button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">S'inscrire</div>
        {isSubmit ? <div>Votre compte a bien été enregistrer</div> : renderForm}
      </div>
    </div>
  );
}

export default SignUp;
