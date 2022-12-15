import '../styles/globals.css'
import {Layout} from '../src/components'
import {StateContext} from '../src/context/StateContext'
import { Toaster } from "react-hot-toast";


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp
