import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import CustomToaster from "./ui/CustomToaster";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import { MoviesProvider } from "./contexts/MoviesContext";
import { WatchedMoviesProvider } from "./contexts/WatchedMoviesContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />

      <MoviesProvider>
        <WatchedMoviesProvider>
          <AppLayout />
        </WatchedMoviesProvider>
      </MoviesProvider>

      <CustomToaster />
    </DarkModeProvider>
  );
}

export default App;
