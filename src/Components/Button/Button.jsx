
const Button = ({ btnValue }) => {
    return (
        <div>
            <a
                href="/#"
                className="rounded-md px-7 py-3 text-base font-medium text-white bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5 hover:text-primaryColor-200 duration-200"
            >
                {btnValue}
            </a>
        </div>
    );
};

export default Button;