import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
  const dispatch = useDispatch()

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  const demoSignIn = () => {
    dispatch(
      login({
        displayName: "test",
        email: "test@test.test",
        photo: "https://codahosted.io/docs/IZn3UNbEOU/blobs/bl-137mEqTBzf/8e04b9feef4481efc0616766fb5547e099f3b5a7ecf18c5d6e1b03bbacdb9c9d74ac9f8cc0b5457d5ea1700a7cd5f866942616013c01cff01c2641e5ce293e4f9733859c5858dc1c3f1738355e8591ffd8fca9311e1e2283bb8ea449f5307c52c0dec951"
      })
    )
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a60c69b4-dbdc-49e3-b152-43bbdbfb0160/d6dy6qy-19e320f2-932f-4549-8050-2b7fb9289eda.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTYwYzY5YjQtZGJkYy00OWUzLWIxNTItNDNiYmRiZmIwMTYwXC9kNmR5NnF5LTE5ZTMyMGYyLTkzMmYtNDU0OS04MDUwLTJiN2ZiOTI4OWVkYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.AQSIo8n9g9HHLZFVdCwqbDOjFg9DwZI35LCTIuLgtEw"
          alt=""
        />
        <h1>kMessage</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
      <Button onClick={demoSignIn}>Demo Sign In</Button>
    </div>
  );
}

export default Login;
