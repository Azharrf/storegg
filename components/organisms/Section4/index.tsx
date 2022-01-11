import React from 'react'
import ReachedItem from '../../molecules/ReachedItem'
import Gap from '../../molecules/ReachedItem/Gap'

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem title='290M+' text='Players Top Up' />
                    <Gap />
                    <ReachedItem title='500' text='Games Available' />
                    <Gap />
                    <ReachedItem title='99,9%' text='Happy Players' />
                    <Gap />
                    <ReachedItem title='4.7' text='Rating Worlwide' />
                </div>
            </div>
        </section>
    )
}
