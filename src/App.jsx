import TemporaryDrawer from "./components/Drawer";
import AppNavbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./pages/Home"
import Starred from "./pages/Starred"
import Archive from "./pages/Archive"
import Bin from "./pages/Bin"
import {Routes,Route} from "react-router-dom"
function App() {
  const pages = ["Home", "Starred","Archive","Bin"];
  return (
    <>
      <AppNavbar>
        <TemporaryDrawer pages={pages}/>
      </AppNavbar>
      <SideBar pages={pages}/>
      <main className="p-7 pt-19 w-full md:ml-64 md:w-[calc(100%-16rem)] h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/bin" element={<Bin />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
 