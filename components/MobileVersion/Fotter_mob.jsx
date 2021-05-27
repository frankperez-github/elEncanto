import Image from 'next/image';




function Footer_mob(){

    return(
        
        <div className="Footer_mob">

            <div className="Networks">
                    
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Facebook.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Google+.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Whatsapp.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Instagram.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/ToCall.svg" width="45%" height="50%"></Image>   
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Twitter.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="">
                        <Image className="link_net" src="/../public/imgs/Message.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                    
                </div>

            <div className="Boxes">
                <Image src="/../public/imgs/3Boxes.svg" width="270%" height="120%" className="boxes_mob_img"/>
            </div>
        </div> 
            

        
    );
}export default Footer_mob