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
        
            <div className="nav_bar">
                    <div className="logo">
                        <Image className="logo_img" src="/../public/imgs/Logo_Liquidation.svg" alt="Logo" width="150%" height="150%" />
                    </div>

                    <div className="nav">

                        <div className="link-div">
                            <Link href="/Pallets" className="link_a"> 
                                <div className="NavLink-div">
                                    <div className="LinkImg">
                                        <Image src="/../public/imgs/link_pallets.svg" width="40%" height="40%"/> 
                                    </div>

                                    <div className="LinkName">
                                        Pallets
                                    </div> 
                                </div>
                            </Link>
                            
                            
                        </div>

                        <div className="link-div" >
                            <Link href="/Products" className="link_a">
                                <div className="NavLink-div">
                                    <div className="LinkImg">
                                        <Image src="/../public/imgs/link_products.svg" width="40%" height="40%"/> 
                                    </div>

                                    <div className="LinkName">
                                        Products
                                    </div> 
                                </div>
                            </Link>
                        </div>

                        <div className="link-div">
                            <Link href="/Contact">
                            <div className="NavLink-div">
                                    <div className="LinkImg">
                                        <Image src="/../public/imgs/link_contact.svg" width="40%" height="40%"/> 
                                    </div>

                                    <div className="LinkName">
                                        Contact
                                    </div> 
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

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
                
                    <div className="Footer">
                        <div className="boxes">
                            <Image src="/../public/imgs/3Boxes.svg" width="220%" height="100%"/>
                        </div>
                    </div>
       
                </div>
            </div>
        </div>
    </div>
    );
}export default Products