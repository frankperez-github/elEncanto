import Preparing_Order from './Preparing-Order_mob';

function BuyForm_mob(){

    const GoBack =()=>{
        history.back();
        document.getElementById('buy_form_mob').style.display="none";
    }
    const GoForward =()=>{
        document.getElementById('mobile_animation').style.display="block";

        document.getElementById('buy_form_mob').style.display="none";
    }

    return(
        
        <div className="Buy_form_mob">

            <form action="Submit"  className="form_mob" id="buy_form_mob">

                <div className="form_left form_side_mob">
                    <label htmlFor="product">Product</label><br/>
                    <select name="product" id="">
                        <option value="1">Product 1</option>
                        <option value="2">Product 2</option>
                    </select><br/>

                    <label htmlFor="quantity">Quantity</label><br/>
                    <input type="text" name="quantity" id=""/><br/>

                    <label htmlFor="name">Full Name *</label><br/>
                    <input type="text" name="name" id="" required/><br/>

                    <label htmlFor="email">Email - Phone *</label><br/>
                    <input type="email" name="email" id="" required/>
                </div>

                <div className="form_right form_side_mob">
                    <label htmlFor="card">Magnetic Card*</label><br/>
                    <input type="text" name="" id="" required/><br/>

                    <label htmlFor="coin">Coin</label><br/>
                    <select name="coin" id="">
                        <option value="1">BitCoin</option>
                        <option value="2">USD</option>
                    </select><br/>
                    

                    <label htmlFor="address">Address *</label><br/>
                    <input type="text" name="address" id="" required/><br/>
                    
                    
                    <button onClick={GoBack} className="form_button_mob" >BACK</button>
                    
                    
                        <button onClick={GoForward} className="form_button_mob" >SEND</button>
                    
                    
                    
                </div>
            </form>
            

            <Preparing_Order />

        </div>
    );
}export default BuyForm_mob;