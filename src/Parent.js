import { useState } from "react";
import LoginForm from "./LoginForm";

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Lifting State Up Example</h1>

      {isLoggedIn ? (
        <h2>Welcome User ✅</h2>
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