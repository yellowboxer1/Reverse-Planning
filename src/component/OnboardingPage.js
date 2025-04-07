import styles from './css/OnboardingPage.module.css';
import g3927 from '../assets/image/Group 1000003927 1@3x.png';
import g3928 from '../assets/image/Group 1000003928 1@3x.png';
import g3921 from '../assets/image/Group 1000003921@4x.png';
import i324 from '../assets/image/image 324.png';
import OnboardingPage1 from '../assets/image/Onboarding Page@3x.png';
import i321 from '../assets/image/image 321@3x.png';
import image48 from '../assets/image/image 48@3x.png';
import i49 from '../assets/image/image 49@3x.png';
import i336 from '../assets/image/image 336@3x.png';
import i01 from '../assets/image/img 01@3x.png';


const OnboardingPage = () => {
	return (
	<div className={styles.onboardingPage}>
	<div className={styles.onboardingPageChild} />
	<img className={styles.group10000039271} alt="" src={g3927} />
	<img className={styles.image324Icon} alt="" src={i324} />
	<div className={styles.aiParent}>
	<div className={styles.aiContainer}>
	<p className={styles.p}>{`사용자 경험의 첫 단계인 온보딩 페이지에서는 개인화 요소를 최우선으로 설계했습니다. `}</p>
	<p className={styles.p}>{`정확한 사이즈 입력과 AI 기반 퍼스널컬러 및 피부타입 측정을 통해, `}</p>
	<p className={styles.p}>쇼핑 여정의 시작부터 맞춤형 경험을 제공합니다.</p>
	</div>
	<div className={styles.div}>01</div>
	</div>
	<img className={styles.onboardingPage1} alt="" src={OnboardingPage1} />
	<img className={styles.image321Icon} alt="" src={i321} />
	<div className={styles.image323} />
	<div className={styles.image48Parent}>
	<img className={styles.image48Icon} alt="" src={image48} />
	<div className={styles.image50} />
	<img className={styles.icon} alt="" src={i49} />
	</div>
	<div className={styles.image336Parent}>
	<img className={styles.image336Icon} alt="" src={i336} />
	<div className={styles.image501} />
	<img className={styles.icon} alt="" src={i49} />
	</div>
	<div className={styles.imageParent}>
	<img className={styles.image48Icon} alt="" src={i01} />
	<img className={styles.icon} alt="" src={i49} />
	<div className={styles.image502} />
	</div>
	<div className={styles.onboardingMain}>Onboarding, Main</div>
	<div className={styles.bodySize}>body size</div>
	<div className={styles.skinType}>skin type</div>
	<img className={styles.group10000039281} alt="" src={g3928} />
	<img className={styles.group10000039211} alt="" src={g3921} />
	</div>);
	};
	export default OnboardingPage;