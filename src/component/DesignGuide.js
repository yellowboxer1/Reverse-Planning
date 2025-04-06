import styles from './css/DesignGuide.module.css';
import DesignGuide1 from '../assets/image/Design Guide@3x.png';

const DesignGuide = () => {
    return (
          <div className={styles.designGuide}>
                <img className={styles.designGuideIcon} alt="" src={DesignGuide1} />
          </div>);
};

export default DesignGuide;
