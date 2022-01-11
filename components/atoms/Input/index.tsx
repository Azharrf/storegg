import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    htmlFor: string;
    id: string;
    name: string;
    desc: string;
    placeholder: string;
    type: 'text' | 'email' | 'tel' | 'password';
    disabled?: boolean
}

export default function Input(props: InputProps) {
    const { label, htmlFor, type, id, name, desc, placeholder, ...nativeProps} = props;
    return (
        <>
            <label htmlFor={htmlFor} className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
            <input type={type} className="form-control rounded-pill text-lg" id={id} name={name} aria-describedby={desc} placeholder={placeholder} {...nativeProps}/> 
        </>
    )
}
