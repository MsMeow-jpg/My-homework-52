import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../model/notificationSlice';

function Notification() {
  const dispatch = useDispatch();
  const { message, type, isVisible } = useSelector(
    (state) => state.notification
  );

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timerId = setTimeout(() => {
      dispatch(hideNotification());
    }, 2500);

    return () => clearTimeout(timerId);
  }, [dispatch, isVisible]);

  if (!isVisible) {
    return null;
  }

  return <div className={`notification notification-${type}`}>{message}</div>;
}

export default Notification;