import React, { useState } from "react";

interface EventForm {
    eventName: string;
    eventCategory: string;
    eventDate: string;
    eventTime: string;
    participants: number;
    duration: number;
}

const EventNames: React.FC = () => {
    const [formData, setFormData] = useState<EventForm>({
        eventName: "",
        eventCategory: "Corporate",
        eventDate: "",
        eventTime: "",
        participants: 0,
        duration: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "participants" || name === "duration" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Event Creation</h1>
                <h2 className="text-xl font-semibold mb-6 text-center text-gray-700">Create an Event</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium">Event Name</label>
                        <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400" placeholder="Enter event name" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Event Category</label>
                        <select name="eventCategory" value={formData.eventCategory} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400">
                            <option>Corporate</option>
                            <option>Wedding</option>
                            <option>Birthday</option>
                            <option>Conference</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-red-700 font-medium">Event Date</label>
                        <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Event Time</label>
                        <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Number of Participants/Guests</label>
                        <input type="number" name="participants" value={formData.participants} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400" placeholder="Enter number of guests" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Event Duration (in hours)</label>
                        <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-green-400" placeholder="Enter duration" required />
                    </div>
                    <button type="submit" className="w-full bg-[#38F275] text-white p-3 rounded-lg mt-4 text-lg font-semibold hover:bg-green-500 transition">Next</button>
                </form>
            </div>
        </div>
    );
};

export default EventNames;