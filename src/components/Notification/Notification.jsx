import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';

export const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
