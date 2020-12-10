import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
//import {AddCategory2} from './components/ AddCategory2';
import { GifGrid } from './components/GifGrid';
import './index.css';

const GifExpertApp = () => {

    //const categories = ['One punch Man','Goku','Ete sech'];

    const [categories,setCategories] = useState(['One Punch Man']);
    
    /*const handleAdd = () => {
        setCategories([...categories, 'SOA']);
        //setCategories(cat => [...categories,'SOA'])
        return <li key={category}>{category}</li>
    };*/


    return (
        <>
          <h2>GifExpertApp</h2> 
            <AddCategory setCategories = {setCategories}/>
          <hr/> 
          <ol>
            {categories.map(category => {

              return <GifGrid 
                key = {category} 
                category = {category}
                />
              })}
          </ol>
          
        </>
    )
}

export default GifExpertApp
