import Link from 'next/link'

function Buy_form() {

    const GoBack =()=>{
        document.getElementById('buy_form_desk').style.display="none";
    }

    return(

        <div className="Buy_form" >

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

                        <label htmlFor="email">Email - Phone *</label><br/>
                        <input type="email" name="email" id="" required/>
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
                        <Link href="/Preparing_Order">
                            <button className="form_button" >SEND</button>
                        </Link>
                    
                    </div>
                </div>
            </form>
            
        </div>
    );
}export default Buy_form