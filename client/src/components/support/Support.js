import React, { useEffect } from "react";
// import { questions } from "./data.js";
import  "./Support.css";
// import { MdOutlineLibraryBooks } from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
// import Behzad from "../../assets/logo.jpg";

import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { ImSpinner3 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md"
import { RiCheckboxCircleLine } from "react-icons/ri"


import Confirmation from "../Confirmation";
// import AOS from "aos";
// import "aos/dist/aos.css";

const support = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);
  // ------------




  //initializing states
  const [status, setStatus] = useState("idle");
  const [customerCreationStatus, setCustomerCreationStatus] = useState("")
  const [dialog, setDialog] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("100");
  const [slotLabel, setSlotLabel] = useState("123");
  // const [selectedLocation, setSelectedLocation] = useState("Clinic");
  // const [locationLabel, setLocationLabel] = useState("");
  // const [selectedAgent, setSelectedAgent] = useState("Hélène Blat");
  // const [selectedMassageType, setSelectedMassageType] = useState("Suédois");
  // const [selectedDuration, setSelectedDuration] = useState("60");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerZipCode, setCustomerZipCode] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  // const [customerComments, setCustomerComments] = useState("");
  
  const appointmentDate = moment(selectedDate).format('MMMM Do YYYY');

  
  //onChange inputs functions
  const handleCustomerLastNameChange = (event) => {
    setCustomerLastName(event.target.value);
  };
  
  const handleCustomerFirstNameChange = (event) => {
    setCustomerFirstName(event.target.value);
  };

  const handleCustomerEmailChange = (event) => {
    setCustomerEmail(event.target.value);
  };

  const handleCustomerPhoneChange = (event) => {
    setCustomerPhone(event.target.value);
  };

  const handleCustomerAddressChange = (event) => {
    setCustomerAddress(event.target.value);
  };

  const handleCustomerZipCodeChange = (event) => {
    setCustomerZipCode(event.target.value);
  };

  const handleCustomerCityChange = (event) => {
    setCustomerCity(event.target.value);
  };

  // const handleCustomerCommentsChange = (event) => {
  //   setCustomerComments(event.target.value);
  // };

  const handleDateChange = (date) => {
    setSelectedDate(date._d);
  };

  //providing time labels for the Confirmation page
  const handleSlotChange = (event) => {
    event.preventDefault();
    setSelectedSlot(event.target.value);
    switch (selectedSlot) {
      case "100":
        setSlotLabel("10 O'Clock");
        break;
      case "200":
        setSlotLabel("11 O'Clock");
        break;
      case "300":
        setSlotLabel("12 O'Clock");
        break;
      case "400":
        setSlotLabel("13 O'Clock");
        break;
      case "500":
        setSlotLabel("14 O'Clock");
        break;
      case "600":
        setSlotLabel("15 O'Clock");
        break;
      case "700":
        setSlotLabel("16 O'Clock");
        break;
      case "800":
        setSlotLabel("17 O'Clock");
        break;
      case "900":
        setSlotLabel("18 O'Clock");
        break;
    }
  };
  
  // //poviding location labels for the Confirmation page
  // const handleLocationChange = (event) => {
  //   setSelectedLocation(event.target.value);
  //   if (event.target.value === "Clinic") {
  //     setLocationLabel(" au Centre Un Pas Vers Soi")
  //   } else if (event.target.value === "Home") {
  //     setLocationLabel(`${customerAddress}, ${customerCity}, ${customerZipCode}`)
  //   }
  // };

  
  
  // const handleAgentChange = (event) => {
  //   setSelectedAgent(event.target.value);
  // };

  const handleMassageTypeChange = (event) => {
    // setSelectedMassageType(event.target.value);
  };

  const handleDurationChange = (event) => {
    // setSelectedDuration(event.target.value);
  };

  //submitting new appointment - sending appointmen data to the backend
  const submitNewAppointment = (event) => {
    event.preventDefault();
    setStatus("loading");
    fetch('/appointments', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
      body: JSON.stringify({

        date: appointmentDate,
        customerlastname: customerLastName,
        customerfirstname: customerFirstName,
        slot: selectedSlot,
        // location: selectedLocation,
        // Agent: selectedAgent,
        // massagetype: selectedMassageType,
        // duration: selectedDuration,
        // customercomments: customerComments
      })
              
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 409) {
          setStatus("error")
          setDialog("Not availeble.Please choose another scahedule")
        } else if (res.status === 201) {
          setStatus("success")
          setDialog("your Appointment is confirmed, merci !")
          //customer data form reset on success
          setCustomerLastName("");
          setCustomerFirstName("");
          setCustomerEmail("");
          setCustomerPhone("");
          setCustomerAddress("");
          setCustomerZipCode("");
          setCustomerCity("");
          // setCustomerComments("");
        }
      })
      .catch((error) => {
        setStatus("error");
      })
          
    // sending customer data to the backend
    fetch('/customers', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
                  
      },
      body: JSON.stringify({

        lastname: customerLastName,
        firstname: customerFirstName,
        email: customerEmail,
        phone: customerPhone,
        address: customerAddress,
        zipcode: customerZipCode,
        city: customerCity
      })
              
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 409) {
          setCustomerCreationStatus("conflict: customer already in database")
                          
        } else if (res.status === 201) {
          setCustomerCreationStatus("success: new customer created")
                          
        }
      })
      .catch((error) => {
        setStatus("error");
      })
    //form reset
    event.target.reset();
      
      
  };


  //displaying Confirmation page on success
  if (status === "success") {

      
    return (
      <Confirmation
        appmtdate={appointmentDate}
        appmttime={slotLabel}
      // appmtlocation={locationLabel}
      // appmtAgent={selectedAgent}
      />
    )

  } else {
    // -----------------------------------
    //rendering Appointment page 
    return (
      <Wrapper>

        <section id="support">
          <div className="container support" data-aos="fade-up" />
          {/* <div className="u-title" data-aos="fade-up"/> */}
          
          {/* <MdOutlineLibraryBooks color="orangered" size={30} /> */}

          <form onSubmit={submitNewAppointment}>
            <Main>
              <FormArea>
                <FormLeftWrapper>
                  <Title>Talk About Yourself...</Title>
                  <Label htmlFor="fname">
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      value={customerFirstName}
                      onChange={handleCustomerFirstNameChange}
                      required placeholder="First Name*" />
                  </Label>
                  <Label htmlFor="lname">
                    <Input type="text" id="lname" name="lname" value={customerLastName} onChange={handleCustomerLastNameChange}
                    

                      required placeholder="Last Name*" />
                  </Label>
                  <Label htmlFor="email">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={customerEmail}
                      onChange={handleCustomerEmailChange}
                      required placeholder="Email Address*" />
                  </Label>
                  <Label htmlFor="phone">
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerPhone}
                      onChange={handleCustomerPhoneChange}
                      required placeholder="Telephone*" />
                  </Label>
                  <Label htmlFor="address">
                    <Input
                      type="text"
                      id="address"
                      name="address"
                      value={customerAddress}
                      onChange={handleCustomerAddressChange}
                      required placeholder="Adress*" />
                  </Label>
                  <Label htmlFor="zipcode">
                    <Input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      value={customerZipCode}
                      onChange={handleCustomerZipCodeChange}
                      required placeholder="Postal code*" />
                  </Label>
                  <Label htmlFor="city">
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={customerCity}
                      onChange={handleCustomerCityChange}
                      required placeholder="City*" />
                  </Label>
                  <Label htmlFor="city">Message
                    <CommentsInput
                      wrap="hard"
                      id="comments"
                      name="comments"
                    // value={customerComments}
                    // onChange={handleCustomerCommentsChange}
                    />
                  </Label>
                </FormLeftWrapper>
                {/* <PlantImage src={Behzad} /> */}
                <FormRightWrapper>
                  <Title>Talk With Our Expert</Title>
                  <PickersWrapper>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label="Select A Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        minDate={moment()}
                        showTodayButton={true}
                        renderInput={(props) => <TextField {...props} />}
                      />
                    </LocalizationProvider>
                    <Select onChange={handleSlotChange}>
                      <OptGroup>
                        <Option value="" required>Hour</Option>
                        <Option value="100">10h - 11h</Option>
                        <Option value="200">11h - 12h</Option>
                        <Option value="300">12h - 13h</Option>
                        <Option value="400">13h - 14h</Option>
                        <Option value="500">14h - 15h</Option>
                        <Option value="600">15h - 16h</Option>
                        <Option value="700">16h - 17h</Option>
                        <Option value="800">17h - 18h</Option>
                        <Option value="900">18h - 19h</Option>
                      </OptGroup>
                    </Select>
                  </PickersWrapper>
                     
                      
                  <Subtitle>Type of S ervice ?</Subtitle>
                  <MassageTypeWrapper>
                    <Select onChange={handleMassageTypeChange}>
                      <OptGroup>
                        <Option value="">type of service</Option>
                        <Option value="designing">designing</Option>
                        <Option value="sales consulting">sales consulting</Option>
                        <Option value="after sales">after sales</Option>
                            
                      </OptGroup>
                    </Select>
                    {/* <Select onChange={handleDurationChange}>
                                        <Option value="">Durée</Option>
                                        <Option value="60">60 min.</Option>
                                        <Option value="75">75 min.</Option>
                                        <Option value="90">90 min.</Option>
                                    </Select> */}
                  </MassageTypeWrapper>
                      
                  <DialogArea>
                        {status === "loading"
                          ? <DialogWrapper>
                            <Spinner size={25} />
                          </DialogWrapper>
                          : status === "error"
                          && <DialogWrapper>
                            <ErrorIcon size={25} /><ErrorMsg>{dialog}</ErrorMsg>
                          </DialogWrapper>
                                                            
                        }
                      </DialogArea>
                  <BookButton>reserve your service</BookButton>
                </FormRightWrapper>
              </FormArea>
            </Main>
          </form>
         
        </section>
      </Wrapper>

    )
  };
};




