import { useEffect, useState } from "react";

const ManagementTeam = () => {

    const [teams,setTeams] = useState([])
 
    useEffect(()=>{

        fetch('ManagementTeamData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTeams(data)
        })

    },[])


    return (
        <div>

            <h2 className=" p-12 text-4xl font-semibold text-center">Meet our Management and Business Consulting Team</h2>

            <div className="p-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    teams.map((member,index)=> <div className="" key={index}> 

                        <img className="rounded-2xl hover:shadow-2xl   hover:scale-105 duration-700" src={member.img} alt="" />
                       
                       <div className=" mt-5 text-center">
                       <p className="text-xl font-semibold opacity-80">{member.name}</p>
                        <p className="font-semibold opacity-50">{member.title}</p>

                      <a href="https://www.linkedin.com/feed/"><img className="w-16 h-16 flex mx-auto mt-6" src={member.social_link} alt="" /></a>
                        
                       </div>

                    </div>)
                }
            </div>
            
        </div>
    );
};

export default ManagementTeam;