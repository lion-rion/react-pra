import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TypeSwitch from "./components/TypeSwitch";
import YAML from "yaml";
import DummyData from "./DummyData";

function App() {
  const [indent, setIndent] = useState();
  const [type, setType] = useState();

  const target = document.getElementById('textarea');

  //変換
  const convert = () => {
    console.log(indent, type);
    if (type === "YAML") {
      const yamlString = YAML.stringify(DummyData, {indent: Number(indent)});
      target.value = yamlString;
    } else if (type === "JSON") {
      const jsonString = JSON.stringify(DummyData, null, Number(indent));
      target.value = jsonString;
    }
  };
  return (
    <>
      <Header />
      <div class="container py-12 mb-10 px-lg-4 px-xl-12 ">
        <section class="my-10">
          <div>
            <h1 class="text-3xl font-bold font-weight-bold">YAML変換</h1>
            <p>ドラッグアンドドロップでAnsibleのプレイブックが作れます</p>
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
              <div class="basis-1/2 ">
                <p class="font-bold mt-10 ml-5">✏️ 入力スペース</p>
                <div class="mt-6 mr-2 py-8 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-white">
                  <br />
                </div>
              </div>
              <div class="basis-1/2">
                <p class="font-bold mt-10 ml-5">📋 選択スペース</p>
                <div class="mt-6 ml-2 py-8 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-white">
                  <br />
                </div>
              </div>
            </div>
            <div class="mx-auto max-w-2xl">
              <p class="font-bold mt-10 ml-5">✅ 出力スペース</p>
              <textarea name="" id="textarea" cols="70" rows="10" class="mt-3 ml-2 py-4 px-4 px-sm-6 px-lg-7 px-xl-10 rounded border bg-white"></textarea>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
