import Link from 'next/link';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/router';

function Layout(props) {
    
    const {cartItems}  = useContext(CartContext)
    const {user} = useContext(UserContext)
   
      const router = useRouter()
    
      useEffect(()=>{
            
        console.log(router.pathname)

    }, )

  
    return(
    <div className="Layout">
        <div className="nav_bar" >
    
            <div className="logo">
                <Image alt="No Image" className="logo_img" src="/logo.svg" alt="Logo" width="1500%" height="1500%" />
            </div>

            <div className="nav" >
                <Link href="/" className="link_a"> 
                    <div className="link-div">
                    
                        <div className="NavLink-div">
                            <div className="LinkImg">
                              <svg className="LinkSVG"  xmlns="http://www.w3.org/2000/svg" width="24.993" height="26.463" viewBox="0 0 24.993 26.463">
                                <path id="Path_742" data-name="Path 742" d="M51.269,84.856A2.409,2.409,0,0,1,48.9,86.834a2.381,2.381,0,0,1-.43-.04L28.292,83.118a2.406,2.406,0,0,1,.859-4.734l2.71.5v-.2a2.406,2.406,0,0,1,4.812,0v1.075l12.66,2.307A2.4,2.4,0,0,1,51.269,84.856Zm-3.085,3.515L28.053,84.707V99.529a3.207,3.207,0,0,0,3.209,3.206h5.746V97.39a1.6,1.6,0,0,1,1.606-1.6h.934a1.6,1.6,0,0,1,1.6,1.6v5.346H46.63a3.209,3.209,0,0,0,3.209-3.206V88.616S48.426,88.414,48.184,88.371Z" transform="translate(-26.316 -76.273)" fill={router.pathname=="/"?"#ff524f":"#1d4259"}/>
                              </svg>

                            </div>

                            <div className="LinkName linkProductsName">
                                Products
                            </div> 
                        </div>
                    
                    </div>
                </Link>

                <Link href="/Categories" className="link_a">
                    <div className="link-div" >
                        
                            <div className="NavLink-div">
                                <div className="LinkImg">
                                    <svg className="LinkSVG" xmlns="http://www.w3.org/2000/svg" width="26" height="22.173" viewBox="0 0 26 22.173">
                                        <g id="Group_125" data-name="Group 125" transform="translate(-129 -23)">
                                            <path id="Path_743" data-name="Path 743" d="M661.371,226.386l-3.155-1.97c-.64-.4-1.159-.114-1.159.642v4.1c0,.756.519,1.043,1.159.643l3.155-1.971A.787.787,0,0,0,661.371,226.386Zm20.318-1.328H665.267a1.368,1.368,0,0,0-1.368,1.368v1.368a1.368,1.368,0,0,0,1.368,1.368h16.422a1.369,1.369,0,0,0,1.368-1.368v-1.368A1.368,1.368,0,0,0,681.689,225.058Zm-23.472,12.96,3.155-1.971c.64-.4.611-1-.065-1.338l-3.025-1.513a.778.778,0,0,0-1.224.756v3.422C657.057,238.13,657.576,238.418,658.216,238.018Zm23.472-4.75H665.267a1.368,1.368,0,0,0-1.368,1.369v1.368a1.368,1.368,0,0,0,1.368,1.369h16.422a1.369,1.369,0,0,0,1.368-1.369v-1.368A1.369,1.369,0,0,0,681.689,233.268Zm-20.318,9.539-3.155-1.971c-.64-.4-1.159-.113-1.159.643v4.106c0,.755.519,1.043,1.159.642l3.155-1.97A.787.787,0,0,0,661.371,242.807Zm20.318-1.328H665.267a1.368,1.368,0,0,0-1.368,1.368v1.369a1.369,1.369,0,0,0,1.368,1.369h16.422a1.369,1.369,0,0,0,1.368-1.369v-1.369A1.368,1.368,0,0,0,681.689,241.479Z" transform="translate(-528.057 -201.234)" fill={router.pathname=="/Categories"?"#ff524f":"#1d4259"}/>
                                        </g>
                                    </svg>

                                </div>

                                <div className="LinkName linkCategoryName">
                                    Categories
                                </div> 
                            </div>
                        
                    </div>
                </Link>
                
                <Link href="/Cart">
                    <div className="link-div">
                    
                        <div className="NavLink-div">
                                <div className="LinkImg">
                                    <svg className="LinkSVG" className="LinkSVG" xmlns="http://www.w3.org/2000/svg" width="22.832" height="25.648" viewBox="0 0 22.832 25.648">
                                        <g id="purchases" transform="translate(-74 -181)">
                                            <g id="pruchases_icon" transform="translate(74 181)">
                                            <circle id="Ellipse_148" data-name="Ellipse 148" cx="2.717" cy="2.717" r="2.717" transform="translate(1.99 20.215)" fill={router.pathname=="/Cart"?"#ff524f":"#1d4259"}/>
                                            <circle id="Ellipse_149" data-name="Ellipse 149" cx="2.717" cy="2.717" r="2.717" transform="translate(14.934 20.215)" fill={router.pathname=="/Cart"?"#ff524f":"#1d4259"}/>
                                            <path id="Path_739" data-name="Path 739" d="M215.934,57.106l-15.8.856a3.023,3.023,0,0,1-2.987-2.652l-.649-4.559a3.026,3.026,0,0,1,2.679-3.613l16.691-2.37a3.05,3.05,0,0,1,3.155,3.917l-1.8,7.362A1.584,1.584,0,0,1,215.934,57.106Z" transform="translate(-196.291 -39.368)" fill={router.pathname=="/Cart"?"#ff524f":"#1d4259"}/>
                                            <rect id="Rectangle_329" data-name="Rectangle 329" width="4.507" height="6.017" rx="0.929" transform="translate(0 0.638) rotate(-8.143)" fill={router.pathname=="/Cart"?"#ff524f":"#1d4259"}/>
                                            </g>
                                        </g>
                                    </svg>

                                </div>

                                <div className="link_name"> 
                                    Cart {cartItems.length>0 && `(${cartItems.length})`}
                                </div>
                            </div>
                    
                    </div>
                </Link>

                <Link href="/User">
                    <div className="link-div">
                    
                        <div className="NavLink-div">


                                <div className="LinkImg">
                                    <svg className="LinkSVG"  xmlns="http://www.w3.org/2000/svg" width="24.472" height="25.158" viewBox="0 0 24.472 25.158">
                                        <path id="Path_741" data-name="Path 741" d="M62.5,89.008a6.41,6.41,0,1,1,6.41-6.413A6.409,6.409,0,0,1,62.5,89.008ZM73.867,95a18.769,18.769,0,0,0-5.57-7.066,7.816,7.816,0,0,1-11.663-.073A18.823,18.823,0,0,0,50.973,95c-1.876,4.717-.479,6.351,4.962,6.351h12.97C74.346,101.346,75.743,99.712,73.867,95Z" transform="translate(-50.184 -76.188)" fill={router.pathname=="/Login"||router.pathname=="/User"?"#ff524f":"#1d4259"}/>
                                    </svg>

                                </div>

                            
                                <div className="link_name"> 
                                {user.first_name?user.first_name:user.username?user.username:"Login"}
                                </div>

                                
                            </div>
                    
                    </div>
                </Link>
            </div>
        </div>
        
            <main className="main">
                {props.children}
            </main>

    </div>
    );

    

}export default Layout