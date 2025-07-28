import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";


const Skills = () => {
  return (
    <section className="skills-section">

        <img src="https://th.bing.com/th/id/OIP.g7J-f7bMgDNXoXNGVMV7WwHaKv?w=119&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="react-icon" />
        <img src="https://th.bing.com/th/id/OIP.tKqvz1RRkROzlW9JFuH5nwHaHW?w=177&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="btc-icon" />
        <img src={eth} alt="eth-icon" />
        <img src={truffle} alt="truffle-icon" />
        <img src={gns} alt="gns-icon" />
        <img src={polygon} alt="polygon-icon" />
        <img src={node} alt="node-icon" />
    </section>
  )
}

export default Skills
