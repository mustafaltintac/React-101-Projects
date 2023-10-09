import "./App.css";
import Events from "./components/Events";
import Headers from "./components/Header";
import Instructure from "./components/Instructure";
import InstructureList from "./components/InstructureList";
import LoginCheck from "./components/LoginCheck";
import Request from "./components/Request";


function App() {
  const instructure = {
    firstName: "Ali",
    lastName: "Çağatay",
  };

  const instructureList = [
    {
      firstName: "Mehmet",
      lastName: "Çağatay",
    },
    {
      firstName: "Veli",
      lastName: "Çağatay",
    },
    {
      firstName: "Gökhan",
      lastName: "Çağatay",
    },
    
  ]




  return (
    <div>
      <Headers name="React" rank={2} />
      <Instructure instructureTypeData={instructure}  />
      <InstructureList  InstructureListTypeData={instructureList}/>
      <Request status={"loading"}/>
      <Events/>
      <LoginCheck/>
    </div>
  );
}

export default App;
