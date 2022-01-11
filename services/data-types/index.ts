export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface GameItemTypes {
    _id: string;
    name: string;
    status: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    banks: [ BanksTypes ]
}

export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: number;
}

export interface VoucherTypes {
    _id: string;
    name: string;
    status: string;
    thumbnail: string;
    category: CategoryTypes;
    user: UsersTypes;
    nominals: [NominalTypes]
}

export interface UsersTypes {
    _id: string;
    name: string;
    phoneNumber: number;
}

export interface NominalTypes {
    _id: string;
    coinName: string;
    coinQuantity: number;
    price: number;
}

export interface SigninTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: string;
    name: string;
    username: string;
    email: string;
    avatar: string;
    phoneNumber: string;
}

export interface JWTPayloadTypes {
    player: UserTypes;
}

export interface CheckoutTypes {
    voucher: string;
    nominal: string;
    payment: string;
    bank: string;
    name: string;
    accountUser: string;
}

export interface HistoryVoucherTypes {
    category: string;
    coinName: string;
    coinQuantity: number;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface CountTypes {
    _id: string;
    name: string;
    value: number;
}

export interface HistoryTransactionTypes {
    _id: string;
    accountUser: string;
    category: CategoryTypes;
    historyPayment: {
        name: string;
        type: string;
        bankName: string;
        noRekening: string;
    };
    historyUser: {
        name: string;
        phoneNumber: number;
    };
    historyVoucherTopup: HistoryVoucherTypes;
    name: string;
    player: string;
    status: string;
    tax: number;
    user: string;
    value: number;
}

export interface DataTopuptypes {
    verifyID: string;
    nominalItem: {
        coinName: string;
        coinQuantity: number;
        price: number;
    };
    paymentItem: {
        payment: {
            _id: string;
            type: string;
        };
        bank: {
            name: string;
            bankName: string;
            noRekening: number;
        }
    };
    bankAccountName: string;
}
