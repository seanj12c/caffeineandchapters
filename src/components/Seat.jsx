import React, { useState } from "react";
import seat from "../assets/SeatAvail.png";
import entrance from "../assets/entrance.png";
import seatlogo from "../assets/seatlogo.png";
import confirmation from "../assets/confirmation.gif";
import { useNavigate } from "react-router-dom";

const Seat = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [reservationDate, setReservationDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("9:00am");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleConfirmReservation = () => {
    setShowModal(true);
  };

  const seatSuccess = () => {
    setShowModal(false);
    window.alert("Seat Reservation Successful!");
    navigate("/account");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-full w-full pt-24">
      <div className="md:flex justify-around py-2 lg:py-6 md:py-4 w-full">
        <h1
          id="cnc"
          className="text-center text-lg md:text-2xl lg:text-4xl text-primary"
        >
          Seat Reservation
        </h1>
        <img
          className="w-52 md:w-64 lg:w-72 rounded-lg bg-secondary px-5 py-2 object-contain mx-auto md:mx-0"
          src={seat}
          alt=""
        />
      </div>
      <div className="h-full mx-5 my-2 md:flex bg-primary rounded-xl px-2 py-2">
        <img className="pt-2 w-auto px-5 mx-auto" src={entrance} alt="" />
        <div className="w-full h-80 md:h-full md:py-20 my-auto rounded-xl mx-auto bg-secondary pt-2 mt-2">
          <img
            className="bg-white rounded-xl px-5 py-2 w-20 md:w-28 lg:w-32 mx-auto"
            src={seatlogo}
            alt=""
          />
          <form className="text-center h-full px-2">
            <div className="flex justify-center items-center flex-col gap-1">
              <label htmlFor="guestCount">Amount of Guest:</label>
              <input
                className="border border-primary rounded-md text-center"
                type="number"
                id="guestCount"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-1">
              <label htmlFor="reservationDate">Reservation Date:</label>
              <input
                className="border border-primary rounded-md text-center"
                type="date"
                id="reservationDate"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-1">
              <label htmlFor="timeSlot">Available Time Slot:</label>
              <select
                className="border border-primary rounded-md"
                id="timeSlot"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
              >
                <option value="9:00am">9:00am</option>
                <option value="11:00am">11:00am</option>
                <option value="1:00pm">1:00pm</option>
              </select>
            </div>
            <div className="flex justify-center items-center pt-4 flex-col gap-1">
              <button
                type="button"
                onClick={handleConfirmReservation}
                className="bg-primary text-white px-4 py-2 mx-auto rounded-md"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <div className="fixed bg-primary top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white border-4 border-primary p-8 rounded-lg text-center">
            <p>
              Are you sure you want to confirm the reservation for {guestCount}{" "}
              guests on {reservationDate} at {selectedTimeSlot}?
            </p>
            <img
              className="w-20 object-contain mx-auto"
              src={confirmation}
              alt=""
            />
            <div className="flex gap-2 justify-center items-center">
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
                onClick={seatSuccess}
              >
                Confirm
              </button>
              <button
                className="mt-4 px-4 py-2 bg-secondary rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Seat;
