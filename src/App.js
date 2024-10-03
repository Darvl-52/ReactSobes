import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/home";
import SinglePage from "./components/singlePage/singlePage";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={ <Layout/> }>
                  <Route index element={ <Home/> } />
                  <Route path='user/:id' element={<SinglePage/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
