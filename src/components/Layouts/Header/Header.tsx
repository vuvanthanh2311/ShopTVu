import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.navbar}>
      <div className="grid wide">
       <div className={`row ${styles.navbarTop}`}>
        <div className="col xl-6">
          <div className={styles.topLeft}>
              
            </div>
        </div>
         <div className="col xl-6">
          <div className={styles.topRight}>
              
            </div>
        </div>
       </div>
       <div className={`row ${styles.navbarMain}`}>
        <div className="col xl-2 ">
            <div className={styles.logo}>
              
            </div>
        </div>
        <div className="col xl-8 ">
             <div className={styles.search}>
              
            </div>
        </div>
        <div className="col xl-2 ">
             <div className={styles.cart}>
              
            </div>
        </div>
       </div>
      </div>
        
    </header>
  );
}
export default Header;