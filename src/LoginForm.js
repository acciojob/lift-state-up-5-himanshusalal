function LoginForm({ isLoggedIn, handleLogin }) {

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin();
  };

  return (
    <div>
      {!isLoggedIn && (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Username"
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <br />
          <br />

          <button type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;