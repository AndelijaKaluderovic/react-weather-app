import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/andjelija-kaludjerovic/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Andelija Kaluderovic
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/AndelijaKaluderovic/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
