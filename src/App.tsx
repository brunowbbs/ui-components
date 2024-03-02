import { AiOutlineAppstore } from "react-icons/ai";
import { Button, Card, DashboardLayout, Input } from "../lib/main";
import { LuSettings, LuUser } from "react-icons/lu";
import { Modal } from "../lib/components/modal";
import { useState } from "react";
import { Select } from "../lib/components/select";

const MENU_ITEMS = [
  {
    group_name: "Home",
    items: [
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Home",
        action: () => alert("ok"),
        dropdown: [
          {
            title: "Dropdown 1",
            action: () => alert("ok"),
          },
          {
            title: "Dropdown 2",
            action: () => alert("ok"),
          },
          {
            title: "Dropdown 2",
            action: () => alert("ok"),
          },
        ],
      },
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Charts",
        action: () => alert("ok"),
      },
    ],
  },
  {
    group_name: "Vendas",
    items: [
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Home",
        action: () => alert("ok"),
      },
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Charts",
        action: () => alert("ok"),
      },
    ],
  },
  {
    group_name: "Relatorios",
    items: [
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Home",
        action: () => alert("ok"),
      },
      {
        icon: (
          <AiOutlineAppstore size={18} className="min-w-max" color="#999" />
        ),
        title: "Charts",
        action: () => alert("ok"),
      },
    ],
  },
];

const USER_LOGGED = {
  description: "Porteirinha - MG",
  name: "Wesley Bruno Barbosa Silva",
  avatar: "https://avatars.githubusercontent.com/brunowbbs",
};

const MENU_ITEMS_POPOVER_PROFILE = [
  {
    title: "Meu Perfil",
    icon: <LuUser size={14} />,
    action: () => alert("ok"),
  },
  {
    title: "Ajustes",
    icon: <LuSettings size={14} />,
    action: () => alert("ok"),
  },
];

function App() {
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  return (
    <DashboardLayout
      menuItems={MENU_ITEMS}
      popoverProfile={{
        logoutAction: () => alert("ok"),
        userLoggedData: USER_LOGGED,
        menuItems: MENU_ITEMS_POPOVER_PROFILE,
      }}
    >
      <div className="h-full">
        <Card>
          <p className="text-sm uppercase mb-2">Botões</p>
          <div className="flex gap-2">
            <Button text="Primary" onClick={() => alert("ok")} />
            <Button
              text="Primary"
              onClick={() => alert("ok")}
              outline
              variant="primary"
            />
            <Button
              text="Danger"
              onClick={() => alert("ok")}
              variant="danger"
            />
            <Button
              text="Warning"
              onClick={() => alert("ok")}
              variant="warning"
            />
            <Button
              text="Secondary"
              onClick={() => alert("ok")}
              variant="secondary"
            />
            <Button
              text="Success"
              onClick={() => alert("ok")}
              variant="success"
            />
            <Button
              text="Pressione"
              onClick={() => alert("ok")}
              icon={<LuSettings size={12} />}
            />
            <Button isLoading />
            <Button
              onClick={() => alert("ok")}
              icon={<LuSettings size={12} />}
            />
            <Button text="Pressione" onClick={() => alert("ok")} link />
          </div>
        </Card>

        <div className="mt-10" />
        <Card>
          <p className="text-sm uppercase mb-2">Inputs</p>

          <div className="flex gap-2 flex-row">
            <Input placeholder="Ex: user@gmail.com" label="E-mail" />
            <Input placeholder="" label="Password" isPassword />
            <Input label="Data" type="date" />
            <Input label="Hora" type="time" />
          </div>
        </Card>

        <div className="mt-10" />
        <Card>
          <p className="text-sm uppercase mb-2">Modais</p>

          <div className="flex gap-2 flex-row">
            <Button
              onClick={() => setIsModalConfirm(true)}
              text="Abrir modal"
            />
            <Modal
              isOpen={isModalConfirm}
              onClose={() => setIsModalConfirm(false)}
            />
          </div>
        </Card>

        <div className="mt-10" />
        <Card>
          <p className="text-sm uppercase mb-2">Selects</p>

          <div className="flex gap-2 flex-row">
            <Select
              label="Cidade"
              placeholder="Selecione uma cidade"
              options={[
                { label: "Porteirinha", value: 1 },
                { label: "Janaúba", value: 2 },
                { label: "Montes Claros", value: 3 },
              ]}
            />
            <Select
              isMulti
              label="Eletrodomésticos"
              placeholder="Selecione seus eletrodomésticos"
              options={[
                { label: "Geladeira", value: 1 },
                { label: "Liquidificador", value: 2 },
                { label: "Batedeira", value: 3 },
              ]}
            />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default App;
