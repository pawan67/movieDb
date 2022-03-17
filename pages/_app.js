import { Provider } from "react-redux";
import { UserContextProvider } from "../context/userContext";
import { store } from "../features/store";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false}>
      <UserContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
