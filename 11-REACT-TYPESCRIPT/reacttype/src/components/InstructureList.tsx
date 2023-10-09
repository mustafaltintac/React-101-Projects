import {InstructureListTypeData} from "./PropsTypes"

export default function InstructureList(props: InstructureListTypeData) {
  return (
    <div>
      {props.InstructureListTypeData.map((element) => {
        return (
          <h3 key={element.firstName}>
            {element.firstName} {element.lastName}
          </h3>
        );
      })}
    </div>
  );
}
