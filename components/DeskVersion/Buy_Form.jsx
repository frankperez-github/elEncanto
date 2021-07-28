
import Image from 'next/image';
import Animation from './Animation';


    const GoBack =()=>{
        document.getElementById('buy_form_desk').style.display="none";
        document.getElementById('Pallets-divForm').style.display="block";
    }
   
    const handleSubmitDesk = (e) => {
        e.preventDefault();
        
        document.getElementById('StaticTruck').style.display="none";
        document.getElementById('Animation').style.display="block";
    }

    const handleSubmitMobile = (e) => {
        e.preventDefault();

        document.getElementById('buy_form_desk').style.display="none";
        document.getElementById('mobile_animation').style.display="block";
        document.getElementById('Pallets-div').style.display="none";
        
    }    
    
    const Show_Form =()=>{
        document.getElementById('buy_form_desk').style.display="block";
        document.getElementById('mobile_animation').style.display="none";
        document.getElementById('StaticTruck').style.display="block";
        document.getElementById('Animation').style.display="none";
    }
    

function Buy_form_desk() {
        
    

    return(

        <div id="buy_form" >
            
            <Animation />

            <form action="Submit" id="buy_form_desk" >
                <div className="buy_form">

                    <div className="form_left form_side">
                        <label htmlFor="product">Product</label><br/>
                        <select name="product" id="">
                            <option value="1">Product 1</option>
                            <option value="2">Product 2</option>
                        </select><br/>

                        <label htmlFor="quantity">Quantity</label><br/>
                        <input type="text" name="quantity" id=""/><br/>

                        <label htmlFor="name">Full Name *</label><br/>
                        <input type="text" name="name" id="" required/><br/>

                        <label htmlFor="Email">Email - Phone *</label><br/>
                        <input type="text" name="Email" id="" required/>
                    </div>

                    <div className="form_right form_side">
                        <label htmlFor="card">Magnetic Card*</label><br/>
                        <input type="text" name="" id="" required/><br/>

                        <label htmlFor="coin">Coin</label><br/>
                        <select name="coin" id="">
                            <option value="1">BitCoin</option>
                            <option value="2">USD</option>
                        </select><br/>
                        

                        <label htmlFor="address">Address *</label><br/>
                        <input type="text" name="address" id="" required/><br/>
                        
                        
                        <button onClick={GoBack} className="form_button" >BACK</button>
                        
                        
                        <button className="form_button Add2Cart" onClick={handleSubmitDesk}>SEND</button>

                        <button className="form_button Add2Cart2" onClick={handleSubmitMobile}>SEND</button>
                        
                        
                    </div>
                </div>
            </form>
            

            <div className="Pallets_mobile" id="mobile_animation">
                <div className="Pallets_mob" id="Pallets_mob">
                    
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
                            <Image src="/charge_dron.svg" width="370%" height="200%" />
                        </div>

                        <div className="emptyDron">
                            <Image src="/empty_dron.svg"  width ="370%" height="100%" id="EmptyDron_mob"/>
                        </div>

                        <div id="Text_animation_mob">
                            We are preparing your order!
                        </div>
                    </div>        

                </div>

                <div className="Right_side" id="FakeRightSide">

                        <div className="product ProductCard">
                            
                                <div className="ModuleImg-div">
                                    <Image src="/module_1.svg" width="42%" height="47%"/>
                                </div>
                            
                            
                            <p className="pkg_numb">Package No. 1</p>
                            <p >$100</p>
                        </div>

                        <button onClick={Show_Form} className="buy_button">Buy</button>
                        

                        <div className="product ProductCard">
                            <div className="ModuleImg-div">
                                <Image src="/module_2.svg" width="42%" height="50%"/>
                            </div>
                            <p className="pkg_numb">Package No. 2</p>
                            <p >$100</p>
                        </div>

                        <button onClick={Show_Form} className="buy_button">Buy</button>
                        

                        <div className="product ProductCard">
                            <div className="ModuleImg-div">
                                <Image src="/module_3.svg" width="42%" height="50%"/>
                            </div>

                            <p className="pkg_numb">Package No. 3</p>
                            <p >$100</p>
                        </div>

                        <button  onClick={Show_Form} className="buy_button">Buy</button>
                            
                    </div>
                    
            </div> 

        </div>
        
    );
    

}export default Buy_form_desk;