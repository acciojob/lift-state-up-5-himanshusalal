import { useState } from "react";
import LoginForm from "./LoginForm";

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Login form</h1>

      {isLoggedIn ? (
        <h2>User Logged In ✅</h2>
      ) : (
        <LoginForm
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default Parent;