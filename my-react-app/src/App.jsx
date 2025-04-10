import Header from "./components/Header";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Welcome name="Hildah" title="software engineer"/>

      </main>
    </div>
  )
}

export default App