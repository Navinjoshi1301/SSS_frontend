import { useGetLogosQuery } from "../../Api/portFolioApi";

const Companies = () => {
  const { data: logos, isLoading: isLoadingLogos, error: errorLogos } = useGetLogosQuery({ populate: '*' });

  if (isLoadingLogos) {
    return <div>Loading logos...</div>;
  }

  if (errorLogos) {
    return <div>Error loading logos</div>;
  }

  const logoMap = logos?.data.reduce((acc, logo) => {
    acc[logo.attributes.name.toLowerCase()] = logo.attributes.img_url;
    return acc;
  }, {});

  const companies = [
    { name: "Tofrum", logoName: "tofrum" },
    { name: "Aeromatric", logoName: "airometric" },
    { name: "Cyberstash", logoName: "cyberstash" },
    { name: "Zool", logoName: "zool" }
  ];

  return (
    
    <div className=" mt-20 px-24 mb-10  container mx-auto">
      <div className="flex justify-around">
        {companies.map(company => (
          <div key={company.name} className="">
            <img
              src={logoMap[company.logoName.toLowerCase()]}
              alt={company.name}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Companies;