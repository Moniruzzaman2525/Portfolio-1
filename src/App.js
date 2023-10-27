import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/Layout/Layout';
import 'remixicon/fonts/remixicon.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Item from './components/Project/Item';
import Item1 from './components/Project/Item1';
import Item2 from './components/Project/Item2';
import CustomCursor from './components/Cursor/CustomCursor';

function App() {
  return <div>

    <Routes>
      <Route path='/' element={<Layout />}></Route>
      <Route path='/item' element={<Item></Item>}></Route>
      <Route path='/item1' element={<Item1 />}></Route>
      <Route path='/item2' element={<Item2 />}></Route>
    </Routes>
    <CustomCursor />
  </div>
}

export default App;
