import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function DateSection() {
  const handleViewLocation = () => {
    // Google Maps link for Boho Farms & Retreat, Indore
    window.open('https://maps.google.com/?q=Boho+Farms+and+Retreat+Super+Corridor+Indore', '_blank');
  };

  const handleRSVP = () => {
    alert('Thank you for confirming your presence!');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#5C4033] flex flex-col items-center justify-center p-4 sm:p-6 font-serif selection:bg-[#D4AF37]/25">
      {/* Main Container Card */}
      <div className="w-full max-w-md bg-[#FAF6EE] border-2 border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden relative p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
        
        {/* Top Header */}
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D53] font-sans font-medium">
            A Night to Remember
          </span>
          <p className="text-sm italic text-[#70533E] px-4">
            An evening filled with colors, warmth, and the sweet melodies of music. Join us to make this special occasion even more memorable.
          </p>
        </div>

        <hr className="w-16 border-t border-[#D4AF37]/60 my-1" />

        {/* Date Section */}
        <div className="flex flex-col items-center space-y-1.5">
          <div className="w-9 h-9 rounded-full bg-[#F3EAD3] border border-[#D4AF37]/50 flex items-center justify-center text-[#8C6D53] shadow-sm">
            <Calendar size={18} />
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-widest text-[#8C6D53] font-sans font-semibold">Date</h3>
            <p className="text-base font-bold text-[#4A3325] tracking-wide mt-0.5">Monday</p>
            <p className="text-sm font-semibold text-[#5C4033]">24 November 2026</p>
          </div>
        </div>

        {/* Time Section */}
        <div className="flex flex-col items-center space-y-1.5">
          <div className="w-9 h-9 rounded-full bg-[#F3EAD3] border border-[#D4AF37]/50 flex items-center justify-center text-[#8C6D53] shadow-sm">
            <Clock size={18} />
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-widest text-[#8C6D53] font-sans font-semibold">Time</h3>
            <p className="text-sm font-semibold text-[#5C4033] mt-0.5">7:00 PM Onwards</p>
          </div>
        </div>

        {/* Venue Section */}
        <div className="flex flex-col items-center space-y-1.5">
          <div className="w-9 h-9 rounded-full bg-[#F3EAD3] border border-[#D4AF37]/50 flex items-center justify-center text-[#8C6D53] shadow-sm">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-widest text-[#8C6D53] font-sans font-semibold">Venue</h3>
            <p className="text-base font-bold text-[#4A3325] tracking-wide mt-0.5">Boho Farms & Retreat</p>
            <p className="text-xs text-[#70533E] mt-0.5">Super Corridor, Indore</p>
          </div>
          
          {/* View Location Button */}
          <button 
            onClick={handleViewLocation}
            className="mt-2.5 px-4 py-1.5 text-[11px] uppercase tracking-widest font-sans font-semibold text-[#5C4033] border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-1.5"
          >
            <MapPin size={13} /> View Location
          </button>
        </div>

        <hr className="w-16 border-t border-[#D4AF37]/60 my-1" />

        {/* RSVP Button */}
        <div className="w-full pt-1">
          <button 
            onClick={handleRSVP}
            className="w-full py-3 bg-[#4A3325] text-[#FAF6EE] text-xs uppercase tracking-[0.2em] font-sans font-bold rounded-lg border border-[#D4AF37]/40 hover:bg-[#5C4033] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Users size={16} className="text-[#D4AF37]" /> RSVP Now
          </button>
        </div>

        {/* Footer */}
        <div className="pt-1 text-center space-y-1">
          <p className="text-xs italic text-[#8C6D53]">Kindly Confirm Your Presence</p>
          <p className="text-[11px] font-sans tracking-wider text-[#5C4033] uppercase font-medium">
            With Warm Regards, <br />
            <span className="font-bold text-[#4A3325] capitalize">Our Families</span>
          </p>
        </div>

      </div>
    </div>
  );
}