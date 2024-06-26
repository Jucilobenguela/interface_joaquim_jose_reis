

function Radio({id,name}){
return(
        <input className="input" type="radio" name={`radio-btn ${name}`} id={id} />
  
)
}
export default Radio