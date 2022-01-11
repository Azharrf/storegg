import Image from "next/image";
import Link from "next/link";
import cx from 'classnames'

interface MenuItemProps {
    icon: 'overview' | 'transaction' | 'message' | 'card' | 'reward' | 'settings' | 'logout';
    title: string;
    link?: string;
    active?: boolean;
    onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, link = '#', active, onClick } = props;
    const classActive = cx({
        'item': true,
        'mb-30': true,
        active,
    })

    return (
        <div className={classActive}>
            <div className="icon me-3 d-flex justify-content-center align-item-center">
                <Image src={`/icon/ic-${icon}.svg`} width={25} height={25}/>
            </div>
            <p className="item-title m-0">
                {onClick ? (
                    <a className="text-lg text-decoration-none" onClick={onClick}>{title}</a>
                ) : (
                    <Link href={link}>
                        <a className="text-lg text-decoration-none">{title}</a>
                    </Link>
                )}
            </p>
        </div>
    )
}
