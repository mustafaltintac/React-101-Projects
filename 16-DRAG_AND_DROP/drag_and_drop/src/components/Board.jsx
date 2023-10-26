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

    // Hedef ve kaynak aynıysa hiçbir şey yapma
    if (
      destination.droppableId === source.droppableId 
    ) {
    }

    const task = findItemById(
      draggableId,
      source.droppableId === "1" ? incomplated : complated
    );

    if (destination.droppableId == "2") {
      setIncomplated(removeItemById(draggableId, incomplated));
      console.log("source" + source.droppableId);
    } else if (destination.droppableId == "1") {
      setComplated(removeItemById(source.index, complated));
    }

    if (destination.droppableId == "2" && source.droppableId !="2") {
      complated.splice(destination.index, 0, task);
      setComplated(complated);
    } else if (destination.droppableId == "1"  && source.droppableId !="1") {
      incomplated.splice(destination.index, 0, task);
      setIncomplated(incomplated);
    } else {
      alert("lütfen boxlara yerleştirin");
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="Board">
        <Column tasks={incomplated} id={"1"} title={"Yapılacaklar"} />
        <Column tasks={complated} id={"2"} title={"Yapılmışlar"} />
      </div>
    </DragDropContext>
  );
}
