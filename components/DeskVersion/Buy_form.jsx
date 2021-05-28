import Link from 'next/link';
import Animation from './Animation';


    const GoBack =()=>{
        document.getElementById('buy_form_desk').style.display="none";
    }
    function ShowAnim(){  
        document.getElementById('StaticTruck').style.display="none";
        document.getElementById('buy_form_desk').style.display="none";
        document.getElementById('Animation').style.display="block";
    }

function Buy_form() {
        
    return(

        <div id="buy_form" >
            <Animation/>

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
                        
                        <Link href="">
                            <button onClick={GoBack} className="form_button" >BACK</button>
                        </Link>
                        
                        <button className="form_button" onClick={ShowAnim}>SEND</button>
                        
                    
                    </div>
                </div>
            </form>
            
        </div>
        
    );
    

}export default Buy_form