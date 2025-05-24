import { Swiper, SwiperSlide } from 'swiper/react';;
import { Navigation, Grid } from 'swiper/modules';
import styles from './HomePageMall.module.scss'
import getRandomElements from '../../../utils/getRandomElements';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';


const ofsCarousel = [
        { id: 1, name: ' 1' },
        { id: 2, name: ' 2' },
        { id: 3, name: ' 3' },
        { id: 4, name: ' 4' },
        { id: 5, name: ' 5' },
        { id: 6, name: ' 6' },
        { id: 7, name: ' 7' },
        { id: 8, name: ' 8' },
        { id: 9, name: ' 9' },
        { id: 10, name: ' 10' },
        { id: 11, name: ' 11' },
        { id: 12, name: ' 12' },
        { id: 13, name: ' 13' },
        { id: 14, name: ' 14' },
        { id: 15, name: ' 15' },
        { id: 16, name: ' 16' },
        { id: 17, name: ' 17' },
        { id: 18, name: ' 18' },
        { id: 19, name: ' 19' },
        { id: 20, name: ' 20' },
        { id: 21, name: ' 21' },
        { id: 22, name: ' 22' },
        { id: 23, name: ' 23' },
        { id: 24, name: ' 24' },
        { id: 25, name: ' 25' },
        { id: 26, name: ' 26' },
        { id: 27, name: ' 27' },
        { id: 28, name: ' 28' },
        { id: 29, name: ' 29' },
        { id: 30, name: ' 30' },
    ]
function HomePageMall() {
   const ofsRandom = getRandomElements(ofsCarousel, 15);

  return (
    <div className="grid wide" >
        <div className="row">
            <div className="col xl-4">
                banner
            </div>
            <div className="col xl-8 swiperHPMall">
                <Swiper
                    modules={[Navigation, Grid]}
                    spaceBetween={16}
                    grid={{ rows: 2 , fill: 'column'}}
                    slidesPerView={4}
                    slidesPerGroup= {4}
                    navigation
                >
                    {ofsRandom.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.item}>
                        {/* <img src={`/images/${category.name}.jpg`} alt={category.name} /> */}
                        <h3>{item.name}</h3>
                        </div>
                    </SwiperSlide>
                    ))}
                    <SwiperSlide key={16}>
                        <div className={styles.item}>
                        {/* <img src={`/images/${category.name}.jpg`} alt={category.name} /> */}
                        <h3>Xem tat ca </h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
     
    </div>
  )
}
export default HomePageMall;