import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <p className="w-full text-center text-red-600 font-bold">-- CE SITE EST ACTUELLEMENT EN COURS DE DÉVELOPPEMENT --</p>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;