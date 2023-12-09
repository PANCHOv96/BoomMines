export default function LinkRepo({link,title}){
    function handleclick(e){
        e.preventDefault();
        if(!link) return
        window.open(link,'blank')
    }
    return(
        <div className='Link-repo'>
            <a onClick={(e) => { handleclick(e) }}>{title}</a>
        </div>
    )
}