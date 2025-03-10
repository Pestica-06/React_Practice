export default function CardDetails({sName,sRollNo,sGroup}){
    return (
    <section className="Card-Body">
       {/* <span>Name:{sName}</span><br></br> */}
       <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
       <span>Roll No:{sRollNo}</span><br></br>
       {/* <span>Section:{sGroup}</span> */}
    </section>
    )}
