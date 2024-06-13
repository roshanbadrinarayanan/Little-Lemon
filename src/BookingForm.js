import { useState } from "react";
import React from "react";

function Bookingform({availableTimes, dispatch}){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("")
    //const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE', date: e.target.value });
    };

    return(
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>

            <label htmlFor="date" id="cdate">Choose Date</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
            />

            <label htmlFor="time" id="ctime">Choose Time</label>
            <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests" id="cguests">Number of People</label>
            <input
                type="number"
                id="guests"
                value={guests}
                placeholder="1"
                min="1" max="10"
                onChange={(e) => setGuests(e.target.value)} 
            />

            <label htmlFor="occasion" id="c">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="birthday">Birthday</option>
                <option value="annivresary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="others">Others(Please Specify)</option>
            </select>

            <input type="submit" value="Make your reservation" />
        </form>
    )
}

export default Bookingform;