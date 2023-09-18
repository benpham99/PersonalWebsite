import React from 'react';


function Experience() {
  return (
    <div className='experience Fira'>
    <p className='h3'>Experience 💻</p>
    <br></br><br></br>
    <p className='h4'>Actuarial Analyst - <i>QBE Insurance</i></p>
    <i className='text text-gray-400'>June 2020 – May 2023</i>
    <div>
      <ul className="text space-y-1 list-disc list-inside ">
        <li>
          CTP reserving and pricing & Workers Compensation Pricing Review Project
        </li>
        <li>
          Strong data analysis skills through analysis of trends and key movements within QBE’s largest claims and policy 
          dataset ($1.5 billion dollar CTP portfolio) and actuarial reserving models
        </li>
        <li>
          Strong communication skills through frequently presenting key findings and results to senior stakeholders
        </li>
        <li>    
          Data manipulation and improving long tail actuarial valuation models with SAS, SQL and Excel to produce 
          further analysis and more efficient processes
        </li>
        <li>
          Created CTP premium adequacy dashboards using Power BI, SQL and R programming for data visualisation 
          and manipulation respectively
        </li>
      </ul> 
    </div>
    

    <br></br>
    <p className='h4'>Wealth Management Support Analyst - <i>Iress</i></p>
    <i className='text text-gray-400'>December 2019 - May 2020</i>
    <ul className="text space-y-1 list-disc list-inside text-left">
      <li>
        Proactively resolving major client troubleshooting and financial issues using XPLAN software
      </li>
      <li>
        Excellent verbal and written communication through explaining technical issues within software to numerous people in financial industry.

      </li>
    </ul> 
    </div>

    );
}
export default Experience;
