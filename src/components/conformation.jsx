import React, { useState, useEffect } from "react";
import "./conformation.css";
import { useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { Button, Spinner } from "@chakra-ui/react";
import Confetti from "react-confetti";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Conformation() {
  const { state } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBooking, setIsBooking] = useState(true);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    onOpen();
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 5000);
  };

  return (
    <div className="ticket-container">
        {/* {
            isBooked &&(
                <Confetti
                width={50000}
                height={50000}
                numberOfPieces={2000}
                gravity={0.23}
              />
            )
        } */}
      <div className="ticket-header">
        <h2>{state.name}</h2>
        <p>{state.theater}</p>
        <p>{state.address}</p>
      </div>
      <div className="ticket-body">
        <div className="ticket-details">
          <p>{`Show Timing   :               ${state.time}`}</p>
          <p>{`Show Date  :               23-04-2023`}</p>
          <p>{`Total Seats   :               ${state.totalseats}`}</p>
          <p>{`Seat Numbers  :               ${state.seatno.join(", ")}`}</p>
          <p>{`Price         :               ${state.totalseats * 150}`}</p>
          <div className="paynow" onClick={handleBooking}>
            Pay Now
          </div>
        </div>
        <div className="ticket-qrcode">
          {/* QR code component goes here */}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Processing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isBooking && (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="green.500"
                size="xl"
                marginTop={"30px"}
                marginBottom={"30px"}
                marginLeft={"160px"}
              />
            )}
            {isBooked && (
              <div>
                <Confetti
                width={5000}
                height={5000}
                numberOfPieces={3000}
                
              />
                <p>Ticket booked successfully!</p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Conformation;
