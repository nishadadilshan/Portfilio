import HomeScreen from "./components/screen/HomeScreen";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
