import "./App.css";
import SearchMovie from "./SearchMovie";
import img from "../src/assets/snowflake.svg";

function App() {
  return (
    <div className="App">
      <div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
        <div class="snowflake">
          <img src={img} alt="rd" />
        </div>
      </div>
      <SearchMovie />
    </div>
  );
}

export default App;
