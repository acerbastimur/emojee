import React, { Component } from "react";
import "./cardGrid.css";
import Card from "../card";
import SortBox from "../sortBox";
import { observer, inject } from "mobx-react";

class CardGrid extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="grid">
        <div className="grid__search-container">
          <span className="grid__search-container_text">Sort by</span>
          <SortBox />
        </div>
        <div className="grid__items-container">
          <Card
            content="༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽"
            size={12}
            price={4}
            date="2 Days Ago"
          />
          <Card
            content="(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)"
            size={12}
            price={4}
            date="2 Days Ago"
          />

          <Card content="ᕙ༼ຈل͜ຈ༽ᕗ" size={25} price={4} date="2 Days Ago" />
          <Card content="ᶘ ᵒᴥᵒᶅ" size={39} price={4} date="2 Days Ago" />
          <Card content="⊙▃⊙" size={27} price={4} date="2 Days Ago" />
          <Card content="( ° ͜ʖ °)" size={28} price={4} date="2 Days Ago" />
        </div>
      </div>
    );
  }
}

export default inject("CardStore")(observer(CardGrid));
