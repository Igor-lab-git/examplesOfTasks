import ToDo from "./components/ToDo";
import ContextTaskProvaider, {  } from "./context/ContextTaskProvaider";

const App = () => {
  console.log("App");
  
  return (
    <ContextTaskProvaider>
      <ToDo />
    </ContextTaskProvaider>
  );
};

export default App;
