export interface StepItemProps {
    title?: string;
    text?: string;
    icon?: 'step1' | 'step2' | 'step3';
}

export default function StepItem(props: Partial<StepItemProps>) {
    const { title, text, icon } = props;

    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <img src={`/icon/${icon}.svg`} alt="Icon Step" width={80} height={80} className='mb-30'/>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
                <p className="text-lg color-palette-1 mb-0">{text}</p>
            </div>
        </div>
    )
}
