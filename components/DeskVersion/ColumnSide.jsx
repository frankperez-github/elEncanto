import Image from 'next/image'

function Column(){

    return(

        <div className="Networks_column">
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/facebook.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/google_p.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/whatsapp.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/instagram.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/to_call.svg" width="45%" height="50%"></Image>   
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/twitter.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/message.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            

        </div>
    );
}export default Column