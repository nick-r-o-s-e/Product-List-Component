import "./App.scss";
import ListForm from "./components/ListForm/ListForm";
import { MOCK_DATA } from "./MockData";

function App() {
  return (
    <div className="container-main">
      <ListForm items={MOCK_DATA.items} />
    </div>
  );
}

export default App;
