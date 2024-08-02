
import React, { useEffect, useState } from 'react';
import { useGetTeamsQuery } from '../../api/portFolioApi';

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  const { data, error } = useGetTeamsQuery();

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (data) {
      setTeams(data.data);
    }
  }, [data, error]);


  return (
    <div className="bg-whith flex items-center justify-center">
      <div className="container mx-auto py-8 text-center">
        <span className="text-md text-gray-950 uppercase mb-3 bg-white inline-block px-5 py-1 rounded-3xl shadow-md tracking-wider">OUR TEAM</span>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-cyan-400">Meet Our Experts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {teams.map((team,index) => 
            <div key={index} className="bg-white p-4 rounded-lg transition-shadow duration-300 items-center md:2/4 sm:1/3 lg:w-6/8" >
              <img src={team.attributes.img_url} alt="Pranjal Dubey" className="w-4/6 md:w-2/4   mx-auto rounded-md transform hover:scale-105 transition-transform duration-300" />
              <h2 className="font-bold text-xl p-2 mt-3">{team.attributes.name}</h2>
              <span className="text-gray-500">{team.attributes.designation} </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;