import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Slide, toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckOutConfirm() {
    const router = useRouter()
    const [checkbox, setcheckbox] = useState(false)
    const onSubmit = async () => {
        const dataItemLocal = localStorage.getItem('data-item');
        const dataTopupLocal = localStorage.getItem('data-topup');

        const dataItem = JSON.parse(dataItemLocal!)
        const dataTopup = JSON.parse(dataTopupLocal!)

        const data = {
            voucher: dataItem._id,
            nominal: dataTopup.nominalItem._id,
            payment: dataTopup.paymentItem.payment._id,
            bank: dataTopup.paymentItem.bank._id,
            name: dataTopup.bankAccountName,
            accountUser: dataTopup.verifyID
        }
        const res = await setCheckout(data);

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
            toast.success('Checkout berhasil!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide,
            });
            router.push('/complete-checkout');
        }
    }
    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">
                I have transferred the money
                <input type="checkbox" checked={checkbox} onChange={() => setcheckbox(!checkbox)}/>
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                {checkbox ? (
                    <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" type="button" onClick={onSubmit}>Confirm Payment</button>
                ) : (
                    <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" type="button" onClick={onSubmit} disabled>Confirm Payment</button>
                )}
            </div>
        </>
    )
}
