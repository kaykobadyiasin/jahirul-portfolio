
const Button = ({ btnValue, link }) => {
    return (
        <div>
            <a
                href={`/#${link}`}
                className="rounded-md px-7 py-3 text-base font-medium text-white bg-primaryColor-200 hover:bg-primaryColor-200 hover:bg-opacity-5  border border-transparent hover:border-primaryColor-200 duration-200"
            >
                {btnValue}
            </a>
        </div>
    );
};

export default Button;