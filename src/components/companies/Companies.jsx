import { useGetLogosQuery } from "../../api/PortFolioApi";

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
    <div className="px-24 mb-10 container mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
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
