import react, { useEffect, useState } from 'react'
//import tailwindcss from 'tailwindcss'

const Productlist = () => {
  const [productList, setproductList] = useState ([]);
  const fetchdata = async ()=>{
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setproductList(data);

    }catch(error){
      console.log(error);
    }




  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div className='grid grid-cols-4 gap-4'>
      {productList.map((item ,i)=>{
          return (
            <>
            <div className="bg-white p-4 flex justify-center items-center flex-col gap-5 shadow-xl  ">
              <img src={item.image} alt={item.name} className='w-48'/>
              <h2>{item.name}</h2>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            </>
            

          )
    })}
    </div>
  )
}

export default Productlist