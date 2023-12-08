export default function Icons({svg,link}){
    function handleclick(e){
        e.preventDefault();
        window.open(link,'_blank')
    }
    return(
        <>
            <a href="#" onClick={(e)=> handleclick(e)}>
                <img src={svg} alt="Icono red social" className="icons-redes"/>
            </a>
        </>
    )
}