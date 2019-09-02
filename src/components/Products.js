import React,{Component} from 'react';
import AlertDialog from './AlertDialog';
import './css/Product.css';

class Products extends Component{
  render(){
    var items = [
      {
        id:1,
        nameItem: "Samsung s8+",
        price: 20000000,
        status : true,
        image: "data:image/jpeg;base64,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"
      },
      {
        id:2,
        nameItem: "Iphone s6+",
        price: 20000000,
        status : false,
        image:"https://salt.tikicdn.com/cache/550x550/ts/product/b5/e4/10/90375518604b6972d727430c3bef8a24.jpg"
      },
      {
        id:3,
        nameItem: "Oppo f1",
        price: 1600000,
        status : true,
        image:"https://xdamobile.vn/images/201808/goods_img/163-g-op-xda01.jpg"
      }
    ]
   
      let element1= items.map((items,index)=>{
        return <tr>
                  <td scope="row"><img className="sizeImg" alt="" src={items.image}></img></td>
                  <td>{items.nameItem}</td>
                  <td>{items.price}</td>
                  <td> <AlertDialog name={items.nameItem}>
                  
                  </AlertDialog>

                      
                </td>
              </tr>
      })
    return(
      <div>
       <table className="table">
         <thead>
           <tr>
             <th>Hình ảnh</th>
             <th>Tên sản phẩm</th>
             <th> tiền </th>
           </tr>
         </thead>
         <tbody>
           {element1}
         </tbody>
       </table>
      </div>

    )
      
  }
};

export default Products;
