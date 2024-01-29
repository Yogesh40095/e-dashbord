import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdatePro = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
       
        getProductDetail();
    },[])

    const getProductDetail = async()=>{
        
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)

    }

    const updatePro = async () => {

        console.warn(name, price, category, company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        console.warn(result)
        navigate("/")

    }


    return (
        <div className="product">
            <h1> Update product</h1>

            <input className="nam" type="text" placeholder="Enter product name" onChange={(e) => { setName(e.target.value) }} value={name} />




            <input className="nam" type="text" placeholder="Enter product price" onChange={(e) => { setPrice(e.target.value) }} value={price} />



            <input className="nam" type="text" placeholder="Enter product category" onChange={(e) => { setCategory(e.target.value) }} value={category} />



            <input className="nam" type="text" placeholder="Enter product company" onChange={(e) => { setCompany(e.target.value) }} value={company} />



            <button onClick={updatePro} className="pbtn">Update </button>

        </div>
    )
}
export default UpdatePro;