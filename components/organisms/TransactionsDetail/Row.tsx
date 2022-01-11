import cx from 'classnames'
import NumberFormat from 'react-number-format'
interface RowProps {
    title: string;
    value: string | number;
    active?: boolean;
}

export default function Row(props: Partial<RowProps>) {
    const { active, title, value } = props;
    const classHighlights = cx({
        'purchase-details': true,
        'color-palette-4': active,
    })
    return (
        <p className="text-lg color-palette-1 mb-20">
            {title} 
            <span className={classHighlights}>
                {typeof value === "number" ? (
                    <NumberFormat
                        value={value}
                        prefix='Rp. '
                        displayType='text'
                        thousandSeparator="."
                        decimalSeparator=','
                    />
                ) : (
                    value
                )}
            </span>
        </p>
    )
}
