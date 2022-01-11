import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SidebarProps {
    activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
    const { activeMenu } = props;
    const router = useRouter();

    const onLogOut = () => {
        Cookies.remove('token');
        router.push('/sign-in');
    };

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title='Overview' icon='overview' link='/member' active={activeMenu === 'overview'}/>
                    <MenuItem title='Transaction' icon='transaction' link='/member/transactions' active={activeMenu === 'transactions'}/>
                    <MenuItem title='Messages' icon='message' link='/'/>
                    <MenuItem title='Card' icon='card' link='/'/>
                    <MenuItem title='Rewards' icon='reward' link='/'/>
                    <MenuItem title='Settings' icon='settings' link='/member/edit-profile' active={activeMenu === 'settings'}/>
                    <MenuItem title='Log Out' icon='logout' onClick={onLogOut}/>
                </div>
                <Footer />
            </div>
        </section>
    )
}
