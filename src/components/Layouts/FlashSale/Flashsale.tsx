import styles from './Flashsale.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';;
import { Navigation} from 'swiper/modules';
import { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

import getRandomElements from '../../../utils/getRandomElements';
import CardFlashsale from '../../Ui/CardFlashsale/CardFlashsale';

const flashSale = [
        { id: 1, name: ' fs 1' },
        { id: 2, name: ' fs 2' },
        { id: 3, name: ' fs 3' },
        { id: 4, name: ' fs 4' },
        { id: 5, name: ' fs 5' },
        { id: 6, name: ' fs 6' },
        { id: 7, name: ' fs 7' },
        { id: 8, name: ' fs 8' },
        { id: 9, name: ' fs 9' },
        { id: 10, name: ' fs 10' },
        { id: 11, name: ' fs 11' },
        { id: 12, name: ' fs 12' },
        { id: 13, name: ' fs 13' },
        { id: 14, name: ' fs 14' },
        { id: 15, name: ' fs 15' },
        { id: 16, name: ' fs 16' },
        { id: 17, name: ' fs 17' },
        { id: 18, name: ' fs 18' },
        { id: 19, name: ' fs 19' },
        { id: 20, name: ' fs 20' },
        { id: 21, name: ' fs 21' },
        { id: 22, name: ' fs 22' },
        { id: 23, name: ' fs 23' },
        { id: 24, name: ' fs 24' },
        { id: 25, name: ' fs 25' },
        { id: 26, name: ' fs 26' },
        { id: 27, name: ' fs 27' },
        { id: 28, name: ' fs 28' },
        { id: 29, name: ' fs 29' },
        { id: 30, name: ' fs 30' },
    ]
function Flashsale() {

    const randomFlashsale = useMemo(() => {
        return getRandomElements(flashSale, 18);
    }, [flashSale]);
 return (
    <div className="grid wide swiperFlashsale" >
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        slidesPerGroup= {6}
        navigation
      >
        {randomFlashsale.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.fsItem}>

                <CardFlashsale />
                
              <h3>{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Flashsale;