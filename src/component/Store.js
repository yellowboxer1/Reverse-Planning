import styles from './css/Store.module.css';
import i325 from '../assets/image/image 324.png';
import store from '../assets/image/store@3x.png';
import store2 from '../assets/image/Store & Save@3x.png';

const Store = () => {
  	return (
    		<div className={styles.store}>
      			<img className={styles.image325Icon} alt="" src={i325} />
      			<div className={styles.parent}>
        				<div className={styles.div}>
          					<p className={styles.p}>{`인기 스토어 랭킹과 사용자가 찜한 스토어를 한곳에서 확인하세요. `}</p>
          					<p className={styles.p}>맞춤형 추천과 아이템 모아보기로 더욱 효율적인 쇼핑 경험을 제공합니다.</p>
        				</div>
        				<div className={styles.div1}>03</div>
        				<img className={styles.store1Icon} alt="" src={store} />
      			</div>
      			<img className={styles.storeSave} alt="" src={store2} />
    		</div>);
};

export default Store;