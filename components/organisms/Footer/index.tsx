import Image from "next/image";
import Link from "next/link";
import FooterLinks from "../../molecules/FooterLinks";

export default function Footer() {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src={"/icon/logo.png"} width={60} height={60}/>
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers.<br/> untuk menjadi pemenang sejati</p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <FooterLinks 
                                    title="Company" 
                                    menu1="About Us" 
                                    link1="/" 
                                    menu2="Press Release" 
                                    link2="/" 
                                    menu3="Terms of Use" 
                                    link3="/" 
                                    menu4="Privacy & Policy" 
                                    link4="/" 
                                />
                                <FooterLinks 
                                    title="Support" 
                                    menu1="Refund Policy" 
                                    link1="/" 
                                    menu2="Unlock Rewards" 
                                    link2="/" 
                                    menu3="Live Chatting" 
                                    link3="/"
                                />
                                <FooterLinks 
                                    title="Connect" 
                                    menu1="hi@store.gg" 
                                    link1="mailto: hi@store.gg" 
                                    menu2="team@store.gg" 
                                    link2="mailto: team@store.gg" 
                                    menu3="Pasific 12, Jakarta Selatan" 
                                    link3="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" 
                                    menu4="021 - 1122 - 9090" 
                                    link4="tel: 02111229090" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
