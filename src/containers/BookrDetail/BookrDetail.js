import React, { Component } from "react";
import "./BookrDetail.scss";
export default class BookrDetail extends Component {
  render() {
    return (
      <div className="BookrDetail">
        <div className="BookrDetail_Banner">
          <img src="https://i.stack.imgur.com/miPgq.jpg" alt="" />{" "}
        </div>
        <div className="BookrDetail_Section_1">
          <div>
            <img
              src="https://media-assets.bookbub.com/wp-content/uploads/2016/01/81oKn3X59mL.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>False Step </h2>
            <p>by Victoria Helen</p>
            <br/>
            <br/>
            <br/>
            <p>
              For days, all of Denver, Colorado, has worried over the fate of a
              missing child, little Tanner Holcomb. Then, a miracle: handsome,
              athletic Johnny Bradley finds him, frightened but unharmed, on a
              hiking trail miles from his wealthy family’s mountain home. In a
              heartbeat, his rescuer goes from financially strapped fitness
              trainer to celebrated hero. The heat of the spotlight may prove
              too much for Johnny’s picture-perfect family, however. His wife,
              Veronica, despises the pressure of the sudden fame, afraid that
              secrets and bitter resentments of her marriage may come to light.
              And she’s willing to do anything to keep them hidden. But when a
              shocking revelation exposes an even darker side to Tanner’s
              disappearance, Veronica realizes that nothing in her life can be
              trusted. And everything should be feared.
            </p>
          </div>
          <div>
          <p> Editor Published: <small> Lorem ipsum dolor sit amet.</small></p>
          <p> ISBN: <small> Lorem ipsum dolor sit amet.</small></p>
          <p> Editorial Language: <small> Lorem ipsum dolor sit amet.</small></p>
          </div>
        </div>
        <div className='star_review'> hi</div>
      </div>
    );
  }
}
