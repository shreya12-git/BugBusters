import {
  GiAbstract020,
  GiAbstract024,
  GiAbstract041,
  GiAbstract104,
} from "react-icons/gi";

function Card1({ heading, description, icon, className }) {
  return (
    <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
      <div className="min-w-max">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-[22px] font-semibold">{heading}</h3>
        <p className="leading-8 text-gray-500 font-normal">{description}</p>
      </div>
    </div>
  );
}

function Card1Presentation() {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 bg-white p-3 sm:p-8">
      <Card1
        className="bg-[#fcf4ff]"
        heading="Skills"
        description="C++, Java, Python, pytorch, Computer Vision, Docker, R"
        icon={<GiAbstract020 size="2.5rem" className="text-[#D566FF]" />}
      />
      <Card1
        className="bg-[#fefaf0]"
        heading="All projects"
        description="Smart car Parking System, Fake Pan card detector, Hostel management system, E-commerce website"
        icon={<GiAbstract024 size="2.5rem" className="text-[#DDA10C]" />}
      />
     
    </div>
  );
}

export { Card1Presentation };
