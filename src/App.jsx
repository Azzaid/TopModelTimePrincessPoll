import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";

import MainLayout from "Layouts/MainLayout/MainLayout";
import GlobalModalProvider from "HOC/GlobalModalProvider";
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider";

class App extends React.Component {
  render () {
    return (
      <GlobalStoreProvider>
        <HashRouter>
          <GlobalThemeProvider>
            <GlobalModalProvider>
              <MainLayout/>
            </GlobalModalProvider>
          </GlobalThemeProvider>
        </HashRouter>
      </GlobalStoreProvider>
    )
  }
}

export default App;