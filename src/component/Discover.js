import styles from './css/Discover.module.css';
import epick from '../assets/image/epick@3x.png';
import talkLounge from '../assets/image/talk lounge@3x.png';
import detail from '../assets/image/detail.png';
import image1 from '../assets/image/image_fx_ (10) 1.png';
import discoverall from '../assets/image/Discover All@3x.png';
import category from '../assets/image/category@3x.png';
import frame from '../assets/image/image 49@3x.png';
import vec01 from '../assets/image/Vector 01.svg';
import vec02 from '../assets/image/Vector 02.svg';
import v03 from '../assets/image/Vector 03.svg';
import g35 from '../assets/image/Group 1000003935.svg';
import video1 from '../assets/video/detail.mp4';
import video2 from '../assets/video/size.mp4';

const Discover = () => {
  	return (
    		<div className={styles.discover}>
      			<div className={styles.discoverChild} />
      			<img className={styles.epick3x1Icon} alt="" src={epick} />
      			<img className={styles.detail1Icon} alt="" src={detail} />
      			<img className={styles.talkLounge3x1} alt="" src={talkLounge} />
      			<img className={styles.imageFx101} alt="" src={image1} />
      			<div className={styles.discoverItem} />
      			<div className={styles.parent}>
        				<div className={styles.div}>
          					<p className={styles.p}>{`다양한 상품 카테고리부터 개성 넘치는 스타일링 샷, 활발한 커뮤니티까지 한눈에 만나보세요. `}</p>
          					<p className={styles.p}>카테고리, 에픽, 톡라운지를 통해 패션의 모든 영역을 탐색할 수 있는 공간입니다.</p>
        				</div>
        				<div className={styles.div1}>04</div>
      			</div>
      			<img className={styles.discoverAll3x1} alt="" src={discoverall} />
      			<div className={styles.imageParent}>
        				<img className={styles.imageIcon} alt="" src={category} />
        				<div className={styles.image50} />
        				<img className={styles.icon} alt="" src={frame} />
      			</div>
      			<div className={styles.imageGroup}>
        				<video className={styles.imageIcon1} alt="" src={video1} autoPlay muted loop playsInline />
        				<img className={styles.icon} alt="" src={frame} />
        				<div className={styles.image50} />
      			</div>
      			<img className={styles.discoverInner} alt="" src={vec01} />
      			<img className={styles.vectorIcon} alt="" src={vec02} />
      			<img className={styles.discoverChild1} alt="" src={v03} />
      			<img className={styles.groupIcon} alt="" src={g35} />
      			<img className={styles.discoverChild2} alt="" src={g35}  />
      			<img className={styles.discoverChild3} alt="" src={g35}  />
      			<div className={styles.epickMain}>
        				<span className={styles.epick}>{`EPICK `}</span>
        				<span>MAIN</span>
      			</div>
      			<div className={styles.div2}>
        				<p className={styles.p2}>{`나만을 위한 맞춤 코디와 스타일링 영감을 만나보세요.  `}</p>
        				<p className={styles.p}>트렌디한 해시태그별 스타일링 제안으로</p>
        				<p className={styles.p}>당신의 패션 감각을 한 층 업그레이드 합니다.</p>
      			</div>
      			<div className={styles.talkLounge}>
        				<span className={styles.epick}>{`tALK `}</span>
        				<span>LOUNGE</span>
      			</div>
      			<div className={styles.div3}>
        				<p className={styles.p}>취향이 통하는 사람들과 자유롭게 소통하는 커뮤니티, 톡 라운지.</p>
        				<p className={styles.p}> 관심 있는 주제로 이야기 나누며 트렌드를 함께 만들어보세요.</p>
      			</div>
				  <div className={styles.sizeRecommendation}>
					<p className={styles.p}>
						<span className={styles.size}>{`Size `}</span>
						<span>recommendation</span>
					</p>
				</div>
      			<div className={styles.aiContainer}>
        				<p className={styles.p}>리뷰 찾아 다니느라 힘드셨죠?</p>
          					<p className={styles.p}> AI 분석 기반 추천으로, 나에게 꼭 맞는 사이즈와</p>
          					<p className={styles.p}> 완벽한 핏을 바로 추천해드려요</p>
          					</div>
          					<div className={styles.imageContainer}>
            						<video className={styles.imageIcon1} alt="" src={video2} autoPlay muted loop playsInline />
            						<img className={styles.icon} alt="" src={frame} />
            						<div className={styles.image50} />
          					</div>
          					</div>);
        				};
        				
        				export default Discover;