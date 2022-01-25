import ReactDOM from 'react-dom';
import styles from '../../styles/Notification.module.css';

function Notification({ title, message, status }) {

    return ReactDOM.createPortal((
        <div className={`${styles.notification} ${status === 'success' ? styles.success : (status === 'error' ? styles.error : '')}`}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    ), document.getElementById('notification'));
}

export default Notification;