import Image from 'next/image'
import NavBar_mob from '../components/MobileVersion/NavBar_mob';
import Footer_mob from '../components/MobileVersion/Fotter_mob';

const Go_buying =()=>{
    document.getElementById('buy_form_mob').style.display="block";
    document.getElementById('mobile_animation').style.display="none";
}

function PreparingOrder(){

    return(
        
    <div className="Pallets_mobile" id="mobile_animation">

        
       
        <div className="Pallets_mob" id="Pallets_mob">
            
            <NavBar_mob />


            <div className="Truck_Animation">
                <div id="closeTruck">
                    <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck" />
                </div>
                <div id="closeTruck2">
                    <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck2" />
                </div>
                <div id="closeTruck3">
                    <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck3" />
                </div>
                <div id="closeTruck4">
                    <Image src="/truck.svg" width="400%" height="250%" className="truck_mob_img ClosedTruck4" />
                </div>
                

                <div id="OpenTruck_mob">
                    <Image src="/empty_truck.svg" width="400%" height="250%" />
                </div>

                <div id="ChargeDron_mob">
                    <Image src="/public/charge_dron.svg" width="370%" height="200%" />
                </div>

                <div className="emptyDron">
                    <Image src="/empty_dron.svg"  width ="370%" height="100%" id="EmptyDron_mob"/>
                </div>

                <div id="Text_animation_mob">
                    We are preparing your order!
                </div>
            </div>        

            <div className="Pallets_menu" id="Pallets_menu" >

                <div className="product ProductCard_mob">

                    <Image src="/module_1.svg" width="42%" height="47%" className="Producticon_mob"/>
                    
                    <p className="pkg_numb_mob">Package No. 1</p>
                    <p className="Price_mob">$100</p>
                </div>

                
                
                <button onClick={Go_buying} className="buy_button_mob" >Buy</button>
            
                
                

                <div className="product ProductCard_mob">
                    <Image src="/module_2.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 2</p>
                     <p className="Price_mob">$100</p>
                </div>

                
                
                <button onClick={Go_buying} className="buy_button_mob" >Buy</button>
            
                
                
                <div className="product ProductCard_mob">
                    <Image src="/module_3.svg" width="42%" height="47%" className="Producticon_mob"/>
                    <p className="pkg_numb_mob">Package No. 3</p>
                    <p className="Price_mob">$100</p>
                </div>
                
                
                
                    <button  className="buy_button_mob last" >Buy</button>

                
            
                <Footer_mob/>
            </div>
            
            
        </div>
    </div>       
    );
}export default PreparingOrder