type InstructureType={
    instructureTypeData:{
        firstName:string,
        lastName:string;
    };

};




function Instructure(props:InstructureType) {
    return ( 
        <div>
            <p>{props.instructureTypeData.firstName}</p>
            <p>{props.instructureTypeData.lastName}</p>
            

        </div>
     );
}

export default Instructure;