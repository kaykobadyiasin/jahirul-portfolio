
const Breadcrumb = ({ items }) => {
    return (
        <nav className="breadcrumb">
            <ol className="flex">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index < items.length - 1 ? (
                            <a href={item.url} className="text-blue-500 hover:underline">
                                {item.text}
                            </a>
                        ) : (
                            <span className="text-gray-500">{item.text}</span>
                        )}
                        {index < items.length - 1 && (
                            <svg
                                className="h-5 w-auto text-gray-500 mx-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
