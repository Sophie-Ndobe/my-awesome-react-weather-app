import "./App.css";
import SearchCity from "./SearchCity";
import WeatherUpdate from "./WeatherUpdate";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="innerApp">
        <SearchCity />
        <WeatherUpdate />
      </div>
    </div>
  );
}

export default App;
