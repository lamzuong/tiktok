import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderReview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderReview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1671534000&x-signature=IGpwJ74MmZf%2B5BF56Y2suR9ndl0%3D"
            alt="Avatar"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>nguyn.avan</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyen Van A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
