import styles from "./HomeBanner.module.scss";
import BannerOption from "../../Ui/BannerOption/BannerOption.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';;
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const listBannerHome = [
    { id: 1, name: 'banner01', image: 'banner01.png' },
    { id: 2, name: 'banner02', image: 'banner02.png' },
    { id: 3, name: 'banner03', image: 'banner03.png' },
    { id: 4, name: 'banner04', image: 'banner04.png' },
    { id: 5, name: 'banner05', image: 'banner05.png' },
    { id: 6, name: 'banner06', image: 'banner06.png' },
    { id: 7, name: 'banner07', image: 'banner07.png' },
]

const HomeBanner = () => {
    return (
        <div className={styles.container}>
        <div className="grid wide">
            <div className={`row ${styles.wrapper}`}>
            <div className="col xl-8">
                <div className="swiperBannerHome">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {listBannerHome.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.image}>
                                <img src={`/BannerHome/${item.image}`} alt={item.name} />
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
            </div>
            <div className="col xl-4">
                <div className={styles.bannerRight}>
                    <img src={`/BannerHome/bannerstatic01.png`} alt="bannerstatic01" />
                    <img src={`/BannerHome/bannerstatic02.png`} alt="bannerstatic02" />
                </div>
            </div>
            </div>
            <BannerOption />
        </div>
        </div>
    );
}

export default HomeBanner;