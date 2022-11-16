import "../../styles.scss";

export default function Button(props) {
    function handleClick() {
        if (props.onClick) props.onClick();
    }
    return (
        <button onClick={handleClick} className="btn button ">
            {props.children}
        </button>
    );
}


