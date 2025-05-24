import styles from './CardFlashsale.module.scss';


function CardFlashsale() {
  return (
    <div className={styles['card-flashsale']}>
      <div className={styles['card-flashsale__content']}>
        <div className={styles['card-flashsale__content__title']}>
          <h2>Flash Sale</h2>
        </div>
        <div className={styles['card-flashsale__content__body']}>
          <p>Get the best deals on our flash sale!</p>
        </div>
      </div>
    </div>
  );
}
export default CardFlashsale;