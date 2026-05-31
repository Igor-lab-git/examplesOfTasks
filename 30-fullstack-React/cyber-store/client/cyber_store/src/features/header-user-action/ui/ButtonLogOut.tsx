interface IButtonLogOut {
    children: React.ReactNode;
    handleLogOut: () => void;
};

const ButtonLogOut = ({children, handleLogOut}: IButtonLogOut) => {
    return (
        <>
            <button onClick={handleLogOut}>
                {children}
            </button>
        </>
    )
};

export default ButtonLogOut;
