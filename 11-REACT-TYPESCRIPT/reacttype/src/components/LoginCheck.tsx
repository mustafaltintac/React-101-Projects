import { useState } from "react";

type userType={
    name:string,
    email:string,
    phone:number
}

function LoginCheck() {
  const [user, setUser] = useState<userType | null >({} as userType );

  const handleLogin=()=>{
    setUser({
        name:"Mustafa",
        email:"mmusafa@mail.com",
        phone:346723432
    })
  }

  const handleOutLogin=()=>{
    setUser({} as userType)
  }

  return <div>
    <button onClick={handleLogin}>Giriş Yap</button>
    <button onClick={handleOutLogin}>Çıkış Yap</button>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>

  </div>;
}

export default LoginCheck;
