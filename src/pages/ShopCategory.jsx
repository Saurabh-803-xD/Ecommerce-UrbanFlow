import React, { useContext } from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropDown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { allproduct } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allproduct.map((item,i)=>{
          if (props.category === item.category) {
            return (<Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />);
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
