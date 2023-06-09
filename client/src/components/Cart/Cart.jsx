import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPO6cSGvXUaAhqRpsl_HYUV_2L_lxlj4ZGtMGd8rolDukZ7ebHA1LgGvWgoKxvjY-fMLU&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oMUzo_4g-TYMJZsfVTwIFL2t5iZvLqEz7_dw6qIzWysA1LBEGkBNil23MaL5ZT0gBiQ&usqp=CAU",
      title: "women 1",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
      desc: "nrw clomkaslvmkoawneg ajsd jwavldwVLDA",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4ZgFkSs8z0knYRr4B-QzgqIOgOeEwl7VB-4fIQW0QjX3F7kcbw02Qanr0H8tABXxNYA&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-Vr9GfisMHmD6sCDb3JuxDc2wiovbnKr-sogm69QI3xg3ErqTMkvTBmNy7UJMGJDNoU&usqp=CAU",
      title: "women 2",
      isNew: true,
      oldPrice: 25,
      desc: "nrw clomkaslvmkoawneg ajsd jwavldwVLDA",
      newPrice: 22,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 X {item.newPrice}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
