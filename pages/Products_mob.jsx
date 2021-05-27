import Image from 'next/image';
import NavBar_mob from '../components/MobileVersion/NavBar_mob';
import Footer_mob from '../components/MobileVersion/Fotter_mob';



function Products_mob(){

   const TurnGreen =()=>{
        var paths = document.getElementsByClassName("path");
        paths.forEach(element =>{
            element.style.fill="green"
        });
   }

    return(
        
        <div className="Products_mob">
    

            <NavBar_mob />      

            <div className="Products_menu">
                <div>

                    <div className="product_mob ProductCard_mob CardProducts">
                    <Image src="/../public/imgs/garden.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob">Garden</p>

                        <a href="/Garden-Products">
                            <p onClick={TurnGreen} className="see_product" >See More...</p>
                        </a>
                        
                    </div>

                    <div className="product_mob ProductCard_mob CardProducts">
                        <Image src="/../public/imgs/bathroom.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob2">Bathroom</p>

                        <a href="/Bathroom-Products">
                            <p className="see_product" >See More...</p>
                        </a>
                    </div>


                    <div className="product_mob ProductCard_mob CardProducts">
                        <Image src="/../public/imgs/tools.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob">Tools</p>

                        <a href="/tools-Products">
                            <p className="see_product" >See More...</p>
                        </a>
                    </div>

                </div>
                
            </div>
        
        
            <Footer_mob/>

        </div>
    );
}export default Products_mob