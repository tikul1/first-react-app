import "./App.css";
import Navbar from "./compnents/Navbar";
import TextForm from "./compnents/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="Abous Us" />
      <div className="container">
        <TextForm heading="Enter the text to analyze." />
      </div>
    </>
  );
}

export default App;
