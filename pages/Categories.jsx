import Image from 'next/image'
import CategoryCard from '../components/DeskVersion/CategoryCard'


function Products({categories}){

   

    return(
    <div className="/Products">

        <div className="Products_mob">
            
        </div>

        <div className="borders">
        
            <div className="Products">

                
                <div className="Pallets-div " id="Pallets-div">
              
                
                    <div className="Right_side Category-div" id="Right_side ">
                    
                    {categories.map(category=> <CategoryCard key={category["id"]} category = {category}/>)}

                    

                        <div className="pagination-bar ">
                        
                            <div className="arrow-div">
                                <Image alt="No Image" className="arrow-pag leftarr" src="/Larrow.svg" width="45%" height="45%" />
                            </div>

                                <p>1</p>
                                <p>2</p>
                                <p className="selectedNumber">3</p>
                                <p>4</p>
                                <p>5</p>

                            <div className="arrow-div">
                                <Image alt="No Image" className="arrow-pag rightarr" src="/Rarrow.svg" width="45%" height="45%" />
                            </div>

                        </div>  
                    
                    </div>


                </div>
                              

            </div>
        
        </div>
    </div>
    );

}export default Products

export const getStaticProps = async() => {
    const res = await fetch('http://django-env.eba-mpfqdpns.us-west-2.elasticbeanstalk.com/products/categories/')
    const categories = await res.json()
    

    return {
        props: {
            categories
        }
    }

}
