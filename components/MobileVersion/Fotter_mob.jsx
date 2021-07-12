import Image from 'next/image';




function Footer_mob(){

    return(
        
        <div className="Footer_mob">

            <div className="Networks">
                    
                <div>
                    <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                        <Image className="link_net" src="/facebook.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
            
                <div>
                    <a href="https://wa.me/+17029576836">
                        <Image className="link_net" src="/whatsapp.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                        <Image className="link_net" src="/instagram.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                
                <div>
                    <a href="tel:+17029576836">
                        <Image className="link_net" src="/to_call.svg" width="45%" height="50%"></Image>   
                    </a>
                </div>
                
                
                
                <div>
                    <a href="mailto:elencantoliquidation@gmail.com">
                        <Image className="link_net" src="/message.svg" width="45%" height="50%"></Image>
                    </a>
                </div>
                    
                </div>

            <div className="Boxes">
                <Image src="/boxes.svg" width="270%" height="120%" className="boxes_mob_img"/>
            </div>
        </div> 
            

        
    );
}export default Footer_mob