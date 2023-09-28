import { useContext } from "react";
import AuthContext from "./context/Auth-context"

function Auth() {

  const { status,login } = useContext(AuthContext);

  return (
    <div>
      <p> TIKLAYINIZ</p>
      {status ? <p> çoktan </p> : <p> girmedim </p>}
      <button onClick={login}> TIKLA </button>

    </div>
  );
}

export default Auth;
