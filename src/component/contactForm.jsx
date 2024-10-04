import React from 'react';
import { MdMessage } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import Button from './Button';

const ContactForm = () => {
    return (
        <section className="container" style={{ display: 'flex', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="contactForm" style={{display:'flex', flexDirection:'column', gap:'24px', marginTop:'150px'}}>
                <div className='styleTop_btn' style={{ display: 'flex', gap: '32px' }}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage style={{ fontSize: "24px" }} />} />
                    <Button text="VIA CALL" icon={<BiSolidPhoneCall style={{ fontSize: "24px" }} />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<AiOutlineMail style={{ fontSize: "24px" }} />}
                />
                
                <form style={{display:'flex', gap:'24px', flexDirection:'column'}}>
                   <div className="form-container" style={{display:'flex', 
                    flexDirection:'column', width:'100%' , position:"relative"}}>
                   <label htmlFor="name" style={{position:'absolute', top:'-12px', left:"10px", backgroundColor:'white', }}> Name</label>
                   <input type="text" name='name' style={{height:'40px', padding:'0 8px'}}/>
                   </div>
                   <div className="form-container" style={{display:'flex', 
                    flexDirection:'column', width:'100%' , position:"relative"}}>
                   <label htmlFor="E-mail" style={{position:'absolute', top:'-12px', left:"10px", backgroundColor:'white', }}>E-mail</label>
                   <input type="text" name='E-mail' style={{height:'40px', padding:'0 8px'}}/>
                   </div>

                   <div className="form-container" style={{display:'flex', 
                    flexDirection:'column', width:'100%' , position:"relative"}}>
                   <label htmlFor="Text" style={{position:'absolute', top:'-12px', left:"10px", backgroundColor:'white', }}>Text</label>
                   <textarea type="text" name='Text' style={{height:'100px', padding:'0 8px'}}/>
                   </div>
                   <button type="button" style={{width:'220px', height:'44px',
                     borderRadius:'5px', padding:'10px 18px 10px 18px' , gap:'10px', fontSize:'16px',
                     fontWeight:'600', lineHeight:'24px', backgroundColor:'black', color:'white'}}>Submit</button>
                </form>
                </div>
           <div className='contactImage' style={{width:'608px', height:'400px'}}>
            <img src="/image/service.avif" alt="contactImage" style={{width:'608px', height:'630px'}}/>
           </div>
        </section>
    );
};

export default ContactForm;
