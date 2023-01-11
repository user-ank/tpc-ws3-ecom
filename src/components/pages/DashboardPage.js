import React, { useEffect, useState } from 'react'
import classes from './DashboardPage.module.css'
import ProductList from '../ProductList';

export default function DashboardPage() {

const [dataArray, setData] = useState([]);
    
useEffect(()=>{

    let loader = document.getElementById('loader'); 
    loader.style.visibility = 'visible';
    loader.classList.add("eightyP");
    
    fetch('https://dummyjson.com/products')
    .then((res) =>res.json())
    .then((data) => {

        console.log(data);
        setData(data.products);
        console.log(dataArray);
    })
    .then(()=>{
        loader.classList.add("hundredP");
    })
    .then(()=>{
        setTimeout(()=>{
            loader.style.visibility = 'hidden'
            loader.classList.remove("hundredP", "eightyP", "tenP");
        }, 2000)
        // loader.style.visibility = 'hidden';
    }); 
        

},[])
    
        


    return (
        <div className={classes.container}>
             
                <ProductList products={dataArray}/>
                    
            {/* <Product image={"https://i.dummyjson.com/data/products/4/1.jpg"} proName={"OPPOF19"}/> */}
            {/* <Product image={dataArray[0].images[0]} proName={dataArray[0].title}/> */}
        </div>
    )
}
