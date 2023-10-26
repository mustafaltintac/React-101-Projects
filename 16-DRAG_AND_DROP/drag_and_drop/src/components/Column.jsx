import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import "../App.css";


export default function Column({ title, id, tasks }) {
  return (
    <div className="Column">
      <div className="Header"> {title} </div>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
            className="Field"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                backgroundColor: snapshot.isDraggingOver
                  ? "lightblue"
                  : "lightgrey", // Örnek bir stil değişikliği
                padding: 8,
                borderRadius: 4,
              }}
            >
              {tasks.map((task, index) => (
                <Task key={index} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
