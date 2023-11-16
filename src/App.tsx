import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoState } from "./atoms";
import { useRecoilState } from "recoil";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    // setToDos((oldToDos) => {
    //   const toDosCopy = [...oldToDos];

    //   // Get the dragged item using the source index
    //   const draggedItem = toDosCopy[source.index];

    //   // 1) Delete item on source.index
    //   console.log("Delete item on", source.index);
    //   console.log(toDosCopy);
    //   toDosCopy.splice(source.index, 1);
    //   console.log("Deleted item");
    //   console.log(toDosCopy);

    //   // 2) Put back the item on the destination.index
    //   console.log("Put back", draggedItem, "on ", destination.index);
    //   toDosCopy.splice(destination?.index, 0, draggedItem);
    //   console.log(toDosCopy);

    //   return toDosCopy;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
