import Header from "./components/Header";
import Welcome from "./components/Welcome";
import './App.css'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Welcome name="Hildah" title="software engineer"/>

      </main>
    </div>
  )
}

export default App