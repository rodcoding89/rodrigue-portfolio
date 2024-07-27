import { useState } from 'react';
import { Resend } from 'resend';

let RESEND_API_KEY = "re_hosg2ASF_GRrpk9V6EFAKQjcoTk9RnCKg";

async function sendContact({from,subject,name,message}){
   const resend = new Resend(RESEND_API_KEY);
   await resend.emails.send({
    from: from,
    to: 'kwayeprodrigue2012@gmail.com',
    subject: subject,
    text: name+'\n'+message
  });
}
export function Contact(){
    const [from,setFrom] = useState('');
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    const [subject,setSubject] = useState('');
    const [errorName,setErrorName] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorSubject,setErrorSubject] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    function handleSendMessage(){
        if (from === '') {
            setErrorEmail('Le champs est obligatoir');
        }
        if(name === ''){
            setErrorName('Le champs est obligatoir');
        }
        if(message === ''){
            setErrorMessage('Le champs est obligatoir');
        }
        if(subject === ''){
            setErrorSubject('Le champs est obligatoir');
        }
        if(from !== '' && name !== '' && subject !== '' && message !== ''){
            console.log(from,name,message,subject);
            setErrorEmail('');
            setErrorSubject('');
            setErrorMessage('');
            setErrorName('');
            sendContact(from,subject,name,message).then(res=>{
                console.log('email send',res);
            }).catch(err=>{
                console.log('err',err);
            });
        }
    }
    return (
       <div className="contact center flex align-items-center height87">
        <div className="w-100 m-30">
            <h1>Me contacter</h1>
            <div className="bloc-contact flex w-100 align-items-flex-start justify-content-space-between gap75">
                <div className="form w-60">
                    <div className="top flex gap25">
                        <div className="iteminput w-100">
                            <label>Nom complet</label><br/>
                            <input onChange={(e)=>setName(e.target.value)} className="input" type="text" required placeholder="Ajouter votre nom complet"/>
                            <span className='error'>{errorName}</span>
                        </div>
                        <div className="iteminput w-100">
                            <label>Email</label><br/>
                            <input onChange={(e)=> setFrom(e.target.value)} className="input" type="email" required placeholder="Ajouter votre email"/>
                            <span className='error'>{errorEmail}</span>
                        </div>
                    </div>
                    <div className="iteminput w-100">
                        <label>Sujet</label><br/>
                        <input onChange={(e)=> setSubject(e.target.value)} className="inputs" type="email" required placeholder="Ajouter votre email"/>
                        <span className='error'>{errorSubject}</span>
                    </div>
                    <div className="middle w-100">
                        <label>Message</label><br/>
                        <textarea onChange={(e)=>setMessage(e.target.value)} className="area" placeholder="Votre message"></textarea>
                        <span className='error'>{errorMessage}</span>
                    </div>
                    <button onClick={()=>handleSendMessage()} className="button-75 mt-10"><span>Envoyer votre message</span></button>
                </div>
                <div className="right w-40">
                    <h3>Coordonné direct</h3>
                    <div className="flex align-items-center justify-content-flex-start gap20">
                        <span className="spanIcon flex align-items-center justify-content-center">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                        <div className='flex flex-direction-column justify-content-flex-start flex1'>
                            <address className="word-break regular"> 123 rue Saint-Sébastien, 78300 poissy France</address>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-flex-start gap20">
                        <span className="spanIcon flex align-items-center justify-content-center">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        <div className='flex flex-direction-column justify-content-flex-start flex1'>
                            Téléphone 
                            <span className="word-break regular">
                                <a href="tel:0033751255598"> +33 75 12 55 598
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-flex-start gap20">
                        <span className="spanIcon flex align-items-center justify-content-center">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <div className='flex flex-direction-column justify-content-flex-start flex1'>
                            Email 
                            <span className="word-break regular">
                                <a href="mailto:kwayeprodrigue2012@gmail.com"> kwayeprodrigue2012@gmail.com</a>
                            </span>
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-flex-start gap20">
                        <span className="spanIcon flex align-items-center justify-content-center">
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                        </span>
                        <div className='flex flex-direction-column justify-content-flex-start flex1'>
                            <a className='regular' href="http://www.portofolio.fr">portofolio.fr</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}