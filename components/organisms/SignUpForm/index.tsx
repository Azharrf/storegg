import Link from 'next/link';
import cx from 'classnames'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Slide, toast } from 'react-toastify';

export default function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const cek = async () => {
        const getLocalForm = await localStorage.getItem('user-form');
        const form = JSON.parse(getLocalForm!);
        if (form) {
            setName(form.name)
            setPassword(form.password)
        }
    }

    useEffect(() => {
        cek();
    }, [cek])

    const className = {
        label: cx('form-label text-lg fw-medium color-palette-1 mb-10')
    }

    const onSubmit = () => {
        const userForm = {
            email,
            name,
            password
        };

        if (name === '' || email === '' || password === '') {
            toast.error('Full Name, Email, Password tidak boleh kosong!', {
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
            localStorage.setItem('user-form', JSON.stringify(userForm));
            router.push('/sign-up-photo')
        }
    }

    return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
            <div className="pt-50">
                <label htmlFor="name" className={className.label}>Full Name</label>
                <input type="text" className="form-control rounded-pill text-lg" id="name" name="name" aria-describedby="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="pt-30">
                <label htmlFor="email" className={className.label}>Email Address</label>
                <input type="email" className="form-control rounded-pill text-lg" id="email" name="email" aria-describedby="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="pt-30">
                <label htmlFor="password" className={className.label}>Password</label>
                <input type="password" className="form-control rounded-pill text-lg" id="password" name="password" aria-describedby="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                    <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>Continue</button>
                    <button type="button" className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill">Sign In</button>
            </div>
        </>
    )
}
