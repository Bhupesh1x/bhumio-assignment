import "./App.css";
import { FamilyDetailsContainer, SideBar } from "./components";
import { SelectionContext, TreeStateContext } from "./contexts";

function App() {
  return (
    <div id="App">
      <TreeStateContext>
        <SelectionContext>
          <SideBar />
          <FamilyDetailsContainer />
        </SelectionContext>
      </TreeStateContext>
    </div>
  );
}

export default App;
