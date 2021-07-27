import Image from 'next/image';
import Products_mob from '../components/MobileVersion/Products_mob';
import Column from '../components/DeskVersion/ColumnSide';
import CategoryCard from '../components/DeskVersion/CategoryCard'


function Products({categories}){

   

    return(
    <div className="/Products">

        <div className="Products_mob">
            <Products_mob />
        </div>

        <div className="borders">
        
        
        
            <div className="Products">

                <div className="Products-div">
                    
                    <div className="StaticTruck-div">
                        <Image id="StaticTruck" src="/truck.svg" width="450%" height="300%"/>
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
