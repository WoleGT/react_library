import  "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Hobbie from "./components/Hobbie";
import Whatido from "./components/Whatido";
import Counter from "./components/Counter";
import ParentComponent from "./components/Props/ParentComponent";
function App() {
  return (
    <>
      <h2>State</h2>
      <Counter/>
      <ParentComponent/>
      {/* <p className='App'>This is my first react app</p>
      <Header />
      <Name />
      <Hobbie />
      <Whatido /> */}
    </>
  );
}

export default App;