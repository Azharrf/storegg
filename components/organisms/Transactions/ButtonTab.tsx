import Link from "next/link";
import cx from 'classnames';
interface ButtonTabProps {
    active: boolean;
    title: string;
    onClick: () => void;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
    const { active, title, onClick } = props;
    const classActive = cx({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active,
    })
    return (
        <button type="button" onClick={onClick} className={classActive}>
            {title}
        </button>
    )
}
