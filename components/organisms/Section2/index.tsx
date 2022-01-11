import StepItem from "../../molecules/StepItem"

export default function TransactionStep() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
                    It’s Really That<br/> Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <StepItem title="1. Start" text="Pilih salah satu game yang ingin kamu top up" icon="step1"/>
                    <StepItem title="2. Fill Up" text="Top up sesuai dengan nominal yang sudah tersedia" icon="step2"/>
                    <StepItem title="3. Be a Winner" text="Siap digunakan untuk improve permainan kamu" icon="step3"/>
                </div>
            </div>
        </section>
    )
}
