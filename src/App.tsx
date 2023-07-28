import Header from "./Components/Header";
import Output from "./Components/Output";
import classes from "./App.module.css";
import DataProvider from "./store/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className={classes.main}>
        <Header />
        <Output />
      </div>
    </DataProvider>
  );
}

export default App;
