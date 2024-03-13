export default function Use({use}){
    const {name, email}=use;
    return(
        <div className="box">
            <h4>Name:{name} </h4>
            <p>Email:{email} </p>
        </div>
    )
}