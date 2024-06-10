import React, { useState } from "react";
import Button from "../Button/Button";
import "./Section.css";
const Section = ({ lessons, why,lessonsRef,whyRef }) => {
  const countItem = 4;
  const [p, setP] = useState(lessons.slice(0, 4));
  const [classitem, setClassItem] = useState(0);
  const pageCount = lessons.lenght / countItem;
  const arr = [];

  for (let i = 1; i <= pageCount; i++) {
    arr.push(i);
  }

  const paginate = (page) => {
    setClassItem(page);

    if (page === 1) {
      let a = lessons.filter((el) => el.id <= 4);
      setP(a);
    }

    if (page === 2) {
      let a = lessons.filter((el) => el.id <= 10 && el.id > 4);
      setP(a);
    }

    if (page === 3) {
      let a = lessons.filter((el) => el.id <= 15 && el.id > 4);
      setP(a);
    }

    if (page === 4) {
      let a = lessons.filter((el) => el.id <= 20 && el.id > 4);
      setP(a);
    }
  };
  return (
    <div className="Section">
      <div className="Sectionfirstbox" ref={lessonsRef}>
        <div className="box">
          <p className="p1">
            Ծրագրավորման <b>դասընթացներ</b>
          </p>
          <p className="p2">
            Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար
          </p>

          {p.map((ell) => {
            return (
              <div className="lessonsbox">
                <img src={ell.image} className="i" />
                <p className="gp">{ell.title}</p>
                <p className="gpp">{ell.role}</p>
                <button className="red">{ell.button}</button>
                <div className="elelel">
                  <p>{ell.months}</p>
                  <p>{ell.howmuch}</p>
                </div>
              </div>
            );
          })}
          <div className="buttonbox">
            {arr.map((p, index) => (
              <button
                key={p}
                onClick={() => paginate(p)}
                className={p === classitem ? "a" : ""}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="imgbox">
          <img
            src="https://smartcode.am/public/image/per4.svg"
            className="mgp"
          />
        </div>
      </div>

      <div className="Sectionsecondbox" ref={whyRef}>
        <p className="p1 p">
          {" "}
          Ինչո՞ւ սովորել <b>մեզ մոտ</b>
        </p>
        <p className="p2 p">Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>

        <div className="Forboxis">
          <div className="imgboxsecond">
            <img src="https://smartcode.am/public/image/per2.svg" />
          </div>
          <div className="aboutus">
            {why.map((ab) => {
              return (
                <div className="mapdiv">
                  {/* <img src={ab.image} className='compimg'/> */}
                  <div>
                    <p className="p3">
                      <b>{ab.title}</b>
                    </p>
                    <p className="p4">{ab.aboutit}</p>
                  </div>
                  {/* <img src={ab.bottom} /> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="b">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Section;
