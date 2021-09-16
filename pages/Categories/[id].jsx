import ProductCard from '../../components/DeskVersion/ProductCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const getServerSideProps = async(context) => {
    const res  = await fetch(`https://elencantoapi.com/products/categories/${context.params.id}`)
    const category = await res.json()

    return {
        props : {
            category
        }
    }
}


export default function ProductsByCategory ({category}) {
    
    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState("")
    const [pages, setPages] = useState([])
    const [perPage] = useState(8)

    useEffect(()=>{
      var pagesArr = []
      let len = category.products.filter(product=>product.name.toLowerCase().includes(keyword.toLowerCase())).length
      for (let i=0;i<len;i+=perPage)
      {
        pagesArr.push({"index":i/perPage, "isActive":i/perPage==page?true:false})
      }
      setPages(pagesArr)
      if (page>=pages.length) {setPage(0)}
    }, [page, keyword]
    )
  
    const search = () => {
      setPage(0)
     
    }
   
    return (


    <div className="Pallets-divCateg">


        

        <div className="CategoryName-div h2Title">
            <h2>{category.name}</h2>
        </div>
        <div className="Search-div">

<input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Looking for something?" />
<button onClick={search} className="form_button buttonSearch">Search</button>

</div>
        <div className=" Right_side ">
            { category.products.length>0 ?
              
              category.products.filter(product=>product.name.toLowerCase().includes(keyword.toLowerCase())).slice(page*perPage,page*perPage+perPage).map(product=><ProductCard key = {product.id} product={product}/>)
              : 
            <div className="NoProdcts h2Title">
                <h2>"No products found on the selected category"</h2>
            </div>}
            
            

                    <div className="pagination-bar ">
                    
                    <div className="arrow-div">
                      <Image onClick={()=> {if(page>0) setPage(page-1) }} alt="No Image" className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                
    {pages.map(item=><p key={item.index} onClick={()=>{setPage(item.index)}} className={item["isActive"]?"selectedNumber":""}>{item.index+1}</p>)}
                    <div className="arrow-div">
                      <Image onClick={()=> {if(page<category.products.filter(product=>product.name.toLowerCase().includes(keyword.toLowerCase())).length/perPage-1) setPage(page+1) }} alt="No Image"  className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                    </div>

                  </div> 

        </div>
    </div>

 )
}
