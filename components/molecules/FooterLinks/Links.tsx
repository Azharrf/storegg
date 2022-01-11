import Link from "next/link";

interface LinksProps {
    link?: string;
    menu?: string;
}

export default function Links(props: Partial<LinksProps>) {
    const { link, menu } = props;
    return (
        <li className="mb-6">
            <Link href={`${link}`}>
                <a className="text-lg color-palette-1 text-decoration-none">{menu}</a>
            </Link>
        </li>
    )
}
