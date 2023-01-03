
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (  
        <div className={cx('wrapper')}> 
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d9a4e2ab41aec2fb054d05d9b1322e40~c5_100x100.jpeg?x-expires=1672930800&x-signature=O114YyMtx3WN10Mq%2B1OP8Qy0cMg%3D" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ngyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;