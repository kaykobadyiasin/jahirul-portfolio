
const SectionTitle = ({ title, des }) => {
    return (
        <div className="max-w-3xl">
            <h2 className="text-4xl uppercase font-bold text-primaryColor-100">{title}</h2>
            <div className="w-[6px] h-12 my-8 mx-auto bg-primaryColor-200"></div>
            <p className="text-primaryColor-300">{des}</p>
        </div>
    );
};

export default SectionTitle;