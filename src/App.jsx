import { useState } from "react"
import "./App.css"
import explorer from "./data/folderData";
import Folder from "./components/Folder";
function App() {

const [explorerData, setExplorerData] = useState(explorer)

  return (
    <>
  <Folder explorer={explorerData}/>
    </>
  )
}

export default App
