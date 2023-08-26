import { Starship } from '../../shared/models/starship';
import './starship-card.sass'
import empireIcon from "../../assets/images/empire-icon.svg";
import creditIcon from "../../assets/images/credit-icon.svg";
import cartIcon from "../../assets/images/cart-icon.svg";

type StarshipCardProps = {
    starship: Starship;
}
function StarshipCard({ starship }: StarshipCardProps) {
    return (
        <div className='starship-card'>
            <canvas className='screen'></canvas>
            <div className="info">
                <img className='faction-icon' src={empireIcon} alt="" />
                <div className='basic-info'>
                    <div className="top">{starship.name}</div>
                    <div className="bottom">
                        <ul>
                            <li>h: {starship.height}m</li>
                            <li>w: {starship.width}m</li>
                            <li>l: {starship.length}m</li>
                            <li>w: {starship.weight}tons</li>
                        </ul>
                    </div>
                </div>
                <div id='product-info'>
                    <div className='square-list'>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                    <div >
                        <div className="color-list">
                            <button className='color-btn'></button>
                            <button className='color-btn'></button>
                            <button className='color-btn'></button>
                        </div>
                        <span className="price">
                            {starship.price} <img src={creditIcon} alt="credit icon" />
                        </span>
                    </div>
                </div>

                <div>
                    <img src={cartIcon} alt="cart icon" />
                </div>
            </div>
        </div>
    )
}

export default StarshipCard