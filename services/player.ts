import axios from 'axios'
import callAPI from '../config/api';
import { CheckoutTypes } from './data-types';

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export async function getFeaturedGame() {
    const URL = 'players/landingpage';
    
    const getData = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const res = getData.data;

    return res.data
}

export async function getDetailVoucher(id: string) {
    const URL = `players/${id}/detail`;
    
    const getData = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const res = getData.data;

    return res.data
}

export async function getCategory() {
    const URL = 'players/category';
    const getData = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const res = getData.data;

    return res.data
}

export async function setCheckout(data: CheckoutTypes) {
    const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
    
    return callAPI({
        url,
        method: 'POST',
        data,
        token: true
    })
}