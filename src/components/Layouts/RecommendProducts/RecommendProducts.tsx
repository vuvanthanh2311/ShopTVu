import styles from './RecommendProducts.module.scss';
import getRandomElements from '../../../utils/getRandomElements';


const products = [
        { id: 1, name: ' rcm product 1' },
        { id: 2, name: ' rcm product 2' },
        { id: 3, name: ' rcm product 3' },
        { id: 4, name: ' rcm product 4' },
        { id: 5, name: ' rcm product 5' },
        { id: 6, name: ' rcm product 6' },
        { id: 7, name: ' rcm product 7' },
        { id: 8, name: ' rcm product 8' },
        { id: 9, name: ' rcm product 9' },
        { id: 10, name: ' rcm product 10' },
        { id: 11, name: ' rcm product 11' },
        { id: 12, name: ' rcm product 12' },
        { id: 13, name: ' rcm product 13' },
        { id: 14, name: ' rcm product 14' },
        { id: 15, name: ' rcm product 15' },
        { id: 16, name: ' rcm product 16' },
        { id: 17, name: ' rcm product 17' },
        { id: 18, name: ' rcm product 18' },
        { id: 19, name: ' rcm product 19' },
        { id: 20, name: ' rcm product 20' },
        { id: 21, name: ' rcm product 21' },
        { id: 22, name: ' rcm product 22' },
        { id: 23, name: ' rcm product 23' },
        { id: 24, name: ' rcm product 24' },
        { id: 25, name: ' rcm product 25' },
        { id: 26, name: ' rcm product 26' },
        { id: 27, name: ' rcm product 27' },
        { id: 28, name: ' rcm product 28' },
        { id: 29, name: ' rcm product 29' },
        { id: 30, name: ' rcm product 30' },
        { id: 31, name: ' rcm product 31' },
        { id: 32, name: ' rcm product 32' },
        { id: 33, name: ' rcm product 33' },
        { id: 34, name: ' rcm product 34' },
        { id: 35, name: ' rcm product 35' },
        { id: 36, name: ' rcm product 36' },
        { id: 37, name: ' rcm product 37' },
        { id: 38, name: ' rcm product 38' },
        { id: 39, name: ' rcm product 39' },
        { id: 40, name: ' rcm product 40' },
        { id: 41, name: ' rcm product 41' },
        { id: 42, name: ' rcm product 42' },
        { id: 43, name: ' rcm product 43' },
        { id: 44, name: ' rcm product 44' },
        { id: 45, name: ' rcm product 45' },
        { id: 46, name: ' rcm product 46' },
        { id: 47, name: ' rcm product 47' },
        { id: 48, name: ' rcm product 48' },
        { id: 49, name: ' rcm product 49' },
        { id: 50, name: ' rcm product 50' },
        { id: 51, name: ' rcm product 51' },
        { id: 52, name: ' rcm product 52' },
        { id: 53, name: ' rcm product 53' },
        { id: 54, name: ' rcm product 54' },
        { id: 55, name: ' rcm product 55' },
        { id: 56, name: ' rcm product 56' },
        { id: 57, name: ' rcm product 57' },
        { id: 58, name: ' rcm product 58' },
        { id: 59, name: ' rcm product 59' },
        { id: 60, name: ' rcm product 60' },
        { id: 61, name: ' rcm product 61' },
        { id: 62, name: ' rcm product 62' },
        { id: 63, name: ' rcm product 63' },
        { id: 64, name: ' rcm product 64' },
        { id: 65, name: ' rcm product 65' },
        { id: 66, name: ' rcm product 66' },
        { id: 67, name: ' rcm product 67' },
        { id: 68, name: ' rcm product 68' },
        { id: 69, name: ' rcm product 69' },
        { id: 70, name: ' rcm product 70' },
        { id: 71, name: ' rcm product 71' },
        { id: 72, name: ' rcm product 72' },
        { id: 73, name: ' rcm product 73' },
        { id: 74, name: ' rcm product 74' },
        { id: 75, name: ' rcm product 75' },
        { id: 76, name: ' rcm product 76' },
        { id: 77, name: ' rcm product 77' },
        { id: 78, name: ' rcm product 78' },
        { id: 79, name: ' rcm product 79' },
        { id: 80, name: ' rcm product 80' },
]

function RecommendProducts() {
    const random42Products = getRandomElements(products, 42);
  return (
    <div className={`grid wide ${styles.rcmContainer}`}>
        <div className="row">
            {random42Products.map((item) => (
            <div className="col xl-2" key={item.id}>
                <div className={styles.itemCard}>
                    <h3>{item.name}</h3>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
export default RecommendProducts;