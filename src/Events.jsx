import UseStateHook from "./UseStateHook";
const Events = () => {
  const handleClick = () => {
    alert("Hello world!");
  }
  const showMyName = () => {
    alert("The mouse is over")
  }
  const handleMouseOut = () => {
    alert("The mouse is out")
  }
  function handleSubmitInformation(event) {
    event.preventDefault();
    alert("You have successfully submitted")
  }

  function handleSubmitform(e){
    e.preventDefault();
    alert("Form submitted successfully")
  }
  const handleInput = (e) => {
    e.preventDefault();
    alert(e.target.value)
  }
  return(
    <>
    <button onClick={handleClick}>Click Me</button>
    <button onMouseEnter={showMyName} onMouseOut={handleMouseOut}>Click me to see a name</button>
    <form action="" onSubmit={handleSubmitform}>
      <input type="text" placeholder="enter your name" onChange={handleInput} />
      <button onClick={handleSubmitInformation} >Submit</button>
    </form>
    </>
  ) 
}
export default Events