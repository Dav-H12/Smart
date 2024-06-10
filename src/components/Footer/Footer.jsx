import React from "react";
import { Dasntacavarner } from "../../Db";
import Button from "../Button/Button";
import "./Footer.css";
const Footer = ({TrainersRef,AboutusRef}) => {
  return (
    <div className="footer">
      <div className="trainers" ref={TrainersRef}>
        <p className="e">
          <b>Դասընթացավարներ</b>
        </p>
        <p className="t">
          {" "}
          Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող <br />
          <i className="it">ինֆորմացիան բավականին պարզեցված տեսքով:</i>
        </p>
        <div className="trainerstrainers">
          {Dasntacavarner.map((D) => {
            return (
              <div className="trainer">
                <img src={D.image} className="imgtrain" />
                <p className="orange">{D.name}</p>
                <p className="tich">{D.tich}</p>
                <p>{D.role}</p>
              </div>
            );
          })}
        </div>
        <div className="bu">
          {" "}
          <Button />
        </div>
      </div>
      <div className="usabout" ref={AboutusRef}>
        <p className="g">
          Մեր <b>մասին</b>
        </p>
        <p className="v">Ընկերության գործունեության մասին</p>
        <div className="textandimg">
          <div className="text">
            <p className="t5">
              SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 8 տարի է <br />
              կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ <br />
              ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ: <br />
            </p>
            <p className="t6">
              Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և <br />
              կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի <br />
              արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ <br />
              մասնագետների աշխատանքի արդյունքում մենք վայելում ենք մեր <br />
              ուսանողների սերն ու վստահությունը:
            </p>
            <p className="t7">
              Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում <br />
              SmartCode-ի օգնությամբ:
            </p>
          </div>
          <div className="imgright">
            <img src="https://smartcode.am/public/image/per3.svg"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
