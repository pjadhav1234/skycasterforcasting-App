import React from "react";
import { FaArrowDown,FaArrowUp,FaWind } from "react-icons/fa";
import "./description.css";
import { BiHappy } from "react-icons/bi";
import { MdCompress,MdOutlineWaterDrop } from "react-icons/md";

const Description=({weather,units})=> {
  const tempUnit = units==="metric"?"°C":"°F"
     const windUnit = units ==='metric'?'m/s':'m/h'
const cards=[
     
    {
        id:1,
        icon: <FaArrowDown/>,
        title: "min",
        data:weather.temp_min.toFixed(),
        unit:tempUnit,
    },
    {
        id:2,
        icon: <FaArrowUp/>,
        title: "max",
        data:weather.temp_min.toFixed(),
        unit:tempUnit,
    },
    {
        id:3,
        icon: <BiHappy/>,
        title: "feels like",
        data:weather.feels_like.toFixed(),
        unit:tempUnit,
    },
    {
        id:4,
        icon: <MdCompress/>,
        title: "pressure",
        data:weather.pressure.toFixed(),
        unit:"hPa",
    },
    {
        id:5,
        icon: <MdOutlineWaterDrop/>,
        title: "humidity",
        data:weather.humidity.toFixed(),
        unit:"%",
    },
    {
        id:6,
        icon: <FaWind/>,
        title: "wind",
        data:weather.speed.toFixed(),
        unit: windUnit,
    },
];



  return (
    <div className="section section-descriptions">
        {cards.map(({id,icon,title,data,unit})=>(

       
      <div key={id} className="card" style={{width:'100'}}>
        <div
          className="description-card-icon "
         
        >
        {icon}
          <small>{title}</small>
        </div>
        <h2>{`${data} ${unit}`}</h2>
      </div>
        ))}
    </div>
  );
}

export default Description;


