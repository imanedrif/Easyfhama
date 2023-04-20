import React, { useState } from 'react'
import Header from '../layouts/Header'
import '../assets/css/payment.css'
import { SecondryButton } from '../layouts/Buttons'
import paypal from '../assets/images/paypal.svg'
import visa from '../assets/images/visa.svg'
import mastercard from '../assets/images/mastercard.svg'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Payment = () => {

    const navigate = useNavigate()

    const [paymentMethod, setPaymentmethod] = useState('')
    const [card, setCard] = useState('')
    const [isclicked, setIsclicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // const paymentId = generatePaymentId();

        Swal.fire({
            title: 'Are you sure?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui , Je paye!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Paye!',
                'paiement avec succès',
                'success'
              )
              navigate ('/')
            }
        })
    }


    const handlePaymentchange = (e) => {
        setPaymentmethod(e.target.value)
    }
    const handleCard = (option) => {
        setCard(option)
        console.log(card)
    }

    return (
        <div id='payment'>
            <Header />
            <div className='pay-card'>
                <div className='payment-container'>
                    <div className='payment-header'>
                        <h2>Paiment</h2>
                    </div>
                    <div className='payment-methods'>
                        <label>choisir le mode de Paiment:</label>
                        <div className='payment-method'>
                            <input
                                type='radio'
                                id='bankTransfer'
                                name='paymentMethod'
                                value='bankTransfer'
                                checked={paymentMethod === 'bankTransfer'}
                                onChange={handlePaymentchange}
                            />
                            <label htmlFor='bankTransfer'>Virement bancaire</label>
                        </div>
                        <div className='payment-method'>
                            <input
                                type='radio'
                                id='card'
                                name='paymentMethod'
                                value='card'
                                checked={paymentMethod === 'card'}
                                onChange={handlePaymentchange}
                             
                            />
                            <label htmlFor='card'>Paiement par carte</label>
                        </div>
                    </div>
                    {paymentMethod === 'bankTransfer' && (
                        <form className='form'>
                            <div className='form-header'>
                                <h3>RIB:</h3>
                                <label htmlFor="">2452432537623878778728</label>
                            </div>
                            <div className='form-btn'>
                                <SecondryButton text="payer et envoyer reçu sur whatsApp"  onClick={(e)=>{handleSubmit(e)}} />
                            </div>
                        </form>
                    )}
                    {paymentMethod === 'card' && (
                        <div className='card-container'>
                            <div className='card-header'>
                                <h2>choisir type de carte:</h2>
                            </div>
                            <div className='cards'>
                                <img src={paypal} alt="Paypal" onClick={() => handleCard('paypal')}/>
                                <img src={visa} alt="Visa" onClick={() => handleCard('visa')} />
                                <img src={mastercard} alt="Mastercard" onClick={() => handleCard('mastercard')} />
                            </div>
                            <div className='payment-form'>
                                {card === 'visa' && (
                                    <form className='form-payment'>
                                        <h3>Paiment Visa</h3>
                                        <input type="text" placeholder="Card Number" />
                                        <input type="text" placeholder="Cardholder Name" />
                                        <input type="text" placeholder="Expiration Date (MM/YY)" />
                                        <input type="text" placeholder="CVV" />
                                        <SecondryButton text="Payer" onClick={(e)=>{handleSubmit(e)}}  />
                                    </form>
                                )}
                                {card === 'paypal' && (
                                    <form className='form-payment'>
                                        <h3>Paiement Paypal</h3>
                                        <input type="email" placeholder="Email Paypal" />
                                        <input type="password" placeholder="Mot de passe Paypal" />
                                        <SecondryButton text="Payer" onClick={(e)=>{handleSubmit(e)}}  />
                                    </form>
                                )}
                                {card === 'mastercard' && (
                                    <form className='form-payment'>
                                        <h3>Paiment MasterCard</h3>
                                        <input type="text" placeholder="Card Number" />
                                        <input type="text" placeholder="Cardholder Name" />
                                        <input type="text" placeholder="Expiration Date (MM/YY)" />
                                        <input type="text" placeholder="CVV" />
                                        <SecondryButton text="Payer" onClick={(e)=>{handleSubmit(e)}} />
                                    </form>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Payment