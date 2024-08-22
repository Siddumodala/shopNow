import React, { useContext } from "react";
import { shopContext } from "../Context/shopContext";
import staricon from "../Components/Assets/star_icon.png";
import stardull from "../Components/Assets/star_dull_icon.png";
const ProductView = () => {
  const { preview } = useContext(shopContext);
  return (
    <>
      <div style={{display:"flex",marginLeft:"10px",}}>
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <img src={preview.image} alt="img" style={{width:"100px"}} />
            <img src={preview.image} alt="img" style={{width:"100px"}} />
            <img src={preview.image} alt="img" style={{width:"100px"}} />
            <img src={preview.image} alt="img" style={{width:"100px"}} />
        </div>
        <img src={preview.image} style={{width:"400px",marginLeft:"10px",marginRight:"20px"}} />
        <div>
            <h1 style={{paddingBottom:"10px"}}>{preview.name}</h1>
            <img src={staricon} alt="img"/>
            <img src={staricon} alt="img"/>
            <img src={staricon} alt="img"/>
            <img src={staricon} alt="img"/>
            <img src={stardull} alt="img"/>
            <h3 style={{marginTop:"10px"}}>Price:$82</h3>
            <h3 style={{marginTop:"20px"}}>Select Size</h3>
            <div style={{marginTop:"10px"}}>
                <button style={{width:"35px",height:"30px",marginRight:"10px"}}>S</button>
                <button style={{width:"35px",height:"30px",marginRight:"10px"}}>M</button>
                <button style={{width:"35px",height:"30px",marginRight:"10px"}}>L</button>
                <button style={{width:"35px",height:"30px"}}>XL</button>
            </div>
            <div>
                <button style={{marginTop:"20px",width:"150px",height:"40px",backgroundColor:"red",color:"white"}}>Add To Cart</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;