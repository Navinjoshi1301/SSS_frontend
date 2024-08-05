import { useGetTeamQuery } from '../../api/PortFolioApi';

const Advisors = () => {
    const { data: advisorsData, error, isLoading } = useGetTeamQuery({ populate: 'populate=*' });
    console.log("Advisors Data : ",);

    const advisorsTeam = advisorsData?.data.filter(advisorsData => [1, 3, 4, 10].includes(advisorsData.id)) || [];
    console.log("Advisors Team : ", advisorsTeam);

    const teamsData = advisorsTeam.map((teamData) => {
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
                <div className="container mx-auto py-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-8 text-cyan-400">Meet Our Advisors</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {isLoading ? (
                            <p>Loading.......</p>
                        ) : error ? (
                            <p>Error OurTeam :{error.message}</p>
                        ) : (
                            teamsData.map((team, index) => (
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
        </>
    );
};

export default Advisors;