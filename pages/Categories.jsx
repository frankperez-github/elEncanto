import Column from '../components/DeskVersion/ColumnSide'
import Image from 'next/image';

import CategoryCard from '../components/DeskVersion/CategoryCard'


function Products({categories}){

   

    return(
    <div className="/Products">

        <div className="Products_mob">
            
        </div>

        <div className="borders">
        
            <div className="Products">

                <div className="Products-div">
                    
                    <div className="StaticTruck-divProd">
                        <Image id="StaticTruck" src="/truck.svg" width="450%" height="200%"/>
                    </div>

                    <div className="Right_side_products">
                        {categories.map(category=> <CategoryCard key={category["id"]} category = {category}/>)}
                    </div>

                    <Column />
                    
                </div>

                

            </div>
        
        </div>
    </div>
    );

}export default Products

export const getStaticProps = async() => {
    const res = await fetch('https://elencanto-drf-api.herokuapp.com/products/categories/')
    const categories = await res.json()
    

    return {
        props: {
            categories
        }
    }

}
