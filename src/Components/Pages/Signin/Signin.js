import React from 'react';
import './Signin.scss';
import Form from '../../Form/Form';
import WrapperText from '../../WrapperText/WrapperText';

export default function Signin() {
   

    return (
        <main className="login-container">
            <WrapperText className={"login-container__article"} title={"Login"} description={"Get Access to your Orders, Wishlist and Recommendations"} />
            <Form  button={"Login"} className={"login-container__form"} />
        </main>
    )
}
