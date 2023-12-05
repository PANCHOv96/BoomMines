export default function Button({callback,children}){
    return(
        <div onClick={callback} className="Button">
            {children}
        </div>
    )
}