import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../App.css";


export default function Task({ task, index }) {

  return (
    <Draggable draggableId={`${task.id.toString()}`} index={index} key={`${task.id.toString()}`}>
      {(provided, snapshot) => {
        return (
          <div
          className="TaskList"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <div
              className="Task"
            >
              <div>#{task.id}</div>
              <div>{task.title}</div>
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
