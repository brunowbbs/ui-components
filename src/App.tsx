import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
import { LuSettings, LuUser } from "react-icons/lu";
import { MdDashboard, MdHome, MdReport } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  BarChart,
  Button,
  Card,
  Checkbox,
  DashboardLayout,
  DougnutChart,
  Input,
  InputMask,
  LineChart,
  PieChart,
  Popover,
  RadioButtonGroup,
  RichText,
  Select,
  Tabs,
  Wizard,
} from "../lib";
import { Modal } from "../lib/components/modal";
import { showToast } from "../lib/components/toast/showToast";

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

const sourceData = Array.from({ length: 28 }, (_, index) => {
  const day = index + 1;
  const label = day < 10 ? `0${day}/02` : `${day}/02`;
  const value = Math.floor(Math.random() * 101);
  return { label, value };
});

const sourceData2 = Array.from({ length: 28 }, (_, index) => {
  const day = index + 1;
  const label = day < 10 ? `0${day}/02` : `${day}/02`;
  const value1 = Math.floor(Math.random() * 101);
  return { label, value1, value2: value1 + 10 };
});

const sourcedata3 = [
  {
    label: "Leandro",
    value: 32,
  },
  {
    label: "Antonio",
    value: 45,
  },
  {
    label: "Fernanda",
    value: 23,
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

          <div className="flex items-end gap-2 flex-row flex-wrap">
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
            <Input width={80} placeholder="Ex: user@gmail.com" label="E-mail" />
            <InputMask width={80} label="CNPJ" type="cnpj" placeholder="CNPJ" />

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
              left={4.5}
              button={
                <div className="border border-gray-400 rounded-md cursor-pointer">
                  <IoMdMore />
                </div>
              }
            >
              <p className="text-sm">Hello world</p>
            </Popover>
          </div>
        </div>
      </Card>

      <div className="mt-3" />
      <Card>
        <p className="text-sm uppercase mb-2 font-bold text-primary">Charts</p>

        <div className="flex flex-row gap-3">
          <div className="flex-1">
            <Card>
              <p className="text-center font-bold">Vendas Totais Mensais</p>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <RiMoneyDollarCircleLine size={20} />
                    <p className="font-semibold">Conversão de negócios</p>
                  </div>
                  <p className=" text-sm ml-6 text-gray-500">
                    Mês: Fevereiro | Ano: 2024
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                  <Select
                    label={""}
                    placeholder="Selecione um vendedor"
                    options={[{ label: "Wesley", value: 1 }]}
                  />
                </div>
              </div>

              <BarChart sourceData={sourceData} height={250} offset={7} />
            </Card>
          </div>

          <div className="flex-1">
            <Card>
              <p className="text-center font-bold">Vendas Totais Mensais</p>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <RiMoneyDollarCircleLine size={20} />
                    <p className="font-semibold">Conversão de negócios</p>
                  </div>
                  <p className=" text-sm ml-6 text-gray-500">
                    Mês: Fevereiro | Ano: 2024
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                  <Select
                    label={""}
                    placeholder="Selecione um vendedor"
                    options={[{ label: "Wesley", value: 1 }]}
                  />
                </div>
              </div>

              <LineChart sourceData={sourceData2} height={250} />
            </Card>
          </div>
        </div>

        <div className="flex flex-row gap-3 mt-4">
          <div className="flex-1">
            <Card>
              <p className="text-center font-bold">Vendas Totais Mensais</p>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <RiMoneyDollarCircleLine size={20} />
                    <p className="font-semibold">Conversão de negócios</p>
                  </div>
                  <p className=" text-sm ml-6 text-gray-500">
                    Mês: Fevereiro | Ano: 2024
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                  <Select
                    label={""}
                    placeholder="Selecione um vendedor"
                    options={[{ label: "Wesley", value: 1 }]}
                  />
                </div>
              </div>

              <DougnutChart sourceData={sourcedata3} />
            </Card>
          </div>

          <div className="flex-1 flex-wrap">
            <Card>
              <p className="text-center font-bold">Vendas Totais Mensais</p>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <RiMoneyDollarCircleLine size={20} />
                    <p className="font-semibold">Conversão de negócios</p>
                  </div>
                  <p className=" text-sm ml-6 text-gray-500">
                    Mês: Fevereiro | Ano: 2024
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                  <Select
                    label={""}
                    placeholder="Selecione um vendedor"
                    options={[{ label: "Wesley", value: 1 }]}
                  />
                </div>
              </div>

              <PieChart sourceData={sourcedata3} />
            </Card>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}

export default App;
