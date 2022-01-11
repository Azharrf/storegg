import Link from 'next/link';
import { useState } from 'react';
import cx from 'classnames'
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setSignIn } from '../../../services/auth';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const className ={
        label: cx('form-label text-lg fw-medium color-palette-1 mb-10')
    }
    const router = useRouter()

    const onSubmit = async () => {
        const data = {
            email,
            password,
        }
        if (!email || !password) {
            toast.error('Email dan Password harus diisi!', {
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
            const res = await setSignIn(data);
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
                })
            } else {
                toast.success('Signin berhasil!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Slide,
                })
                const {token} = res.data;
                const tokenBase64 = Buffer.from(token).toString('base64');
                Cookies.set('token', tokenBase64, { expires: 1 })
                router.push('/')
            }
        }
    }

    return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
            <div className="pt-50">
                <label htmlFor="email" className={className.label}>Email Address</label>
                <input type="email" className="form-control rounded-pill text-lg" id="email" name="email" aria-describedby="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="pt-30">
                <label htmlFor="password" className={className.label}>Password</label>
                <input type="password" className="form-control rounded-pill text-lg" id="password" name="password" aria-describedby="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" type='button' onClick={onSubmit}>Continue to Sign In</button>
                <Link href="/sign-up">
                    <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">Sign Up</a>
                </Link>
            </div>
        </>
    )
}
