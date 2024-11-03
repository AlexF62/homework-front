type ButtonPropsType = {
    callBack: () => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
    name?: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
    children?: React.ReactNode;
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack();
    };

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
            {props.name || props.children}
        </button>
    );
};
