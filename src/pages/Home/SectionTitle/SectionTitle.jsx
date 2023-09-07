

const SectionTitle = ({img1, subheading, img2, heading}) => {
    return (
        <div className="grid items-center justify-center space-y-4 my-10">
            <div className="flex items-center justify-center gap-4">
                <div>
                    <img className="h-10 w-10" src={img1} alt="" />
                </div>
                <div>
                    <h2 className="text-xl font-ubuntu text-yellow-600 text-center">{subheading}</h2>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div>
                    <img className="h-10 w-10" src={img2} alt="" />
                </div>
                <div>
                    <h2 className="text-yellow-600 text-3xl font-ubuntu">{heading}</h2>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;