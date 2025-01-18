import "./header.sass";
import headerBg from "../../image/header-bg.png";
import imageSister from "../../image/image-sister.png";

const Header = () => {
    return (
        <div className="main-container">
            <img src={headerBg} className="background"  alt={'header image'}/>
            <img src={imageSister} className="image-sister" />
        </div>
    ) 
}

export default Header;
