import css from "styled-jsx/css";
import Link from "next/link";

const style = css`
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    height: 100%;
    font-size: 20px;
    font-weight: 800;
    margin-right: 10px;
  }
`;

const navData = [
  { id: 0, text: "카드 맞추기", href: "/" },
  { id: 1, text: "카드 순서 맞추기", href: "/Order" },
];

const Navbar = () => {
  return (
    <div className="container">
      {navData.map((item, index) => (
        <Link key={index} href={item.href}>
          <a id={item.id}>{item.text}</a>
        </Link>
      ))}

      <style jsx>{style}</style>
    </div>
  );
};

export default Navbar;
