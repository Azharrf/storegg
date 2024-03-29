import { useRouter } from 'next/router';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { NominalTypes, PaymentTypes, BanksTypes } from '../../../services/data-types';
import NominalItem from './NominalItem'
import PaymentItem from './PaymentItem'

interface TopUpFormTypes {
    nominals: NominalTypes[];
    payments: PaymentTypes[];
}

export default function TopUpForm(props: TopUpFormTypes) {
    const { nominals, payments } = props;
    const [verifyID, setVerifyID] = useState('');
    const [bankAccountName, setBankAccountName] = useState('');
    const [nominalItem, setNominalItem] = useState({});
    const [paymentItem, setPaymentItem] = useState({});
    const router = useRouter()

    const onNominalChange = (data: NominalTypes) => {
        setNominalItem(data)
    }

    const onPaymentChange = (payment: PaymentTypes, bank: BanksTypes) => {
        const data =  {
            payment,
            bank
        }
        setPaymentItem(data)
    }
    
    const onSubmit = () => {
        if (verifyID === '' || bankAccountName === '' || Object.keys(paymentItem).length === 0 || Object.keys(nominalItem).length === 0) {
            toast.warning('Silahkan isi semua data!', {
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
            const data = {
                verifyID,
                bankAccountName,
                nominalItem,
                paymentItem
            }
            localStorage.setItem('data-topup', JSON.stringify(data));
            router.push('/checkout');
        }
    }

    return (
        <>
            <div className="pt-md-50 pt-30">
                <div className="">
                    <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify ID</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID" aria-describedby="verifyID" placeholder="Enter your ID" value={verifyID} onChange={(e) => setVerifyID(e.target.value)}/>
                </div>
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                <div className="row justify-content-between">
                    {nominals.map((nominal) => (
                        <NominalItem 
                            key={nominal._id}
                            _id={nominal._id} 
                            coinQuantity={nominal.coinQuantity} 
                            coinName={nominal.coinName} 
                            price={nominal.price} 
                            onChange={() => onNominalChange(nominal)}
                        />
                    ))}
                    <div className="col-lg-4 col-sm-6"></div>
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                    <div className="row justify-content-between">
                        {payments.map((pay) => {
                            return pay.banks.map(bank => (
                                <PaymentItem 
                                    bankID={bank._id} 
                                    type={pay.type} 
                                    name={bank.bankName} 
                                    onChange={() => onPaymentChange(pay, bank)}
                                />
                            ))
                        })}
                        <div className="col-lg-4 col-sm-6"></div>
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank Account Name</label>
                <input type="text" className="form-control rounded-pill text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" value={bankAccountName} onChange={(e) => setBankAccountName(e.target.value)}/>
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <button type="button" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg" onClick={onSubmit}>Continue</button>
            </div>
        </>
    )
}
