
const Button = ({ btnValue, link, color }) => {
    return (
        <div>
            <a
                href={`/${link}`}
                className={`rounded px-7 py-3 text-base font-medium hover:text-primaryColor-200 bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200 ${color}`}
            >
                {btnValue}
            </a>
        </div>
    );
};

export default Button;