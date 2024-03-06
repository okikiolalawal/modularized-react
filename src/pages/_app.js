// import '@/styles/globals.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import reduxreducer from "@/redux/reduxreducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {reduxreducer}
})
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
  <Component {...pageProps} />
    </Provider>
  )
}
