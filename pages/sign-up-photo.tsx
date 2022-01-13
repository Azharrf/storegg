import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { setSignUp } from '../services/auth';
import { getCategory } from '../services/player';
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { CategoryTypes } from '../services/data-types';


export default function SignUpPhoto() {
    const [categories, setCategories] = useState([]);
    const [favorite, setFavorite] = useState('');
    const [image, setImage] = useState<any>('');
    const [imagePreview, setImagePreview] = useState('/icon/avatar.svg');
    const [localForm, setLocalForm] = useState({
        name: '',
        email: '',
    });
    const router = useRouter();

    const getCategoryGame = useCallback(async () => {
        const data = await getCategory();
        setCategories(data);
        setFavorite(data[0]._id);
    }, [getCategory]);

    useEffect(() => {
        getCategoryGame();
    }, []);

    useEffect(() => {
        const getLocalForm = localStorage.getItem('user-form');
        setLocalForm(JSON.parse(getLocalForm!));
    }, []);

    const onSubmit = async () => {
        const data = new FormData();
        const getLocalForm = await localStorage.getItem('user-form');
        const form = JSON.parse(getLocalForm!);

        data.append('image', image);
        data.append('name', form.name);
        data.append('email', form.email);
        data.append('password', form.password);
        data.append('username', form.name);
        data.append('role', 'user');
        data.append('status', 'Y');
        data.append('favorite', favorite);

        const res = await setSignUp(data);
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
            router.push('/sign-up');
        } else {
            toast.success('Signup Berhasil!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            });
            router.push('/sign-up-success');
            localStorage.removeItem('user-form');
        }
    }

    return (
        <>
            <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
                <div className="container mx-auto">
                    <form action="">
                        <div className="form-input d-md-block d-flex flex-column">
                            <div>
                                <div className="mb-20">
                                    <div className="image-upload text-center">
                                        <label htmlFor="avatar">
                                            <Image src={imagePreview} width={120} height={120} className='img-upload'/>
                                        </label>
                                        <input 
                                            id="avatar" 
                                            type="file" 
                                            name="avatar" 
                                            accept="image/png, image/jpeg" 
                                            onChange={(e) => {
                                                const img = e.target.files![0];
                                                setImagePreview(URL.createObjectURL(img));
                                                return setImage(img);
                                            }}/>
                                    </div>
                                </div>
                                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                                <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                                <div className="pt-50 pb-50">
                                    <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite Game</label>
                                    <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game" value={favorite} onChange={(e) => setFavorite(e.target.value)}>
                                        <option value='' disabled selected>Select Category</option>
                                        {categories.map((cat: CategoryTypes) => (
                                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="button-group d-flex flex-column mx-auto">
                                <button className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" type="button" onClick={onSubmit}>Create My Account</button>
                                <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" type="button">Terms & Conditions</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
