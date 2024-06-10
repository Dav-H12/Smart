import React from "react";
import "./Header.css";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className="Header">
      <div>
      <p className="p1"><b>Սովորի՛ր</b> ծրագրավորում  <br />
         <b>Դարձի՛ր</b> պահանջված մասնագետ</p>
      <p className="p2">Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
      <Button/>
    </div>
      <img src="https://smartcode.am/public/image/header.svg" />
    </div>
  );
};

export default Header;
