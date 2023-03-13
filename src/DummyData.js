import { v4 as uuidv4 } from "uuid";

const DummyData = [
  {
    id: uuidv4(),
    name: "✏️ 入力スペース",
    tasks: [
      {
        id: uuidv4(),
        tag: "1",
        icon: "fa-power-off",
        apt: {
        name: "apache2",
        state: "present"
      }
        
      },
      {
        id: uuidv4(),
        icon: "fa-power-off",
        name: "b",
        title: '111',
      },
    ],
  },
  {
    id: uuidv4(),
    name: "⚠️ 電源操作",
    tasks: [
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "⚡️ インストール",
    tasks: [
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "⚙️ 設定",
    tasks: [
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        id: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
];

export default DummyData;
