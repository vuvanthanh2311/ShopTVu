import { Swiper, SwiperSlide } from 'swiper/react';;
import { Navigation, Grid } from 'swiper/modules';
import styles from './Category.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';


const categories = [
        { id: 1, name: ' Thời Trang Nam', image: 'thoitrangnam.png' },
        { id: 2, name: ' Thời Trang Nữ', image: 'thoitrangnu.png' },
        { id: 3, name: ' Điện Thoại', image: 'dienthoai.png' },
        { id: 4, name: ' Nhà Cửa & Đời Sống', image: 'nhacuadoisong.png' },
        { id: 5, name: ' Laptop', image: 'laptop.png' },
        { id: 6, name: ' Phụ Kiện & Trang Sức Nữ', image: 'phukientrangsuc.png' },
        { id: 7, name: ' Thiết Bị Điện Tử', image: 'thietbidientu.png' },
        { id: 8, name: ' Đồ Gia Dụng', image: 'dogiadung.png' },
        { id: 9, name: ' Làm Đẹp', image: 'lamdep.png' },
        { id: 10, name: ' Sức Khỏe', image: 'suckhoe.png' },
        { id: 11, name: ' Thể Thao', image: 'thethao.png' },
        { id: 12, name: ' Mẹ & Bé', image: 'mebe.png' },
        { id: 13, name: ' Thú Cưng', image: 'thucung.png' },
        { id: 14, name: ' Máy Ảnh & Máy Quay Phim', image: 'mayanh.png' },
        { id: 15, name: ' Giày Dép Nữ', image: 'giaydepnu.png' },
        { id: 16, name: ' Thời Trang Trẻ Em', image: 'thoitrangtreem.png' },
        { id: 17, name: ' Giày Dép Nam', image: 'giaydepnam.png' },
        { id: 18, name: ' Đồng Hồ', image: 'dongho.png' },
        { id: 19, name: ' Xe Máy', image: 'xemay.png' },
        { id: 20, name: ' Bách Hóa Online', image: 'banhhoaonline.png' },
        { id: 21, name: ' Nhà Sách Online', image: 'nhasach.png' },
        { id: 22, name: ' Giặt Giũ & Chăm Sóc Nhà Cửa', image: 'giatgiu.png' },
        { id: 23, name: ' Túi Ví Nữ', image: 'tuivinu.png' },
        { id: 24, name: ' Đồ Chơi Trẻ Em', image: 'dochoitreem.png' },
        { id: 25, name: ' Dụng cụ và thiết bị tiện ích', image: 'dungcu.png' },
        { id: 26, name: ' Balo & Túi Ví Nam', image: 'tuivinam.png' },
    ]
function Category() {
   

  return (
    <div className="grid wide swiperCategory" >
      <div className={styles.header}> Danh mục</div>
      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={0}
        grid={{ rows: 2 , fill: 'column'}}
        slidesPerView={10}
        slidesPerGroup= {10}
        navigation
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className={styles.categoryItem}>
              <div className={styles.image}>
                <img src={`/CategoryHome/${category.image}`} alt={category.name} />
              </div>
              <p className={styles.text}>{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Category;