import "./Header.css";



const Header = () => {
    return (
        <div className="header-body">
            <div className="nav">
                <img src="../images/메뉴.png" alt="네비게이션아이콘"></img>
            </div>
            <div className="title">
                <img src="../images/메인로고.png" alt="로고"></img>
            </div>
            <div className="menu">
                <img src="../images/마이페이지.png" alt="마이페이지아이콘"></img>
                <img src="../images/카트.png" alt="카트아이콘"></img>
            </div>
        </div>
    )
}

export default Header
