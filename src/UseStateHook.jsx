import { useState } from "react";
const UseStateHook = () =>{
  const [num, setNum] = useState(5);
 const [numberHistory, setNumHistory] = useState([num]);
  function handleStudentIncrease(e) {
    e.preventDefault();
    setNum((prevState)=>prevState + 1)
  setNumHistory([num])}
  const handleStudentDecrease =(e ) => {
   e.preventDefault();
   setNum(num-1);
   setNumHistory((prevArrayState)=> [...prevArrayState,num])
  }
  const handleRemovingAllStudents = (e) =>{
    e.preventDefault();
    setNum(0)
    setNumHistory([num])
  }
 
  return(
    
    <div>
    <h1>Use state hook</h1>
    <h2>We have {num} students in our class </h2>
    <button onClick={handleStudentIncrease}>Increase number of students</button>
    <button onClick={handleStudentDecrease}>Decrease number of studemts</button>
    <button onClick={handleRemovingAllStudents}>Remove All Student</button>
    <h2>previous number</h2>
    {
      numberHistory.map((current,i)=> <span key={i}> {current},</span>)
    }

    </div>

  )
}
export default UseStateHook