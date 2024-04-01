
const SectionTitle = ({ titleP, title, titleC, des }) => {
    return (
        <div className="max-w-3xl">
            <h2 className="text-4xl uppercase font-bold text-secondaryColor-200"><span className="text-primaryColor-200">{titleP}</span> {title} <span className="text-primaryColor-200">{titleC}</span></h2>
            <div className="w-[6px] h-12 my-8 mx-auto bg-primaryColor-200"></div>
            <p className="text-secondaryColor-300">{des}</p>
        </div>
    );
};

export default SectionTitle;