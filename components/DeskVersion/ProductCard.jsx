import React from 'react'
import Image from 'next/dist/client/image'

export default function ProductCard() {
    return (
        
        <div className="product-card">
        <div className="product ProductCard">
                            
        <div className="ModuleImg-div">
            <Image src="/module_1.svg" width="42%" height="47%"/>
        </div>
    
    
    <p className="pkg_numb">Package No. 1</p>
    <p >$100</p>
    </div>
<button /* onClick={Show_Form} */ className="buy_button">Buy</button>
</div>

    )
}
