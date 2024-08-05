import { useGetTeamQuery } from '../../api/PortFolioApi';
import Advisors from './Advisors';
import { FaLinkedinIn } from 'react-icons/fa';

const linkedinLinks = [
  "https://www.linkedin.com/in/ankit1013/",
  "https://www.linkedin.com/in/nileshgiri3110/",
  "https://www.linkedin.com/in/aishwary-kundal/",
  "https://www.linkedin.com/in/kuldeeppanwar007/",
  "https://www.linkedin.com/in/laveena-pahuja2000/"
];

const Ourteam = () => {
  const { data: teamsData, error, isLoading } = useGetTeamQuery({ populate: 'populate=*' });

  const ourTeam = teamsData?.data.filter(teamsData => [5, 6, 7, 8, 9].includes(teamsData.id)) || [];
  console.log("Advisors Team : ", ourTeam);

  const team = ourTeam.map((teamData, index) => {
    const { attributes } = teamData;
    return {
      name: attributes.name,
      designation: attributes.designation,
      imgUrl: attributes.img_url,
      linkedinLink: linkedinLinks[index] || null,  
    };
  });

  return (
    <>
      <div className="container mx-auto mt-10 text-center lg:px-28 md:px-12 px-8">
        <span className="text-sm text-black border rounded-2xl shadow py-2 px-4">OUR TEAM</span>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 mt-5 text-cyan-400">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <p>Loading.......</p>
          ) : error ? (
            <p>Error OurTeam : {error.message}</p>
          ) : (
            team.map((teamMember, index) => (
              <div key={index} className="relative bg-white rounded-lg transition-shadow duration-300 mt-2 overflow-hidden">
                <div className="relative group">
                  <img
                    src={teamMember.imgUrl}
                    alt={teamMember.name}
                    className="w-full md:w-2/4 mx-auto rounded-md transform group-hover:scale-105 transition-transform duration-300 ease-in-out mt-4"
                  />
                  {teamMember.linkedinLink && (
                    <a
                      href={teamMember.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    >
                      <div className="bg-white p-2 rounded-xl">
                        <FaLinkedinIn size="1.3em" className="text-gray-600" />
                      </div>
                    </a>
                  )}
                </div>
                <h2 className="font-bold text-xl p-2 mt-2">{teamMember.name}</h2>
                <span className="text-gray-500">{teamMember.designation}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <Advisors />
    </>
  );
};

export default Ourteam;
