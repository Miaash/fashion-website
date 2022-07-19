import "./Item.css";


const Item = () => {
    return (
        <div>
            <img alt="상품사진">
                <div className="instagram-btn">
                    <img src="../images/인스타로고.png" className="instagram-img" alt="인스타로고"></img>
                </div>
                <div className="cart-btn">
                    <img className="cart-img"alt="쇼핑카트"></img>
                </div>
            </img>
            <span></span>
            <span></span>
        </div>
    )
}

export default Item;