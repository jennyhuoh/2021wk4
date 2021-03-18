import { useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
import AddToCart from "./AddToCart"

const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
   const [size, setSize] = useState("小");
   let sizePrice = 1;
   if(size == "大") sizePrice = 2;
    
   return (
      <Row gutter={[32, 32]}>
        <Col 
          lg={{ span: 8, offset: 2 }}
        >
         <img
            alt=""
            className="product-image"
            src={product.image}
         />           
        </Col>
        <Col 
          lg={{ span: 12 }}
        >
         <div className="product-info--detail">
            <h2 className="product-category">
               {product.category}
            </h2>
            <h1 className="product-name product-name--large">
               {product.name}
            </h1>
            <p className="product-description">{product.description_long}</p>
            <div className="product-price-wrap">
               <p className="product-price product-price--large">
                  US${product.price}.00
               </p>
               <p className="product-status">
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
               </p>
               <Row>
                  <Col span={8}>
                     <p className="product-qty">
                        Qty :  {"   "}
                        <Select 
                           defaultValue={qty} 
                           className="select-style"
                           onChange={val=>setQty(val)}>
                           {[...Array(product.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                              {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </p>
                  </Col>
                  <Col span={16}>
                     <p className="product-qty">
                        尺寸 :  {"   "}
                        <Select 
                           defaultValue={size}
                           className="select-style"
                           onChange={value => setSize(value)}>
                           <Option value="大">大</Option>
                           <Option value="小">小</Option>

                        </Select>
                     </p>
                  </Col>
               </Row>
               <p className="product-qty">
                  Total Price: {product.price * qty * sizePrice}, {size}
               </p>               
               <AddToCart />
            </div>
         </div>           
        </Col>
      </Row>
   );
}

export default ProductDetail;