const Wrapper = styled.div`
    width: 100%;
    min-width: 640px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
`
const Main = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 0px;
    
   
    
`
const FormArea = styled.div`
    height: 70vh;
 
    display: grid;
    justify-content: center;
    grid-template-columns: 40% 40%;    
`
const FormLeftWrapper = styled.div`    
   
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
    justify-content: center;    
`
const FormRightWrapper = styled.div`    
    border: solid 1px #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
`
const Title = styled.p`
    font-size: 24px;
    color: #7e9e6c;
    text-align: center;
    margin: 20px;
`
const Select = styled.select`
    height: 56px;
    width: 240px;
    border-radius: 3px;
    border: solid 1px darkgray;
    text-align-last: center;
    &:hover{
        border-color: black;
    }
    &:focus{
        border-color: black;
    }
`
const OptGroup = styled.optgroup`
`

const Option = styled.option`
`
const Subtitle = styled.p`
    font-size: 20px;
    text-align: center;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 10px;
`
const Radio = styled.input`
    accent-color: #7e9e6c;
`
const Input = styled.input`
    width: 30vw;
    border: 0px;
    border-bottom: solid 1px #7e9e6c;
    padding-left: 10px;
    &:focus{
        outline: none;
    }
`
const CommentsInput = styled.textarea`
    padding: 10px;
    height: 100px;
    resize: none;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: gray;
    border: solid 1px #7e9e6c;
    &:focus{
        outline: none;
    }
`
const DialogArea = styled.div`
    
    height: 50px;
`
const DialogWrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Spinner = styled(ImSpinner3)`
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
const ErrorIcon = styled(MdErrorOutline )`
    color: #f54248;
`
const ErrorMsg = styled.p`
    font-size: 18px;
    color: #f54248;
`
const BookButton = styled.button`
    all: unset;
    justify-self: center;
    cursor: pointer;
    height: 50px;
    width: 300px;
    background-color: transparent;
    border: solid 1px #7e9e6c;
    border-radius: 10px;
    color: #7e9e6c;
    font-size: 20px;
    font-variant-caps: small-caps;
    text-align: center;
    &:hover:enabled{
        color: whitesmoke;
        background-color: #7e9e6c;
        
    }
    &:disabled{
        color: gray;
        border-color: gray;
    }
`
const PickersWrapper = styled.div`
    display:flex;
    justify-content: space-evenly;`

const RadioGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 20px;
`
const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const AgentWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-self: center;
`
const MassageTypeWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const PlantImage = styled.img`
    width: 100px;
    justify-self: center;
    align-self: center;
    opacity: 70%;
`

export default support;