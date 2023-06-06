import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPO6cSGvXUaAhqRpsl_HYUV_2L_lxlj4ZGtMGd8rolDukZ7ebHA1LgGvWgoKxvjY-fMLU&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oMUzo_4g-TYMJZsfVTwIFL2t5iZvLqEz7_dw6qIzWysA1LBEGkBNil23MaL5ZT0gBiQ&usqp=CAU",
      title: "women 1",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4ZgFkSs8z0knYRr4B-QzgqIOgOeEwl7VB-4fIQW0QjX3F7kcbw02Qanr0H8tABXxNYA&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-Vr9GfisMHmD6sCDb3JuxDc2wiovbnKr-sogm69QI3xg3ErqTMkvTBmNy7UJMGJDNoU&usqp=CAU",
      title: "women 2",
      isNew: true,
      oldPrice: 25,
      newPrice: 22,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5ore86_EN_WFjFOreEZGhXOvwjGrewF1IvyyXM3e60BYigSexkCPV-tmzTeZFLGr0qA&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobRi438thWIS-HBEcDpbntjAMn8cz5n-YMDwrcJxNkTlSeVrktFgbI4fyPPemxNE6Hkc&usqp=CAU",
      title: "men 1",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVH6SmeZDM4tXOexedC-5ITMEvvbDwotMx3R3TyfcuQCp32HErO1xZSoFluQ_YEZ86II&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSel8d2LHPRKgFmuOIev6rbbX9lT1mATwhGA_GP_oZAjTbE1Ir7ZMF94dGuVm9Q20kc55o&usqp=CAU",
      title: "men 2",
      isNew: true,
      oldPrice: 25,
      newPrice: 22,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
