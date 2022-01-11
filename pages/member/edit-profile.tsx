import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';

interface UserStateTypes {
    name: string,
    email: string,
    avatar: any,
    phoneNumber: string,
}

export default function EditProfile() {
    const API_IMG = process.env.NEXT_PUBLIC_IMG
    const [imagePreview, setImagePreview] = useState('/');
    const router = useRouter();
    const [user, setUser] = useState<UserStateTypes>({
        name: '',
        email: '',
        avatar: '',
        phoneNumber: '',
    });

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const jwtToken = Buffer.from(token, 'base64').toString('ascii');
            const payload: JWTPayloadTypes = jwtDecode(jwtToken);
            const userPayload: UserTypes = payload.player;
            setUser(userPayload);
        }
    }, [])

    const onSubmit = async () => {
        const data = new FormData();

        data.append('avatar', user.avatar);
        data.append('name', user.name);
        data.append('phoneNumber', user.phoneNumber);
        
        const res = await updateProfile(data);

        if (res.error) {
            toast.error(res.message, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            });
        } else {
            toast.success('Update profile berhasil', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            });
            Cookies.remove('token');
            router.push('/sign-in');
        }
    }
    return (
        <>
            <Head>
                <title>Store GG - Member</title>
            </Head>
            <Sidebar activeMenu='settings' />
            <section className="edit-profile overflow-auto">
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                            <form action="">
                                <div className="photo d-flex">
                                    <div className="image-upload">
                                        <label htmlFor="avatar">
                                            {imagePreview ? (
                                                <img src={`${API_IMG}/${user.avatar}`} width={90} height={90} style={{borderRadius: '100%'}} alt='Photo Profile'/>
                                            ) : (
                                                <img src={imagePreview} width={90} height={90} style={{borderRadius: '100%'}} alt='Photo Profile'/>
                                            )}
                                        </label>
                                        <input 
                                            id="avatar" 
                                            type="file" 
                                            name="avatar" 
                                            accept="image/png, image/jpeg" 
                                            onChange={(e) => {
                                                const img = e.target.files![0];
                                                setImagePreview(URL.createObjectURL(img));
                                                return setUser({ ...user, avatar: img });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="pt-30">
                                    <Input 
                                        label='Full Name'
                                        htmlFor='name'
                                        type='text'
                                        id='name'
                                        name='name'
                                        desc='name'
                                        placeholder='Enter your name'
                                        value={user.name}
                                        onChange={(e) => setUser({...user, name: e.target.value})}
                                    />
                                </div>
                                <div className="pt-30">
                                    <Input 
                                        label='Email Address'
                                        htmlFor='email'
                                        type='email'
                                        id='email'
                                        name='email'
                                        desc='email'
                                        placeholder='Enter your email address'
                                        value={user.email}
                                        disabled
                                    />
                                </div>
                                <div className="pt-30">
                                    <Input 
                                        label='Phone Number'
                                        htmlFor='phoneNumber'
                                        type='tel'
                                        id='namphoneNumber'
                                        name='namphoneNumber'
                                        desc='namphoneNumber'
                                        placeholder='Enter your phone number'
                                        value={user.phoneNumber}
                                        onChange={(e) => setUser({...user, phoneNumber: e.target.value})}
                                    />
                                </div>
                                {/* <div className="pt-30">
                                    <Input 
                                        label='Phone'
                                        htmlFor='phone'
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        desc='phone'
                                        placeholder='Enter your phone number'
                                    />
                                </div> */}
                                <div className="button-group d-flex flex-column pt-50">
                                    <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill" onClick={onSubmit}>Save My Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
