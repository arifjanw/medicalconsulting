import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Function to get all bookings from localStorage
    const getBookings = () => {
      const allBookings = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const booking = localStorage.getItem(key);
        if (booking) {
          allBookings.push(JSON.parse(booking));
        }
      }
      return allBookings;
    };
 

    const bookings = getBookings();
    setBookings(bookings);
  }, []);

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: "#f49e1e" }}>
          Admin Page
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#f49e1e" }}>
          Bookings
        </h2>
        
        {/* Display list of bookings */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Service</th>
                <th className="px-4 py-2 border">Patient Name</th>
                <th className="px-4 py-2 border">Date</th>
               <th className="px-4 py-2 border">Time</th> 
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{booking.selectedService}:{booking.selectedOption}</td>
                  <td className="px-4 py-2 border">{booking.fullName}</td>
                  <td className="px-4 py-2 border">{booking.selectedDate}</td>
                  <td className="px-4 py-2 border">{booking.selectedTimeSlot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
