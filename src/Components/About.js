import React from 'react';


const About = () => {
  //ONLY FOR UNDERSTANDING THE USES OF 'noteContext' AND 'NoteState'
  // const a= useContext(noteContext);
  // useEffect(()=>{
  //   // eslint-disable-next-line
  //    a.update()
  // },[])
  //REAL CODE STARTS HERE
  return (
    <>
    <div>
       {/*ONLY FOR UNDERSTANDING THE USES OF 'noteContext' AND 'NoteState' */}
      {/* This is About {a.state.name} of class {a.state.class} */}
    </div>
    <div className='my-4'>
    {/*REAL CODE STARTS HERE*/}
     <h1>About iNotebook</h1>
    </div>
    
    
    </>
  )
}

export default About
