import "../Ictest25/Sessions.css";

import Day1Keynote from "../assets/Day-1-Keynote.jpeg";
import Day1Plenary from "../assets/Day-1-Plenary.jpeg";
import Day2Plenary1 from "../assets/Day-2-Plenary-1.jpeg";
import Day2Plenary2 from "../assets/Day-2-Plenary-2.jpeg";
import Day2Plenary3 from "../assets/Day-2-Plenary-3.jpeg";
import Day3Plenary1 from "../assets/Day-3-Plenary-1.jpeg";
import Day3Plenary2 from "../assets/Day-3-Plenary-2.jpeg";

export default function Sessions26() {
  const days = [
    {
      day: "Day 1",
      posters: [
        { label: "Keynote", image: Day1Keynote },
        { label: "Plenary", image: Day1Plenary },
      ],
    },
    {
      day: "Day 2",
      posters: [
        { label: "Plenary 1", image: Day2Plenary1 },
        { label: "Plenary 2", image: Day2Plenary2 },
        { label: "Plenary 3", image: Day2Plenary3 },
      ],
    },
    {
      day: "Day 3",
      posters: [
        { label: "Plenary 1", image: Day3Plenary1 },
        { label: "Plenary 2", image: Day3Plenary2 },
      ],
    },
  ];

  return (
    <div className="sessions-container">
      <h1 className="session-title">Plenary Sessions and Speakers</h1>
      <div className="session-container">
        {days.map((day) => (
          <div className="day-section" key={day.day}>
            <h2 className="day-heading">{day.day}</h2>
            <div className="poster-grid">
              {day.posters.map((poster) => (
                <div className="poster-block" key={poster.label}>
                  <h3 className="poster-label">{poster.label}</h3>
                  <img className="poster-image" src={poster.image} alt={`${day.day} ${poster.label}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
