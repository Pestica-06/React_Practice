import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import CardDetails from "./UserDetails.js";

export default function CardWrapper(){
    const[name,setName]=useState("john");
    const[RollNo,setRollNo]=useState(7);
    // const[Group,setGroup]=useState("B");
    const[imageUrl,setimageUrl]=useState("https://picsum.photos/id/237/200/300");
    return(
        <div>
            <ProfilePicture myImage={imageUrl}  />
            <CardDetails 
               setName={setName}
               sRollNo={RollNo}
            //    sGroup={Group}
               />
        </div>
    )

}