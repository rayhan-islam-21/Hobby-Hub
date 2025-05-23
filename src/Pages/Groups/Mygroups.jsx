import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import Groups from '../../Components/Groups/Groups';

const MyGroups = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email;
    const [group,Setgroup] = useState([])
     useEffect(()=>{
        fetch(`http://localhost:2000/mygroups/${email}`)
        .then(res=>res.json())
        .then(data=>Setgroup(data))

     },[user,email])
    return (
       <div className='text-start mt-12 mb-12' >
        <h1 className='text-2xl text-start p-3 font-bold text-green-500'>TOTAL GROUPS : {group.length}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-8 p-4'>
           
            {
                group.map((group)=><Groups group={group} key={group._id}></Groups>)
            }
        </div>
       </div>
    );
};

export default MyGroups;