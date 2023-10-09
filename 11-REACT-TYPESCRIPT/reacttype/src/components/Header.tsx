
type Control={
    name:string
    rank:number
}

function Headers(props:Control){



    return (  
        <div>
            <p>{props.rank} Yıldızlı {props.name} Kursa Hoşgeldiniz </p>
        </div>
    );
}

export default Headers;