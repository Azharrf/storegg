import Links from "./Links";

interface FooterProps {
    title: string;
    menu1?: string;
    link1?: string;
    menu2?: string;
    link2?: string;
    menu3?: string;
    link3?: string;
    menu4?: string;
    link4?: string;
}

export default function FooterLinks(props: Partial<FooterProps>) {
    const { title, link1, link2, link3, link4, menu1, menu2, menu3, menu4 } = props;
    return (
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
            <ul className="list-unstyled">
                <Links link={link1} menu={menu1} />
                <Links link={link2} menu={menu2} />
                <Links link={link3} menu={menu3} />
                <Links link={link4} menu={menu4} />
            </ul>
        </div>
    )
}
