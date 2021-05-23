import Image from 'next/image'

function Column(){

    return(

        <div className="Networks_column">
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Facebook.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Google+.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Whatsapp.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Instagram.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/ToCall.svg" width="45%" height="50%"></Image>   
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Twitter.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            
            <div className="ColumnLink">
                <a href="">
                    <Image className="link" src="/../public/imgs/Message.svg" width="45%" height="50%"></Image>
                </a>
            </div>
            

        </div>
    );
}export default Column