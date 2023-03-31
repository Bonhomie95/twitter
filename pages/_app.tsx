import Layout from '../components/Layout';
// import Modal from '../components/Modal';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Modal actionLabel="Submit" isOpen title="Test Modal" /> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
