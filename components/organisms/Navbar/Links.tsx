import cx from 'classnames'
import Link from 'next/link';

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

export default function Links(props: Partial<MenuProps>) {
    const { title, active, href="/" } = props;
    const classLinks = cx({
        'nav-link': true,
        active,
    })

    return (
        <>
            <li className="nav-item my-auto">
                <Link href={href}>
                    <a className={classLinks} aria-current="page">{title}</a>
                </Link>
            </li>
        </>
    )
}
