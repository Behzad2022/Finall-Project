import React, { useEffect,useState } from "react";
import "./ContactUs.css";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import styled from "styled-components";
import { ImSpinner3 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md"
import { RiCheckboxCircleLine } from "react-icons/ri"

import Navbar from "../navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

//Google Maps API settings
const containerStyle = {
    width: '500px',
    height: '300px'
};

const center = {
    lat: 45.548280,
    lng: -73.591830
};

const ContactUs = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBVKfjw0XtqPZGZ1cFLvnEmUW1Wup_vQvk"
        })

    


  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus("sending");
      const {name, email, subject, message} = event.target.elements;
      let details = {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
      };
      let response = await fetch('/contact', {
          method: "POST",
          headers: {
              "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
      });

      setStatus("Submit");
      let result = await response.json();
      
      setStatus(result.status)
      
      event.target.reset();
  };
  
    return (
      
    <section id="ContactUs">
      <div className="container subscribe" data-aos="fade-up">
      {/* <Navbar/> */}
              <EmailFormWrapper>
                  {/* <Title>General enquiries</Title> */}
                 
                    <form onSubmit={handleSubmit}> 
                        
                        
                                <InputWrapper>
                                    <Label htmlFor="name"></Label>
                                    <Input type="text" id="name" name="name" required placeholder="First Name*"  />
                                    <Label htmlFor="name"></Label>
                                    <Input type="text" id="name" name="name" required placeholder="Last Name*" />
                                    <Label htmlFor="email"></Label>
                                    <Input type="email" id="email" name="email" required placeholder="Email Address*"/>
                                    <Label htmlFor="subject"></Label>
                                                                
                                    {/* <GoogleMapWrapper>
                                    <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={18}
                                    >{}<></>
                                    </GoogleMap>
                                </GoogleMapWrapper> */}

                                    <select>
                                    <option defaultValue>Department</option>
                                        <option value="Managment">Managment</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Service">Service</option>
                    </select>
                                    
                                <MessageWrapper>
                                    <Label htmlFor="message">Message</Label>
                                    <Message type="text" wrap="soft" id="message" name="message" />
                                </MessageWrapper>
                                </InputWrapper>
                                {/* <FooterWrapper> */}
                                    <SendButton>SEND YOUR REQUEST</SendButton>
                                        {status === "error"
                                        ?   <DialogWrapper>
                                            <ErrorIcon size={25}/><Error>Error !</Error>
                                            </DialogWrapper>
                                        : status === "message sent" 
                                            
                                        ?   <DialogWrapper>
                                            <SuccessIcon size={25}/><Success>Message Sent !</Success>
                                            </DialogWrapper>

                                        : status === "sending" 
                                        &&  <DialogWrapper>
                                            <Spinner size={25}/>
                                            </DialogWrapper>
                                        
                                        }
                                {/* </FooterWrapper> */}
                            </form>
                        </EmailFormWrapper>

        <div className="social-icons">
          <div className="social-icon">
            <TiSocialGooglePlus />
          </div>
          <div className="social-icon">
            <FaFacebookF />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

const Wrapper = styled.div`
    width: 100%;
    min-width: 640px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
`
const Main = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
`
const ContactArea = styled.div`
    
    height: 80vh;
    display: grid;
    justify-content: center;
`
const ContactInfoWrapper = styled.div`    
    border: solid 1px #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 80vw;
    justify-self: center;
    align-self: center;
    display: grid;
    justify-content: center;
    align-items: center;
`
const PlantImage = styled.img`
    width: 100px;
    justify-self: center;
    align-self: center;
    opacity: 70%;
`
const TherapistsInfoArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`
const TherapistInfoWrapper = styled.div`
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const TherapistName = styled.p`
    color: #7e9e6c;
    font-size: 24px;
    font-variant-caps: small-caps;
`
const TherapistPhone = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`
const TherapistEmail = styled.a`
    color: #7e9e6c;
    font-size: 18px;
`
const Separator = styled.div`
    border: solid 1px #7e9e6c;
    width: 50%;
`
const CenterInfo = styled.div`
    width: 80vw;
    height: 55vh;
    display: grid;
    grid-template-rows: 30% 70%;
`
const CenterInfoWrapper = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const CenterName = styled.p`
    color: #7e9e6c;
    font-size: 24px;
    font-variant-caps: small-caps;
    text-align: center;    
`
const CenterAddress = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`
const CenterPhone = styled.p`
    color: #7e9e6c;
    font-size: 18px;
`
const GoogleMapWrapper = styled.div`
    justify-self: right;
    align-self: flex-end;
   
`
const EmailFormWrapper = styled.div` 
   
    margin-top:0
    height: 100%;
    width: 100%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.p`
    font-size: 24px;
    padding: 20px;
    text-align: center;
    line-height: 30px;
`
const InputWrapper = styled.div`
    display: grid;
    grid-template-columns:700px;
    gap: 10px;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 10px;
`
const Input = styled.input`
display: flex;

    width: 30vw;
    border: 0px;
    border-bottom: solid 1px #7e9e6c;
    padding-left: 10px;
    font-size: 16px;
    &:focus{
        outline: none;
    }
`
const select = styled.select`
display: flex;

    width: 70vw;
    border: 0px;
    border-bottom: solid 1px #7e9e6c;
    padding-left: 10px;
    font-size: 56px;
    &:focus{
        outline: none;
    }
`

const MessageWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

const Message = styled.textarea`
    padding: 10px;
    height: 70px;
    resize: none;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    border: solid 1px #7e9e6c;
    &:focus{
        outline: none;
    }
`
const FooterWrapper = styled.div`
    margin-top: 10px;
    align-self: center;

    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
`
const SendButton = styled.button`


    all: unset;
    cursor: pointer;
    height: 50px;
    width: 300px;
    background-color: transparent;
    border: solid 1px #7e9e6c;
    border-radius: 10px;
    color: #7e9e6c;
    font-size: 20px;
    font-variant-caps: small-caps;
    :hover{
        color: whitesmoke;
        background-color: #7e9e6c;        
    }    
`
const ErrorIcon = styled(MdErrorOutline )`
    color: #f54248;
`
const Error = styled.p`
    font-size: 20px;
    color: #f54248;
`
const SuccessIcon = styled(RiCheckboxCircleLine )`
    color: #629147;
`
const Success = styled.p`
    font-size: 20px;
`
const DialogWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
const Spinner = styled(ImSpinner3)`
    justify-self: center;
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    color: #7e9e6c;
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`






export default ContactUs;