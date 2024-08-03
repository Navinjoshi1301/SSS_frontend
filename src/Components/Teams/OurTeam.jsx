// src/components/Ourteam.jsx

import React, { useEffect, useState } from 'react';
import { useGetTeamQuery } from '../../Api/portFolioApi';

const Ourteam = () => {
  const { data: teamData, error, isLoading } = useGetTeamQuery({ populate: 'populate=*' });
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (error) {
      console.log('Error Fetching teams :', error);
    } else if (teamData) {
      console.log('Fetched Data :', teamData);
      const teamArray = teamData?.data || [];

      const mappedTeamData = teamArray.map(team => {
        const { attributes } = team;
        return {
          name: attributes.name,
          designation: attributes.designation,
          imgUrl: attributes.img_url,
        };
      });
      setTeam(mappedTeamData);
    }
  }, [teamData, error]);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8 text-center">
        <span className="text-sm text-black border rounded-2xl shadow py-2 px-4">OUR TEAM</span>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-8 text-cyan-400">Meet Our Experts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {isLoading ? (
            <p>Loading.......</p>
          ) : error ? (
            <p>Error OurTeam :{error.message}</p>
          ) : (
            team.map((team, index) => (
              <div key={index} className="bg-white p-4 rounded-lg transition-shadow duration-300">
                <img src={team.imgUrl} alt={team.name} className="w-4/6 md:w-2/4 mx-auto rounded-md transform hover:scale-105 transition-transform duration-300" />
                <h2 className="font-bold text-xl p-2 mt-3">{team.name}</h2>
                <span className="text-gray-500">{team.designation}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
