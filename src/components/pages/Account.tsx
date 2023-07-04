import { useState, useEffect, ChangeEvent } from "react";
import TextFieldComponent from "../common-components/TextField";
import AccountContainer from "../static-components/AccountContainer";
import DropDownField from "../common-components/DropdownField";
import CommonButton from "../common-components/CommonButton";
import { useDispatch } from 'react-redux';
import { setUserAccount } from "../../features/user/userAccountSlice";

const localeOptions = [
    { value: 'en', label: 'English' },
    { value: 'tr', label: 'Turkish' },
];

const Account: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [locale, setLocale] = useState<string>('tr');
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (email.trim() === '' || password.trim() === '') {
        setIsButtonDisabled(true);
        } else {
        setIsButtonDisabled(false);
        }
    }, [email, password, locale]);

    const handleSignUp = () => {
        dispatch(setUserAccount({ email, password, locale }));
    };

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
            <CommonButton disabled={isButtonDisabled} onClick={handleSignUp}>Sign Up</CommonButton>
        </AccountContainer>
  );
}

export default Account;
