import { IoSearch } from "react-icons/io5";
import './index.css'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <h1>MOVIE<strong>VENNIE</strong></h1>
        </div>
        <div className="SearchAndUser">
            <div className="search">
                <input type="text" name="search" id="search" placeholder="Search Movie" /> 
                <div className="iconSearch">
                    <IoSearch />
                </div>
            </div>
            <div className="user">
                <img src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/346279069_782256326742243_2189200350255964972_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEHD8S1nBajTAY8Nxj6hADpggKd_2bWV9eCAp3_ZtZX1ymQqHd_Xwa65l8nbyhrGNG0ObJVmS6jHSTCaqpCMz0e&_nc_ohc=8ldNzXefw_sAX_X63Yt&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAJMYBy3-NY3ktJ6AeaWh57ZNP2h9tXigGbe3Axa1MO7w&oe=65BB7CA7" />
            </div>
        </div>
    </div>
  )
}
export default Header