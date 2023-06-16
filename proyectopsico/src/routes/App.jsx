import React from 'react';
import Layout from '../containers/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Raven from '../pages/Raven';
const App = () => {
  const initialState = useInitialState();

  return(
      <AppContext.Provider value={initialState}>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route path="/Raven" element={<Raven/>}/>
                  </Routes>
              </Layout>
          </BrowserRouter>
      </AppContext.Provider>


      
  );
}

export default App;