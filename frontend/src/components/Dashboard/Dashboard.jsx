import React from "react";
import "./css/Dashboard.css";
import Card from "../Card";
import pic from "../../assets/icons/user.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <form action="" className="post">
        <h1 className="head">Share</h1>

        <textarea
          id="post"
          name="textarea"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your idea"
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
        ></textarea>
        <button type="submit">Post</button>
      </form>
      <div className="my-posts">
        <h1 className="heading" id="posts">
          My Posts
        </h1>
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
    </div>
  );
}

export default Dashboard;
