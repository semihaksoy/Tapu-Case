import Button from '@mui/material/Button';

interface CommonButtonProps {
    children: React.ReactNode;
    disabled: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({ children, disabled }) => {
    return (
        <Button
            disabled={disabled}
            variant="contained"
            sx={{
                width: '100%',
                maxWidth: '400px',
                fontWeight: 'bold',
                textTransform: 'none',
                minHeight: '56px',
                backgroundColor: 'rgb(232, 34, 35)',
                borderRadius: '10px',
                color: 'white',
                marginTop: '30px',
            }}
        >
            {children}
        </Button>
    );
};

export default CommonButton;