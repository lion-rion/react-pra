import { v4 as uuidv4 } from "uuid";

const DummyData = [
  {
    hosts: "192.168.0.0",
    name: "✏️ 入力スペース",
    tasks: [
      {
        hosts: uuidv4(),
        tag: "Apache2をインストール",
        icon: "fa-power-off",
        apt: {
          name: "apache2",
          state: "present"
        }
        
      },
      {
        hosts: uuidv4(),
        icon: "fa-power-off",
        name: "b",
        title: '111',
      },
    ],
  },
  {
    hosts: uuidv4(),
    name: "⚠️ 電源操作",
    tasks: [
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
  {
    hosts: uuidv4(),
    name: "⚡️ インストール",
    tasks: [
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
  {
    hosts: uuidv4(),
    name: "⚙️ 設定",
    tasks: [
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "d",
        title: "読書",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "e",
        title: "aaa",
      },
      {
        hosts: uuidv4(),
        icon: "faPowerOff",
        name: "f",
        title: "bbb",
      },
    ],
  },
];

export default DummyData;
