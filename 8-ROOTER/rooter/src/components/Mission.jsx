import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mission() {
  const navigate = useNavigate();

  return (
    <>
      <div>Mission</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home a git
      </button>
    </>
  );
}
