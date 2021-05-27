import Link from 'next/link'
import Image from 'next/image'

function Layout(props) {

    return(
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
                    <Link href="#">
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

            <main>
                {props.children}
            </main>

        <div className="Footer">
            <div className="boxes">
                <Image src="/../public/imgs/3Boxes.svg" width="220%" height="100%"/>
            </div>
            <div id="TextTruck">
                We are preparing your order!
            </div>
        </div>

    </div>
    );

    

}export default Layout