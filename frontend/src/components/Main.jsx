import React from "react";
import "./css/Main.css";
import Card from "./Card";
import pic from "../assets/icons/user.png";

function Main() {
  return (
    <div className="main">
      <Card
        profile={pic}
        likes="12"
        username={"Akhil Siraswal"}
        quote={
          "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”–"
        }
      />

      <Card
        profile={pic}
        likes="12"
        username={"Akhil Siraswal"}
        quote={
          "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”–"
        }
      />

      <Card
        profile={pic}
        likes="12"
        username={"Akhil Siraswal"}
        quote={
          "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”–"
        }
      />
    </div>
  );
}

export default Main;
