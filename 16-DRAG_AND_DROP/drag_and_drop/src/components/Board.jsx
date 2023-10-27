import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import "../App.css";

export default function Board() {
  const [incomplated, setIncomplated] = useState([]);
  const [complated, setComplated] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setComplated(json.filter((task) => task.complated));
        setIncomplated(json.filter((task) => !task.incomplated));
      });
  }, []);

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const task = findItemById(
      draggableId,
      source.droppableId === "1" ? incomplated : complated
    );

    if (destination.droppableId == "2" && source.droppableId != "2") {
      complated.splice(destination.index, 0, task);
      setComplated(complated);
    } else if (destination.droppableId == "1" && source.droppableId != "1") {
      incomplated.splice(destination.index, 0, task);
      setIncomplated(incomplated);
    }


    if (destination.droppableId == "2") {
      if (source.droppableId == "2") {
        const newTasks = Array.from(complated);
        const [removed] = newTasks.splice(source.index, 1); // Kaynağı çıkar
        newTasks.splice(destination.index, 0, removed);
        setComplated(newTasks);
      } else {
        setIncomplated(removeItemById(draggableId, incomplated));
      }
    } 
    else if (destination.droppableId == "1") {
      if (source.droppableId == "1") {
        const newTasks = Array.from(incomplated);
        const [removed] = newTasks.splice(source.index, 1); 
        newTasks.splice(destination.index, 0, removed);
        setIncomplated(newTasks);
      } else {
        setComplated(removeItemById(draggableId, complated));
    }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="Board">
        <Column
          tasks={incomplated}
          id={"1"}
          title={"Yapılacaklar"}
        />
        <Column tasks={complated} id={"2"} title={"Yapılmışlar"} />
      </div>
    </DragDropContext>
  );
}
