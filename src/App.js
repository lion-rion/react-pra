import "./App.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Header from "./components/Header";
import TypeSwitch from "./components/TypeSwitch";
import YAML from "yaml";
import DummyData from "./DummyData";
import Card from "./components/Card";
import HowToUse from "./components/HowToUse";
import BugReport from "./components/BugReport";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  const [indent, setIndent] = useState();
  const [type, setType] = useState();

  //testareaの位置を取得
  const target = document.getElementById('textarea');

  /**
   *  ここからDnDの設定
   */
  const js_data = JSON.parse(window.localStorage.getItem("js-data")) ? JSON.parse(window.localStorage.getItem("js-data")) : DummyData;
  const [data, setData] = useState(js_data);
  const onDragEnd = (result) => {
    const { source, destination } = result;

    //別のカラムに移動したとき
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.hosts === source.droppableId);
      const destColIndex = data.findIndex((e) => e.hosts === destination.droppableId);

      const sourceCol = data[sourceColIndex];
      const destCol = data[destColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destTask = [...destCol.tasks];

      //タスクを削除
      const [removed] = sourceTask.splice(source.index, 1);

      //タスクを追加
      destTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destColIndex].tasks = destTask;
      setData(data);
      window.localStorage.setItem("js-data",  JSON.stringify(data));
    } else {
      //同じカラム内でのタスクの入れ替え
      const sourceColIndex = data.findIndex((e) => e.hosts === source.droppableId);

      const sourceCol = data[sourceColIndex];

      const sourceTask = [...sourceCol.tasks];

      //タスクを削除
      const [removed] = sourceTask.splice(source.index, 1);

      //タスクを追加
      sourceTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;

      window.localStorage.setItem("js-data",  JSON.stringify(data));
    }
  };

  //変換用スクリプト
  const convert = () => {

    const updatedData = data.map(item => {
      // `item`オブジェクトのコピーを作成し、`tasks`配列の要素の`id`プロパティを削除する
      const updatedTasks = item.tasks.map(task => {
        const { hosts,icon,tag, ...taskWithoutId } = task;
        return taskWithoutId;
      });
    
      // 更新されたオブジェクトを返す
      return {
        ...item,
        tasks: updatedTasks
      };
    });
    

    if (type === "YAML") {
      const yamlString = YAML.stringify(updatedData[0], {indent: Number(indent)});
      target.value = yamlString;
    } else if (type === "JSON") {
      const jsonString = JSON.stringify(updatedData[0], null, Number(indent));
      target.value = jsonString;
    }
    //Dmm = Object.assign({}, DummyData[0]);
  };

  return (
    <>
    <head><link href="https://use.fontawesome.com/releases/v6.3.0/css/all.css" rel="stylesheet"/></head>
      <Header />
      <div class="container py-12 mb-10 px-lg-4 px-xl-12 ">
        <section class="my-10">
          <div>
            <h1 class="text-3xl font-bold font-weight-bold">Ansible-DnD</h1>
            <p><FontAwesomeIcon icon="fa-solid fa-power-off" />ドラッグアンドドロップでAnsibleのプレイブックが作れます</p>
          </div>
        </section>
        <section class="my-10">
          <div class="py-8 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-slate-50">
            <div class="flex">
              <TypeSwitch
                setIndent={setIndent}
                name="インデント"
                item1={2}
                item2={4}
              />
              <TypeSwitch
                setIndent={setType}
                name="出力タイプ"
                item1="YAML"
                item2="JSON"
              />
              <button
                type="button"
                onClick={convert}
                class=" mt-4 py-2 px-4 font-extrabold inline-flex justify-center items-center gap-2 -ml-px rounded-lg border font-medium bg-blue-200 text-sky-700 align-middle focus:z-10 focus:outline-none transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
              >
                出力
              </button>
            </div>
            <div class="flex">
              <DragDropContext onDragEnd={onDragEnd}>
                  {data.map((section) => (
                    <Droppable key={section.hosts} droppableId={section.hosts}>
                      {(provided) => (
                        <div class="basis-1/2 ">
                        <p class="font-bold mt-10 ml-5">{section.name}</p>
                        <div class="mt-6 mr-2 py-8 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-white"
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {section.tasks.map((task, index) => (
                              <Draggable
                                key={task.hosts}
                                draggableId={task.hosts}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      ...provided.draggableProps.style,
                                      opacity: snapshot.isDragging ? "0.5" : "1",
                                    }}
                                  >
                                    <Card icon={task.icon} name={task.tag}></Card>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  ))}
              </DragDropContext>
            </div>
            <div class="mx-auto max-w-2xl">
              <p class="font-bold mt-10 ml-5">✅ 出力スペース</p>
              <textarea name="" id="textarea" cols="70" rows="10" class="mt-3 ml-2 py-4 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-white"></textarea>
            </div>
          </div>
        </section>
        <HowToUse/>
        <BugReport />
        <Footer />
      </div>
      <script defer src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"></script>
    </>
  );
}

export default App;
