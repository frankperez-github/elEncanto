import Image from 'next/image';
import Link from 'next/link';
import Products_mob from '../pages/Products_mob';
import Column from '../components/DeskVersion/ColumnSide';



function Products(){

   

    return(
    <div className="/Products">

        <div className="Products_mob">
            <Products_mob />
        </div>

        <div className="borders">
        
           
            <div className="CenterSection">
                <div className="Products">

                    <div className="Products-div">
                        
                        <div className="StaticTruck-div">
                            <Image className="StaticTruck" src="/../public/imgs/Truck.svg" width="450%" height="300%"/>
                    </div>

                        <div className="Right_side_products">
                            <div className="product ProductCard CardProducts">

                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Garden.svg" width="42%" height="50%"/>
                                </div>
                                
                                <p className="prod_name">Garden</p>
                                <Link href="/Garden-Products">
                                    <p className="see_product_desk"  >See More...</p>
                                </Link>
                            </div>

                            <div className="product ProductCard CardProducts">

                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Bathroom.svg" width="42%" height="50%"/>
                                </div>

                                <p className="prod_name">Bathroom</p>
                                <Link href="/Bathroom-Products">
                                    <p className="see_product_desk"  >See More...</p>
                                </Link>
                            </div>

                            <div className="product ProductCard CardProducts">

                                <div className="ModuleImg-div">
                                    <Image src="/../public/imgs/Tools.svg" width="42%" height="50%"/>
                                </div>

                                <p className="prod_name">Tools</p>
                                <Link href="/Tools-Products">
                                    <p className="see_product_desk"  >See More...</p>
                                </Link>
                            </div>

                        </div>

                        <Column />
                        
                    </div>
                
       
                </div>
            </div>
        </div>
    </div>
    );
}export default Products