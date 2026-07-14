import '../Ictest25/Sponsors.css';
import DrdoLogo from "../assets/DRDO-logo.png";

const Sponsors26 = () => {
  const platinumSponsors = [
    {
      name: "Defence Research and Development Organisation",
      url: "https://drdo.gov.in",
      logo: DrdoLogo,
    },
  ];

  return (
    <div className="sponsors-container">
      <h1>Our Sponsors</h1>
      <div className="sponsor-class">
        <div className="sponsor-grid">
          {platinumSponsors.map((sponsor) => (
            <a className="sponsor-card" href={sponsor.url} key={sponsor.url} target="_blank" rel="noopener noreferrer">
              <span className="sponsor-tier-badge">Platinum Sponsor</span>
              <img src={sponsor.logo} alt={sponsor.name} />
              <h5>{sponsor.name}</h5>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors26;
