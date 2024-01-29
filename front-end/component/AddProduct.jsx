import React from "react";

const AddProduct = ()=>{
    const [name, setName]= React.useState("");
    const [price, setPrice]= React.useState("");
    const [category, setCategory]= React.useState("");
    const [company, setCompany]= React.useState("");
    const [error, setError]= React.useState(false);

    const addProduct = async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        
      
        const userId =JSON.parse(localStorage.getItem("user"))._id;
        let result =await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        console.warn(result);

    }
    

    return(
        <div className="product">
            <h1>Add product</h1>
            
            <input className="nam" type="text" placeholder="Enter product name" onChange={(e)=>{setName(e.target.value)}} value={name}/>
            {error && !name && <span className="invalid">Enter valid name</span>}



            <input className="nam" type="text" placeholder="Enter product price" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            {error && !price && <span className="invalid">Enter valid price</span>}


            <input className="nam" type="text" placeholder="Enter product category" onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
            {error && !category && <span className="invalid">Enter valid category</span>}


            <input className="nam" type="text" placeholder="Enter product company" onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            {error && !company && <span className="invalid">Enter valid company</span>}


            <button onClick={addProduct} className="pbtn">Add Product </button>
        
        </div>
    )
}
export default AddProduct;