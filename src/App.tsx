import { AiOutlineAppstore } from "react-icons/ai";
import {
  Button,
  Card,
  DashboardLayout,
  Input,
  Select,
  Checkbox,
  RadioButtonGroup,
  RichText,
  Tabs,
  Wizard,
  InputMask,
  Popover,
} from "../lib";
import { LuSettings, LuUser } from "react-icons/lu";
import { Modal } from "../lib/components/modal";
import { useState } from "react";
import { showToast } from "../lib/components/toast/showToast";
import { MdDashboard, MdHome, MdReport } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

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
      <div>
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Botões
          </p>
          <div className="flex gap-2 flex-wrap">
            <Button text="Primary" onClick={() => alert("ok")} />
            <Button
              size="sm"
              text="Primary"
              onClick={() => alert("ok")}
              outline
              variant="primary"
            />
            <Button
              text="Primary"
              onClick={() => alert("ok")}
              outline
              variant="primary"
            />

            <Button
              size="lg"
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
              iconLeft={<LuSettings size={12} />}
            />
            <Button
              text="Pressione"
              onClick={() => alert("ok")}
              iconRight={<LuSettings size={12} />}
            />
            <Button isLoading />
            <Button
              onClick={() => alert("ok")}
              iconLeft={<LuSettings size={12} />}
            />
            <Button text="Link" onClick={() => alert("ok")} link />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Inputs
          </p>

          <div className="flex gap-2 flex-row flex-wrap">
            <Input width={80} placeholder="Ex: user@gmail.com" label="E-mail" />
            <Input
              width={80}
              placeholder="Password"
              label="Password"
              isPassword
            />
            <Input width={80} label="Data" type="date" />
            <Input width={80} label="Hora" type="time" />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Inputs Mask
          </p>

          <div className="flex gap-2 flex-row flex-wrap">
            <InputMask
              width={80}
              label="Telefone"
              type="phone"
              placeholder="Telefone"
            />

            <InputMask
              width={80}
              label="Preço"
              type="money"
              placeholder="Preço"
            />

            <InputMask width={80} label="CPF" type="cpf" placeholder="CPF" />

            <InputMask width={80} label="CNPJ" type="cnpj" placeholder="CNPJ" />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Modais
          </p>

          <div className="flex gap-2 flex-row">
            <Button
              onClick={() => setIsModalConfirm(true)}
              text="Abrir modal"
            />
            <Modal
              maxWidth={350}
              isOpen={isModalConfirm}
              onClose={() => setIsModalConfirm(false)}
            >
              <h4 className="font-semibold mb-1">Atenção</h4>
              <p className="text-sm">
                Tem certeza que deseja excluir o item selecionado?
              </p>
              <div className="flex gap-2 pt-4">
                <Button
                  width={80}
                  text="Sim"
                  onClick={() => setIsModalConfirm(false)}
                  isLoading={false}
                  variant="danger"
                />
                <Button
                  text="Não"
                  width={80}
                  onClick={() => setIsModalConfirm(false)}
                  outline
                />
              </div>
            </Modal>
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Selects
          </p>

          <div className="flex gap-2 flex-row">
            <Select
              width={80}
              label="Cidade"
              placeholder="Selecione uma cidade"
              options={[
                { label: "Porteirinha", value: 1 },
                { label: "Janaúba", value: 2 },
                { label: "Montes Claros", value: 3 },
              ]}
            />

            <Select
              width={80}
              isMulti
              label="Eletrodomésticos"
              placeholder="Selecione seus eletrodomésticos"
              options={[
                { label: "Geladeira", value: 1 },
                { label: "Liquidificador", value: 2 },
                { label: "Batedeira", value: 3 },
                { label: "Forno elétrico", value: 4 },
                { label: "Cafeteira", value: 5 },
              ]}
            />
          </div>
        </Card>
        <div className="mt-3" />

        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Checkbox
          </p>

          <div className="flex gap-2 flex-row">
            <Checkbox label="Continuar logado" />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Radio Buttons
          </p>

          <RadioButtonGroup
            onChange={(value) => console.log(value)}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          />
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Toasts
          </p>
          <div className="flex gap-2">
            <Button
              text="Success"
              variant="success"
              onClick={() => showToast("Registro salvo com sucesso", "success")}
            />
            <Button
              text="Error"
              variant="danger"
              onClick={() => showToast("Erro ao salvar registro", "error")}
            />
            <Button
              text="Warning"
              variant="warning"
              onClick={() =>
                showToast("Há uma registro que precisa de atenção", "warning")
              }
            />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Texto Rico
          </p>
          <RichText />
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">Tabs</p>
          <Tabs
            tabs={[
              {
                title: "Tab 1",
                content: <div className="text-sm">Content for Tab 1</div>,
              },
              {
                title: "Tab 2",
                content: <div className="text-sm">Content for Tab 2</div>,
              },
              {
                title: "Tab 3",
                content: <div className="text-sm">Content for Tab 3</div>,
              },
            ]}
          />
        </Card>
      </div>

      <div className="mt-3" />
      <Card>
        <p className="text-sm uppercase mb-2 font-bold text-primary">Wizard</p>
        <Wizard
          steps={[
            {
              component: <div>Step 1</div>,
              icon: <MdHome size={22} />,
              name: "Step 1",
            },
            {
              component: <div>Step 2</div>,
              icon: <MdDashboard size={22} />,
              name: "Step 2",
            },
            {
              component: <div>Step 3</div>,
              icon: <MdReport size={22} />,
              name: "Step 2",
            },
          ]}
        />
      </Card>

      <div className="mt-3" />

      <Card>
        <p className="text-sm uppercase mb-2 font-bold text-primary">
          Popovers
        </p>

        <div className="flex items-center justify-between">
          <Button variant="success" text="Novo produto" />

          <div className="">
            <Popover
              left={11}
              button={
                <div className="border border-gray-400 rounded-md cursor-pointer">
                  <IoMdMore />
                </div>
              }
            >
              <h3>Hello world</h3>
            </Popover>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default App;
