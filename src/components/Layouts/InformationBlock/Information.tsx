import styles from './InfomationBlock.module.scss';


function InformationBlock() {
  return (
    <div className={styles.informationBlock}>
     <div className="grid wide">
        <div className="row ">
            <div className="col xl-2-4">
                <div className={styles.infoWrapper}>
                    <h3 className={styles.title}>DỊCH VỤ KHÁCH HÀNG</h3>
                    <ul >
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
             <div className="col xl-2-4">
                <div className={styles.infoWrapper}>
                    <h3 className={styles.title}>SHOPTVU VIỆT NAM</h3>
                    <ul >
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
             <div className="col xl-2-4">
                <div className={styles.infoWrapper}>
                    <h3 className={styles.title}>THANH TOÁN</h3>
                    <ul >
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
             <div className="col xl-2-4">
                <div className={styles.infoWrapper}>
                    <h3 className={styles.title}>THEO DÕI SHOPTVU</h3>
                    <ul >
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
                         <div className="col xl-2-4">
                <div className={styles.infoWrapper}>
                    <h3 className={styles.title}>TẢI ỨNG DỤNG SHOPTVU</h3>
                    <ul >
                        <li>Giới thiệu</li>
                        <li>Liên hệ</li>
                        <li>Hỗ trợ</li>
                        <li>Tin tức</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}
export default InformationBlock;