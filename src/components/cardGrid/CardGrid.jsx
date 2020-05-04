import React from "react";
import PropTypes from "prop-types";
import "./cardGrid.css";
import Card from "../card";

const CardGrid = () => {
  return (
    <div className="grid">
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
        <Card
          content="(._.) ( l: ) ( .-. ) ( :l ) (._.)"
          size={15}
          price={4}
          date="2 Days Ago"
        />
        <Card
          content="┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴"
          size={18}
          price={4}
          date="2 Days Ago"
        />
        <Card
          content="(۶ૈ ۜ ᵒ̌▱๋ᵒ̌ )۶ૈ=͟͟͞͞ ⌨"
          size={30}
          price={4}
          date="2 Days Ago"
        />
        <Card content="ᕙ༼ຈل͜ຈ༽ᕗ" size={25} price={4} date="2 Days Ago" />
        <Card content="ᶘ ᵒᴥᵒᶅ" size={39} price={4} date="2 Days Ago" />
        <Card content="⊙▃⊙" size={27} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={28} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={25} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={24} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={27} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={22} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={19} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={18} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
        <Card content="( ° ͜ʖ °)" size={39} price={4} date="2 Days Ago" />
      </div>
    </div>
  );
};

CardGrid.propTypes = {};
export default CardGrid;
