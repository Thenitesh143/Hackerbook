import React from "react";
import reload from "../../assets/reload.png";

const Cards = () => {
  return (
    <div
      className="cardsz"
      style={{
        padding: "20px",
        boxShadow: " 0px 3px 6px 0px rgb(0 0 0 / 16%)",
        width: "49%",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      <img
        src={reload}
        alt=""
        className="icon-cardsz"
        style={{ width: "50px" }}
      />
      <p>
        <b> On - demand Courses </b>
      </p>
      <p className="grey-text">
        We offer courses such as: Software Development, Web Development, Mobile
        Development, App Development, and QA Testing.{" "}
      </p>
    </div>
  );
};

export default Cards;
