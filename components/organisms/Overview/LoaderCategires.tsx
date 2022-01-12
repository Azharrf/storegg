import ContentLoader from "react-content-loader";

export default function LoaderCategories() {
    return (
        <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <div className="categories-card">
                <div className="d-flex align-items-center mb-0">
                    <ContentLoader
                        speed={2}
                        width={210}
                        height={135}
                        viewBox="0 0 210 135"
                        backgroundColor="#c1c1e7"
                        foregroundColor="#d7d7f8"
                    >
                        {/* Only SVG shapes */}
                        <circle cx="30" cy="30" r="30" />
                        <rect x="75" y="15" rx="3" ry="3" width="130" height="13" /> 
                        <rect x="75" y="35" rx="3" ry="3" width="130" height="13" /> 
                        <rect x="0" y="85" rx="3" ry="3" width="205" height="13" /> 
                        <rect x="0" y="110" rx="3" ry="3" width="205" height="25" /> 
                    </ContentLoader>
                </div>
            </div>
        </div>
    )
}