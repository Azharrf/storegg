import ContentLoader from "react-content-loader";

interface ItemProps {
    action: boolean;
}

export default function LoaderItem(props: ItemProps) {
    const { action } = props;

    return (
        <>
            {action ? (
                <tr className="align-middle">
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={210}
                            height={80}
                            viewBox="0 0 520 150"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="5" ry="5" width="200" height="140" />
                            <rect x="230" y="30" rx="5" ry="5" width="250" height="40" />
                            <rect x="230" y="85" rx="5" ry="5" width="250" height="20" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={170}
                            height={80}
                            viewBox="0 0 400 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="250" height="40" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={145}
                            height={80}
                            viewBox="0 0 350 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="250" height="40" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={105}
                            height={80}
                            viewBox="0 0 250 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="220" height="40" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={175}
                            height={80}
                            viewBox="0 0 420 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="15" rx="50" ry="100" width="250" height="90" />
                        </ContentLoader>
                    </th>
                </tr>
            ) : (
                <tr className="align-middle">
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={210}
                            height={80}
                            viewBox="0 0 520 150"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="0" rx="5" ry="5" width="200" height="140" />
                            <rect x="230" y="30" rx="5" ry="5" width="250" height="40" />
                            <rect x="230" y="85" rx="5" ry="5" width="250" height="20" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={170}
                            height={80}
                            viewBox="0 0 400 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="250" height="40" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={145}
                            height={80}
                            viewBox="0 0 300 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="250" height="40" />
                        </ContentLoader>
                    </th>
                    <th scope="row">
                        <ContentLoader 
                            speed={2}
                            width={105}
                            height={80}
                            viewBox="0 0 250 140"
                            backgroundColor="#c1c1e7"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="40" rx="5" ry="5" width="250" height="40" />
                        </ContentLoader>
                    </th>
                </tr>
            )}
        </>
    )
}
