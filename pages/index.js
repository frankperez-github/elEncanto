import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Buy_form_desk from '../components/DeskVersion/Buy_Form'
import ProductCard from '../components/DeskVersion/ProductCard'


export default function Home({products}) {


  const router = useRouter()
  const [page, setPage] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [pages, setPages] = useState([])
  const [perPage] = useState(8)
  useEffect(()=>{
    var pagesArr = []
    let len = products.filter(product=>product.name.toLowerCase().includes(keyword.toLowerCase())).length
    for (let i=0;i<len;i+=perPage)
    {
      pagesArr.push({"index":i/perPage, "isActive":i/perPage==page?true:false})
    }
    setPages(pagesArr)
  }, [page, keyword]
  )

  const search = () => {
    let key = keyword
    router.reload(window.location.pathname);
   
  }
 
  return (


    <div>
      <Head>
        <title>El Encanto</title>
        <meta name="description" content="Generated with create next app by Frank Pérez and Adrian Valdés" />
        <link rel="icon" href="/logo_liquidation.ico" />
      </Head>

      <main >
        <div className="Pallets">

            <div id="Pallets-divForm">   

              <div className="Search-div">

                <input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Looking for something?" />
                <button disabled={true} onClick={search} className="form_button buttonSearch">Search</button>

              </div>
            
              

              <div className="Pallets-div" id="Pallets-div">
              
              
                <div className="Right_side " id="Right_side">
                
                  {products.filter(product=>product.name.toLowerCase().includes(keyword.toLowerCase())).slice(page*perPage,page*perPage+perPage).map(product=><ProductCard key = {product.id} product={product}/>)}

              
                  
                </div>
                <div className="pagination-bar ">
                    
                    <div className="arrow-div">
                      <Image onClick={()=> {if(page>0) setPage(page-1) }} alt="No Image" className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                    </div>

                
    {pages.map(item=><p key={item.index} onClick={()=>{setPage(item.index)}} className={item["isActive"]?"selectedNumber":""}>{item.index+1}</p>)}
                    <div className="arrow-div">
                      <Image onClick={()=> {if(page<products.length/perPage-1) setPage(page+1) }} alt="No Image"  className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                    </div>

                  </div> 

              </div>
            
            </div>

            <Buy_form_desk />

        </div>
        
      </main>

      
    </div>
  )
}

export const getStaticProps  = async()=> {
  const res = await fetch('http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/products')
  
  const products = await res.json()
  

  return {
    props: {
      products,
     // pages:[...Array(Math.ceil(products.lenght/5)).keys()]
    }
  }
}