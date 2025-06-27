import { useState } from 'react';

const meetingOptions = [
  {
    id: 'free',
    title: 'Free Strategy Consultation',
    description: '30-minute discovery call to understand your SaaS challenges and explore how we can help.',
    points: [
      'Business challenge assessment',
      'Tailored recommendations',
      'Custom proposal discussion',
      'No obligation',
    ],
    duration: '30min',
    price: 'Free',
    icon: '💬',
    popular: true,
  },
  {
    id: 'deep-dive',
    title: 'Deep Dive Strategy Session',
    description: 'Comprehensive strategy session with actionable insights and implementation roadmap.',
    points: [
      'Detailed business analysis',
      'Strategic recommendations',
      'Implementation roadmap',
      'Follow-up materials',
    ],
    duration: '60min',
    price: '$49',
    icon: '📘',
  },
  {
    id: 'emergency',
    title: 'Emergency Consultation',
    description: 'Urgent consultation for critical business decisions or immediate challenges.',
    points: [
      'Same-day availability',
      'Crisis management guidance',
      'Immediate action plan',
      'Priority support access',
    ],
    duration: '90min',
    price: '$79',
    icon: '⚡',
  },
];

const MeetingType = ({ onNext }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Select Meeting Type</h2>

      {meetingOptions.map((option) => (
        <div
          key={option.id}
          className="rounded-[24px] p-6 bg-gradient-to-r from-[#292A4C] to-[#212346] cursor-pointer border border-[#3D3E55] drop-shadow-[0px_8px_32px_rgba(31,38,135,0.37)] transition duration-200 hover:scale-[1.01]"
          onClick={() => onNext(option.id)}
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left Icon */}
            <div className="flex-shrink-0 w-10 text-3xl pt-1">{option.icon}</div>

            {/* Middle Content */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold">{option.title}</h3>
                {option.popular && (
                  <span className="text-xs font-semibold bg-gradient-to-r from-[#8167FE] to-[#208EEC] px-4 py-2 rounded-full text-white">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-white my-5">{option.description}</p>
              <ul className="list-disc ml-5 text-sm text-white">
                {option.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Price & Duration */}
            <div className="flex-shrink-0 text-right w-24">
              <p className="text-lg font-semibold">{option.price}</p>
              <p className="text-sm text-gray-400">{option.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingType;
