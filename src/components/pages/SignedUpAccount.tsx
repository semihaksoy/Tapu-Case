import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setLocale } from '../../features/user/userAccountSlice';
import AccountContainer from '../static-components/AccountContainer';
import CommonButton from '../common-components/CommonButton';
import DropDownField from '../common-components/DropdownField';

interface SignedUpAccountProps {
  title: string;
}

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'tr', label: 'Turkish' },
];

const SignedUpAccount: React.FC<SignedUpAccountProps> = ({ title }) => {
  const dispatch = useDispatch();

  const userAccount = useSelector((state: any) => state.userAccount);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLocaleChange = (value: string) => {
    dispatch(setLocale(value));
  };

  return (
    <AccountContainer title={title}>
      <div style={{ alignSelf: 'flex-start', textAlign: 'left', marginLeft: "25px", fontWeight: 500 }}>
        <div>E-mail: {userAccount.email}</div>
        <div>Password: {userAccount.password}</div>
        <div>Current Locale: {userAccount.locale}</div>
      </div>
      <hr style={{ width: '90%' }} />
      <DropDownField
        value={userAccount.locale}
        options={localeOptions}
        onChange={handleLocaleChange}
      />
      <CommonButton disabled={false} onClick={handleLogout}>Log Out</CommonButton>
    </AccountContainer>
  );
};

export default SignedUpAccount;
