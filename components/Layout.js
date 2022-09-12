import css from "styled-jsx/css";
import Navbar from "./Navbar";

const style = css`
  .container {
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid black;
  }
`;

const Layout = ({ children }) => {
  return (
    <section className="container">
      <Navbar />
      {children}
      <style jsx>{style}</style>
    </section>
  );
};

export default Layout;
