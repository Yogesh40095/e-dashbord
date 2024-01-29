import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductList = ()=>{
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        getProducts()
    },[])
    const getProducts=async()=>{
        let result =await fetch('http://localhost:5000/products',{
            headers:{
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async(id)=>{
        let result =await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete",
            headers:{
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        if(result){
            alert("record is deleted");
            getProducts();
        }
    }
    const searchPro = async(event)=>{
        let key = event.target.value;
        if(key){
            let result= await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
        result =await result.json();
        if(result){
            setProducts(result)
        }
        }else
        {
            getProducts()
        }
        
    }
    return(
        <div className="products">
            <p>Product lists</p>
            <input className="search" type="text" placeholder="search product" onChange={searchPro}/>
            <ul className="man">
                <li className="lia">S. No</li>
                <li className="lia">Name</li>
                <li className="lia">Price</li>
                <li className="lia">Category</li>
                <li className="lia">Operation</li>
              
            </ul>
          {
            products.length>0 ? products.map((item,index)=>
            <ul key={item._id}>
                <li className="lia">{index+1}</li>
                <li className="lia">{item.name}</li>
                <li className="lia">{item.price}</li>
                <li className="lia">{item.category}</li>
                <li className="lia"><button onClick={()=>deleteProduct(item._id)} className="dbtn">Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
            </ul>
            )
            : <h1>No result found</h1>
          }
        </div>
    )
}
export default ProductList;