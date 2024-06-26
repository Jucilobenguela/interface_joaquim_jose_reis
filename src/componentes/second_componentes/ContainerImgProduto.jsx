
function ContainerImgProduto({className, img, descrition,alt}){
return(
    <div className= {`img-produto ${className}`}>
        <img src={img} alt={alt} />
        <p>{descrition}</p>
    </div>
)
}
export default ContainerImgProduto