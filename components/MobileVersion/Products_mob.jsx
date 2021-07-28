import Image from 'next/image';



function Products_mob(){

  

    return(
        
        <div className="Products_mob">
    
    

            <div className="Products_menu">
                <div>

                    <div className="product_mob ProductCard_mob CardProducts">
                    <Image src="/garden.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob">Garden</p>

                        <a href="/Garden-Products">
                            <p className="see_product" >See More...</p>
                        </a>
                        
                    </div>

                    <div className="product_mob ProductCard_mob CardProducts">
                        <Image src="/bathroom.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob2">Bathroom</p>

                        <a href="/Bathroom-Products">
                            <p className="see_product" >See More...</p>
                        </a>
                    </div>


                    <div className="product_mob ProductCard_mob CardProducts">
                        <Image src="/tools.svg" width="42%" height="50%" className="Producticon"/>
                        <p className="prod_name_mob">Tools</p>

                        <a href="/Tools-Products">
                            <p className="see_product" >See More...</p>
                        </a>
                    </div>

                </div>
                
            </div>
        
        
            

        </div>
    );
}
export default Products_mob

