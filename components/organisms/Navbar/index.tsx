import Image from 'next/image';
import Links from './Links';
import Auth from './Auth'
import ToggleMenu from './ToggleMenu';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                    <div className="container-fluid">
                        <Link  href="/">
                            <a className="navbar-brand">
                                <Image src="/icon/logo.svg" width={50} height={50} alt=''/>
                            </a>
                        </Link>
                        <ToggleMenu />
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                                <Links title='Home' href='/' active/>
                                <Links title='Games' href='games'/>
                                <Links title='Rewards' href='rewards'/>
                                <Links title='Discover' href='discover'/>
                                <Links title='Global Rank' href='global-rank'/>
                                <Auth />
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
