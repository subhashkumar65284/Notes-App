import './App.css';
import TemporaryDrawer from "./components/Drawer";
import AppNavbar from "./components/Navbar";
import SideBar from "./components/SideBar";
function App() {
  const pages = ["Home", "Starred","Archive","Bin"];
  return (
    <>
      <AppNavbar>
        <TemporaryDrawer pages={pages}/>
      </AppNavbar>
      <SideBar pages={pages}/>
    </>
  )
}

export default App;
 