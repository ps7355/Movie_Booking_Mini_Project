import React from "react";
import "./theater_name.css";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Stack,
  } from '@chakra-ui/react'
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

function TheaterNameDiaply(props){
    const [time,settime]=useState("");
    const [date,setdate]=useState(new Date());
    const options = ["9:00 AM", "12:00 AM", "3:00 PM","6:00 PM","9:00 PM"]
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
    function navi(){
      const name = props.movie;
      const theater=props.name.name;
      const address=props.name.address;
      const movietime=time;
        navigate("/seating",{
          state:{
            na:name,
            th:theater,
            ad:address,
            mt:movietime
          }
        });
    }
    return <div onClick={onOpen} className="full">
        <div className="name">
        <p>{props.name.name}</p>
            </div> 
        <div className="address">
        <p>{props.name.address}</p> 
            </div>  
            <div className="divider"></div>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>Select Date and Time</h2>
            <DatePicker  startDate={Date()}>
            </DatePicker>
            <div className="space"></div>
            <RadioGroup onChange={settime}>
                <Stack direction={"column"}>
                    {options.map((value)=>{
                        return <Radio value={value}>{value}</Radio>
                    })}
                </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={navi}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
}

export default TheaterNameDiaply;