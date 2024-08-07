import React, { useEffect, useState } from 'react';
import { useGetTeamQuery } from '../../Api/portFolioApi';
import { FaLinkedin } from 'react-icons/fa';

const Ourteam = () => {
  const { data: teamData, error, isLoading } = useGetTeamQuery({ populate: 'populate=*' });
  const [team, setTeam] = useState([]);


  const linkedinUrls = {
    1: 'https://www.linkedin.com/in/pranjaldubey',
    3: 'https://www.linkedin.com/in/ajitsharma007',
    4: 'https://www.linkedin.com/in/shashankbanerjea',
    10: 'https://www.linkedin.com/in/dinkercharak/',
    5: 'https://www.linkedin.com/in/ankit1013',
    6: 'https://www.linkedin.com/in/nileshgiri3110',
    7: 'https://www.linkedin.com/in/aishwary-kundal',
    8: 'https://www.linkedin.com/in/kuldeeppanwar007',
    9: 'https://www.linkedin.com/in/laveena-pahuja2000',
  };


  useEffect(() => {
    if (error) {
      console.log('Error Fetching teams :', error);
    } else if (teamData) {
      console.log('Fetched Data :', teamData);
      const teamArray = teamData?.data || [];

      const mappedTeamData = teamArray.map(team => {
        const { id, attributes } = team;
        return {
          id,
          name: attributes.name,
          designation: attributes.designation,
          imgUrl: attributes.img_url,
          linkedinUrl: linkedinUrls[id],
        };
      });
      setTeam(mappedTeamData);
    }
  }, [teamData, error]);

  const expertsTeam = team.filter(member => [1, 10 , 3, 4].includes(member.id));
  const regularTeam = team.filter(member => [5, 6, 7, 8, 9].includes(member.id));

  return (
    <>
             


<div className="bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto py-8 text-center">
        <span className="text-sm text-black border rounded-2xl shadow py-2 px-4">OUR TEAM</span>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-8 text-cyan-400">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {isLoading ? (
              <p>Loading.......</p>
            ) : error ? (
              <p>Error OurTeam :{error.message}</p>
            ) : (
              regularTeam.map((team, index) => (
                <div key={index} className="relative bg-white p-4 rounded-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="relative group">
                    <img
                      src={team.imgUrl}
                      alt={team.name}
                      className="w-5/6 md:w-2/4 mx-auto rounded-md transform hover:scale-105 transition-transform duration-300"
                    />
                    {team.linkedinUrl && (
                      <a
                        href={team.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="bg-white rounded-full p-2">
                          <FaLinkedin className="text-gray-500 text-2xl" />
                        </div>
                      </a>
                    )}
                  </div>
                  <h2 className="font-bold text-xl p-2 mt-3">{team.name}</h2>
                  <span className="text-gray-500">{team.designation}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>


      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto py-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-8 text-cyan-400">Meet Our Experts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {isLoading ? (
              <p>Loading.......</p>
            ) : error ? (
              <p>Error OurTeam :{error.message}</p>
            ) : (
              expertsTeam.map((team, index) => (
                <div key={index} className="relative bg-white p-4 rounded-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="relative group">
                    <img
                      src={team.imgUrl}
                      alt={team.name}
                      className="w-5/6 md:w-2/4 mx-auto rounded-md transform hover:scale-105 transition-transform duration-300"
                    />
                    {team.linkedinUrl && (
                      <a
                        href={team.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="bg-white rounded-full p-2">
                          <FaLinkedin className="text-blue-700 text-2xl" />
                        </div>
                      </a>
                    )}
                  </div>
                  <h2 className="font-bold text-xl p-2 mt-3">{team.name}</h2>
                  <span className="text-gray-500">{team.designation}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourteam;
