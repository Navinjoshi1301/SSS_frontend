import { useGetTeamQuery } from '../../api/PortFolioApi';
import Advisors from './Advisors';

const Ourteam = () => {
  const { data: teamsData, error, isLoading } = useGetTeamQuery({ populate: 'populate=*' });
  console.log("Advisors Data : ",);

  const ourTeam = teamsData?.data.filter(teamsData => [5, 6, 7, 8, 9].includes(teamsData.id)) || [];
  console.log("Advisors Team : ", ourTeam);

  const team = ourTeam.map((teamData) => {
    const { attributes } = teamData;
    return {
      name: attributes.name,
      designation: attributes.designation,
      imgUrl: attributes.img_url,
    }
  })

  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto mt-8  text-center">
          <span className="text-sm text-black border rounded-2xl shadow py-2 px-4">OUR TEAM</span>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-5 text-cyan-400">Meet Our Team</h1>
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
      <Advisors />
    </>
  );
};

export default Ourteam;