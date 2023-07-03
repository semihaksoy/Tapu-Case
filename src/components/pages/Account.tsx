import { useState, useEffect, ChangeEvent } from "react";
import TextFieldComponent from "../common-components/TextField";
import AccountContainer from "../static-components/AccountContainer";
import DropDownField from "../common-components/DropdownField";
import CommonButton from "../common-components/CommonButton";

const Account: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [locale, setLocale] = useState<string>('tr');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const localeOptions = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Turkish' },
  ];

  useEffect(() => {
    if (email.trim() === '' || password.trim() === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [email, password, locale]);

  return (
    <AccountContainer title="Account">
      <TextFieldComponent
        label="E-mail"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <TextFieldComponent
        label="Password"
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <DropDownField
        value={locale}
        options={localeOptions}
        onChange={(value: string) => setLocale(value)}
      />
      <CommonButton disabled={isButtonDisabled}>Sign Up</CommonButton>
    </AccountContainer>
  );
}

export default Account;
