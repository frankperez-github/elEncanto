import Image from 'next/image'

function Column(){

    return(

        <div className="Networks_column">
            
            <div className="ColumnLink">
                <a href="https://www.facebook.com/El-Encanto-Liquidation-100615011645519">
                    <Image className="link" src="/facebook.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            
            <div className="ColumnLink">
                <a href="https://wa.me/+17029576836">
                    <Image className="link" src="/whatsapp.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="https://www.instagram.com/liquidationelencanto/?hl=en">
                    <Image className="link" src="/instagram.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="tel:+17029576836">
                    <Image className="link" src="/to_call.svg" width="45%" height="50%"></Image>   
                </a>
            </div>
            
            
            <div className="ColumnLink">
                <a href="mailto:elencantoliquidation@gmail.com">
                    <Image className="link" src="/message.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            

        </div>
    );
}export default Column