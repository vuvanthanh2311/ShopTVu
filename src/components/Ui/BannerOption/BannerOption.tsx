import styles from "./bannerOption.module.scss"
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import { BsBagCheckFill } from "react-icons/bs";
import { MdLocalMall } from "react-icons/md";
import { GiPresent } from "react-icons/gi";

const listOptions = [
  {id : 1, name: 'Mã giảm giá', icon: LiaMoneyCheckAltSolid},
  {id : 2, name: 'Khách Hàng Thân Thiết', icon: SlBadge},
  {id : 3, name: 'Hàng Chọn Giá Hời', icon: BsBagCheckFill},
  {id : 4, name: 'Shop Mall', icon: MdLocalMall},
  {id : 5, name: 'Săn Ngay 100.000 Xu', icon: GiPresent},
]

const BannerOption = () => {
  return (
    <div className="row">
        {listOptions.map((item) => (
          <div key={item.id} className="col xl-2-4">
            <div className={styles.Item}>
              {item.icon && <item.icon className={styles.icon} />}
              <p className={styles.text}>{item.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
export default BannerOption;