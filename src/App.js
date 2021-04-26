import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/andjelija-kaludjerovic/"
            target="_blank"
          >
            {" "}
            Andelija Kaluderovic
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/AndelijaKaluderovic/react-weather-app"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
