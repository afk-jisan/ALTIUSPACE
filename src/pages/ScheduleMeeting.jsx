import { useState } from 'react';
import MeetingType from '../components/MeetingType';
import DateTimePicker from '../components/DateTimePicker';
import UserDetails from '../components/UserDetails';    

const ScheduleMeeting = () => {
  const [step, setStep] = useState(1);
  const [meetingType, setMeetingType] = useState(null);
  const [dateTime, setDateTime] = useState({ date: null, time: null });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const unavailable = [
    '2025-06-01',
    '2025-06-03',
    '2025-06-15',
    '2025-07-18'
  ];

  const benefits = [
    { icon: './security.svg', label: '100% Confidential' },
    { icon: './expert.svg', label: 'Expert Consultants' },
    { icon: './clock.svg', label: 'Flexible Scheduling' },
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <div className="custom:w-[1200px] px-30 mx-auto">
        <div className='mt-5'>
          <a href="/" className="text-sm text-white">&larr; Back to Home</a>
        </div>
        

        <div className="flex justify-center items-center mt-15 mb-4 ">
          <button className="flex justify-center items-center gap-2 px-4 py-2 border rounded-full text-black bg-[linear-gradient(-77deg,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.70)_100%)]">
            <img src="./calendar.svg" alt="calendar" className="w-4 h-4 text-black" />
            <p>Book a Consultation</p>
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center text-[linear-gradient(-85deg,_#BDC1C6,_#F8F9FA)]] mb-8">Schedule Your Session</h1>
        <p className="text-center text-gray-400 mb-6">
          Book a strategic consultation with our SaaS transformation experts.
          <br/>Choose your preferred meeting type and time that works best for you.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-3 w-fit mx-auto gap-4 mb-6">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img src={b.icon} alt={b.label} className="w-6 h-6" />
              <p className="text-sm text-gray-300">{b.label}</p>
            </div>
          ))}
        </div>


        <div className="flex justify-between gap-6 my-10 text-sm">
          <div className="flex items-center gap-2">
            {step > 1 ? <img src='./completed.svg' alt="completed"/> :<p className='bg-white/5 border border-white/10  w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md '>1</p>} 
            <p>Meeting Type</p>
          </div>
          <div className="flex items-center gap-2">
            {step >= 2 ? <img src='./completed.svg' alt="completed"/> :<p className='bg-white/5 border border-white/10  w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md '>2</p>} 
            <p>Date & Time</p>  
          </div>
          <div className={`flex items-center gap-2 ${step === 3 ? 'text-green-400' : ''}`}>
            {step >= 3 ? <img src='./completed.svg' alt="completed"/> :<p className='bg-white/5 border border-white/10  w-10 h-10 rounded-full flex justify-center items-center backdrop-blur-md '>3</p>} 
            <p>Your Details</p>
          </div>
        </div>

        {step === 1 && <MeetingType onNext={(type) => { setMeetingType(type); setStep(2); }} />}
        {step === 2 && <DateTimePicker
          onNext={(date, time) => {
            setSelectedDate(date);
            setSelectedTime(time);
            setDateTime({ date, time }); // ensure data is passed to UserDetails
            setStep(3); // move to UserDetails
          }}
          unavailableDates={unavailable}
        />}
        {step === 3 && <UserDetails meetingType={meetingType} dateTime={dateTime} />}
      </div>
    </div>
  );
};

export default ScheduleMeeting;
