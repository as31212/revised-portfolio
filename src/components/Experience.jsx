const Experience = () => {
  return (
    <>
      <div className="h-auto min-h-screen mt-5" id="Experience">
        <p className="text-center">Explore My</p>
        <h2 className="text-center text-5xl font-semibold">Experience</h2>
        <div className="flex flex-wrap justify-center gap-10 p-40" id="frontend-backend">
          
          {/* Village of Wilmette - GIS Intern */}
          <div className="w-3/5 min-w-80 p-10 rounded-xl border-2 border-black flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Village of Wilmette – Engineering and Public Works</h3>
            <p className="text-xl"><em>Geography Information Systems Intern</em> - <em>Summer 2024</em></p>
            <ul className="list-disc pl-5">
              <li>Conducted field data collection for water and sewer infrastructure</li>
              <li>Integrated collected data into the village's GIS system</li>
            </ul>
          </div>

          {/* Colgate University - Geography Research Assistant */}
          <div className="w-3/5 min-w-80 p-10 rounded-xl border-2 border-black flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Colgate University</h3>
            <p className="text-xl"><em>Geography Research Assistant</em> - <em>Spring 2024</em></p>
          </div>

          {/* Colgate University - Python TA */}
          <div className="w-3/5 min-w-80 p-10 rounded-xl border-2 border-black flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Colgate University – Department of Computer Science</h3>
            <p className="text-xl"><em>Python Teaching Assistant</em> - <em>Fall 2023</em></p>
          </div>

          {/* New Trier Democrats - Data Analyst */}
          <div className="w-3/5 min-w-80 p-10 rounded-xl border-2 border-black flex flex-col gap-4">
            <h3 className="text-3xl font-bold">New Trier Democrats</h3>
            <p className="text-xl"><em>Data Analyst</em> - <em>Summer 2023</em></p>
            <ul className="list-disc pl-5">
              <li>Performed multivariate analysis to evaluate voter behavior</li>
              <li>Created targeted outreach strategies</li>
            </ul>
          </div>

          {/* Village of Wilmette - Community Development Internship */}
          <div className="w-3/5 min-w-80 p-10 rounded-xl border-2 border-black flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Village of Wilmette</h3>
            <p className="text-xl"><em>Community Development Internship</em> - <em>Summer 2022</em></p>
            <ul className="list-disc pl-5">
              <li>Facilitated administrative processes for Village Forester</li>
              <li>Input GIS data points into a geospatial database for tree inventory tracking</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Experience;
