import css from "styled-jsx/css";
import Navbar from "./Navbar";

const style = css`
  .container {
    width: 60%;
    height: 100vh;
    margin: 0 auto;
    border: 1px solid black;
  }
  .card_box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 10px;
  }
`;

const Layout = ({ children }) => {
  return (
    <section className="container">
      <Navbar />
      <div className="card_box">{children}</div>
      <style jsx>{style}</style>
    </section>
  );
};

export default Layout;
