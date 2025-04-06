import styles from './css/UserFlowChart.module.css';
import image302 from '../assets/image/image 302@3x.png';
import wireframe from '../assets/image/wireframe.png';


const UserFlowChart = () => {
  	return (
    		<div className={styles.userFlowchart}>
      			<img className={styles.wireframeIcon} alt="" src={wireframe} />
      			<img className={styles.image302Icon} alt="" src={image302} />
    		</div>);
};

export default UserFlowChart;