
import { useState, useEffect } from 'react';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

const DateTimePicker = ({ onNext, unavailableDates = [] }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [monthOffset, setMonthOffset] = useState(0);

  const baseDate = new Date();
  const viewingDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset, 1);
  const currentMonth = viewingDate.toLocaleString('default', { month: 'long' });
  const currentYear = viewingDate.getFullYear();
  const daysInMonth = new Date(currentYear, viewingDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentYear, viewingDate.getMonth(), 1).getDay();

  const days = Array.from({ length: startDay + daysInMonth }, (_, i) => i < startDay ? null : i - startDay + 1);

  const formatDate = (day) => `${currentYear}-${String(viewingDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const isUnavailable = (day) => {
    const formatted = formatDate(day);
    return unavailableDates.includes(formatted);
  };

  const handleDateClick = (day) => {
    const date = formatDate(day);
    if (!isUnavailable(day)) {
      setSelectedDate(date);
    }
  };

  const handleTimeClick = (time) => {
    if (selectedDate) {
      setSelectedTime(time);
    }
  };

  useEffect(() => {
    if (selectedDate && selectedTime) {
      onNext(selectedDate, selectedTime);
    }
  }, [selectedDate, selectedTime, onNext]);

  return (
    <div className="space-y-6 px-5 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        <div className='bg-gradient-to-r from-[#292A4C] to-[#212346] cursor-pointer border border-[#3D3E55] drop-shadow-[0px_8px_32px_rgba(31,38,135,0.37)] rounded-[24px] xsm:p-5 lg:p-10'>
          
          <div className="p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-5">Select Date</h2>
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-gray-400 disabled:opacity-40"
                onClick={() => setMonthOffset(monthOffset - 1)}
                disabled={monthOffset === 0}
              >
                &lt;
              </button>
              <div className="text-lg font-semibold">{currentMonth} {currentYear}</div>
              <button
                className="text-gray-400"
                onClick={() => setMonthOffset(monthOffset + 1)}
              >
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                <div key={d} className="text-gray-400">{d}</div>
              ))}
              {days.map((day, idx) => {
                if (!day) return <div key={idx}></div>;
                const formatted = formatDate(day);
                const isSelected = selectedDate === formatted;
                const unavailable = isUnavailable(day);

                return (
                  <div
                    key={day}
                    onClick={() => !unavailable && handleDateClick(day)}
                    className={`cursor-pointer py-2 rounded-[16px] border text-sm
                      ${unavailable ? ' bg-white/5 border border-white/10 backdrop-blur-[20px] text-gray-500 cursor-not-allowed' :
                        isSelected ? 'bg-purple-600 text-white border-transparent' : 'text-gray-300 hover:bg-gray-700 border-transparent'}
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 text-xs text-center mt-4 text-gray-400">
              <div><span className="inline-block w-3 h-3 bg-purple-600 rounded-full mr-1"></span> Selected</div>
              <div><span className="inline-block w-3 h-3 bg-white/5 border border-white/10 backdrop-blur-[20px] rounded-full mr-1"></span> Available</div>
              <div><span className="inline-block w-3 h-3 bg-[#9CA3AF] opacity-[50%] rounded-full mr-1"></span> Unavailable</div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#292A4C] to-[#212346] cursor-pointer border border-[#3D3E55] drop-shadow-[0px_8px_32px_rgba(31,38,135,0.37)] rounded-[24px] p-5 sm:p-10'>
          <h2 className="text-xl font-semibold mb-2 ml-1">Select Time</h2>
          <div className="py-4 grid grid-cols-2 xsm:grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`cursor-pointer  py-2 text-center text-sm rounded-[16px] bg-white/5 border border-white/10 backdrop-blur-[20px]
                  ${selectedTime === time ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                {time}
              </div>
            ))}
          </div>
          <div className="text-sm bg-[rgba(25,145,235,0.1)] rounded-[16px] px-4 py-3 mt-3">
            <p className='font-semibold text-[14px]'>🕒 Time Zone: Eastern Time (EST)</p>
            <p className="text-xs">All times are displayed in Eastern Time. The calendar will automatically convert to your local time zone.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;