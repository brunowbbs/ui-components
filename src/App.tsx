import { useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { LuSettings, LuUser } from "react-icons/lu";
import { MdDashboard, MdHome, MdReport } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  BarChart,
  Button,
  ButtonV2,
  Card,
  Checkbox,
  DashboardLayout,
  DougnutChart,
  Icon,
  Input,
  InputMask,
  LineChart,
  Modal,
  PieChart,
  Popover,
  RadioButtonGroup,
  RichText,
  Select,
  Table,
  Tabs,
  Text,
  Wizard,
  camera,
  mountDataTable,
  showAlert,
  showToast,
  TextArea,
} from "../lib";
import { useStatePopover } from "../lib/components";
import { Form } from "./components/form";

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
  name: "Wesley Bruno",
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

const { columns, rows } = mountDataTable(
  ["Id", "Date", "Status", "Customer", "Purchased"],
  [
    ["1", "01 de mar 24", "pending", "John", "unpaid"],
    ["2", "12 de mar 24", "processed", "Leo", "paid"],
    ["3", "21 de mar 25", "processed", "Bruno", "paid"],
  ]
);

function App() {
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const [textArea, setTextArea] = useState("");

  const { state } = useStatePopover();

  return (
    <DashboardLayout
      startSidebarOpened={false}
      menuItems={MENU_ITEMS}
      popoverProfile={{
        logoutAction: () => alert("ok"),
        userLoggedData: USER_LOGGED,
        menuItems: MENU_ITEMS_POPOVER_PROFILE,
      }}
    >
      <div>
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">Texts</p>

          <Text>
            Do duis minim consequat mollit. Do et qui irure do magna id ad
            occaecat sint proident incididunt amet excepteur. Consectetur
            consequat ad irure incididunt pariatur est Lorem esse. Nostrud
            occaecat voluptate pariatur dolore aliqua ullamco ut exercitation
            quis. Anim voluptate ad est fugiat esse consequat do elit aute
            fugiat sint. Lorem Lorem dolore tempor do ad qui amet et
            exercitation culpa esse incididunt duis non. Ex consectetur eu
            consequat consequat. Proident exercitation do dolore commodo eu
            voluptate mollit veniam ea dolore irure ut elit et. Cupidatat
            proident mollit sit magna sit in anim veniam aliquip nostrud. Non
            proident id sint amet excepteur voluptate officia proident tempor
            consectetur. Veniam officia officia culpa deserunt officia pariatur
            non.
          </Text>

          <Text>
            ***************************************************************
          </Text>
        </Card>

        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Botões
          </p>

          <div className="flex gap-2 flex-wrap">
            <Button text="Primary" onClick={() => alert("ok")} />

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
            <Button text="Link" onClick={() => alert("ok")} link={true} />
          </div>

          <p className="text-sm uppercase mt-4 font-bold text-primary">
            Botões v2
          </p>

          <div className="flex gap-2 flex-wrap">
            <ButtonV2 variant="unset" onPress={() => alert("ok")}>
              Default
            </ButtonV2>

            <ButtonV2 size="md" variant="primary" onPress={() => alert("ok")}>
              Primary
            </ButtonV2>

            <ButtonV2
              size="md"
              isLoading
              variant="primary"
              onPress={() => alert("ok")}
            >
              Primary
            </ButtonV2>

            <ButtonV2 size="md" variant="secondary" onPress={() => alert("ok")}>
              Secondary
            </ButtonV2>

            <ButtonV2 size="md" variant="danger" onPress={() => alert("ok")}>
              Danger
            </ButtonV2>

            <ButtonV2 size="md" variant="warning" onPress={() => alert("ok")}>
              Warning
            </ButtonV2>

            <ButtonV2 size="md" variant="success" onPress={() => alert("ok")}>
              Success
            </ButtonV2>

            <ButtonV2
              size="md"
              variant="primary"
              onPress={() => alert("ok")}
              isOutlined
            >
              Outlined
            </ButtonV2>

            <ButtonV2 size="md" variant="primary" onPress={() => alert("ok")}>
              <Icon src={camera} alt="camera ícone" />
            </ButtonV2>

            <ButtonV2
              size="md"
              variant="primary"
              isLink
              onPress={() => alert("ok")}
            >
              Link
            </ButtonV2>
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Inputs
          </p>

          <div className="flex items-end gap-2 flex-row flex-wrap">
            <Input
              value=""
              width={80}
              placeholder="Ex: user@gmail.com"
              label="E-mail"
              onChangeValue={() => {}}
            />
            <Input
              value=""
              onChangeValue={() => {}}
              width={80}
              placeholder="Senha"
              label="Senha"
              isPassword={true}
            />
            <Input
              value={new Date().toISOString().split("T")[0]}
              width={80}
              label="Data"
              type="date"
              onChangeValue={() => {}}
            />
            <Input
              value=""
              width={80}
              label="Hora"
              type="time"
              onChangeValue={() => {}}
            />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Inputs Mask
          </p>

          <div className="flex gap-2 flex-row flex-wrap">
            <InputMask
              onChangeValue={() => {}}
              width={80}
              label="Telefone"
              type="phone"
              placeholder="Telefone"
            />

            <InputMask
              onChangeValue={() => {}}
              width={80}
              label="Preço"
              type="money"
              placeholder="Preço"
            />

            <InputMask
              width={80}
              label="CPF"
              type="cpf"
              placeholder="CPF"
              onChangeValue={() => {}}
            />

            <InputMask
              width={80}
              label="CNPJ"
              type="cnpj"
              placeholder="CNPJ"
              onChangeValue={() => {}}
            />
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
              value=""
              onChangeValue={() => {}}
              width={80}
              label="Cidade"
              placeholder="Selecione uma cidade"
              options={[
                { label: "Porteirinha", value: 1 },
                { label: "Janaúba", value: 2 },
                { label: "Montes Claros", value: 3 },
              ]}
            />
            <Input
              value=""
              width={80}
              placeholder="Ex: user@gmail.com"
              label="E-mail"
              onChangeValue={() => {}}
            />
            <InputMask
              width={80}
              label="CNPJ"
              type="cnpj"
              placeholder="CNPJ"
              onChangeValue={() => {}}
            />

            <Select
              value=""
              onChangeValue={() => {}}
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
            <Checkbox
              // disabled
              value={true}
              label="Continuar logado"
              onChangeValue={() => {}}
              // disabled
            />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Radio Buttons
          </p>

          <RadioButtonGroup
            // disabled
            value="option1"
            label=""
            onChangeValue={(value) => console.log(value)}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          />
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">Alert</p>
          <div className="flex gap-2">
            <Button
              text="Success"
              variant="success"
              onClick={() =>
                showAlert({
                  message: "Há registros que precisam de atenção",
                  title: "Atenção",
                  onAction: () => alert("ok"),
                  textButton: "Verificar",
                  type: "success",
                })
              }
            />
            <Button
              text="Error"
              variant="danger"
              onClick={() =>
                showAlert({
                  message: "Há registros que precisam de atenção",
                  title: "Atenção",
                  onAction: () => alert("ok"),
                  textButton: "Verificar",
                  type: "error",
                })
              }
            />
            <Button
              text="Warning"
              variant="warning"
              onClick={() =>
                showAlert({
                  message: "Há registros que precisam de atenção",
                  title: "Atenção",
                  onAction: () => alert("ok"),
                  textButton: "Verificar",
                  type: "warning",
                })
              }
            />
          </div>
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
              onClick={() => showToast.success("Cliente salvo com sucesso")}
            />
            <Button
              text="Error"
              variant="danger"
              onClick={() => showToast.error("Erro ao salvar cliente")}
            />
            <Button
              text="Warning"
              variant="warning"
              onClick={() => showToast.warning("Perigo ao salvar cliente")}
            />
          </div>
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Texto Rico
          </p>
          <RichText onChangeValue={() => {}} value="" label="" />
        </Card>

        <div className="mt-3" />
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">Tabs</p>
          <Tabs
            tabs={[
              {
                title: "Tab 1",
                content: (
                  <div className="text-sm">
                    <p>Content for Tab 1</p>
                  </div>
                ),
              },
              {
                title: "Tab 2",
                content: (
                  <div className="text-sm">
                    <p>Content for Tab 2</p>
                  </div>
                ),
              },
              {
                title: "Tab 3",
                content: (
                  <div className="text-sm">
                    <p>Content for Tab 3</p>
                  </div>
                ),
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
              component: (
                <div>
                  <span>Step 1</span>
                </div>
              ),
              icon: <MdHome size={22} />,
              name: "Step 1",
            },
            {
              component: (
                <div>
                  <span>Step 2</span>
                </div>
              ),
              icon: <MdDashboard size={22} />,
              name: "Step 2",
            },
            {
              component: (
                <div>
                  <span>Step 3</span>
                </div>
              ),
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
          <div>
            <Popover
              state={state}
              childButton="Popover"
              buttonProps={{ size: "md" }}
              placement="bottom left"
            >
              <>
                <p>children dropdown</p>
                <p>children dropdown</p>
                <button
                  onClick={() => {
                    console.log("cliquei");
                    state.close();
                  }}
                >
                  children dropdown
                </button>
              </>
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
                    value=""
                    onChangeValue={() => {}}
                    label=""
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
                    value=""
                    onChangeValue={() => {}}
                    label=""
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
                    value=""
                    onChangeValue={() => {}}
                    label=""
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
                    value=""
                    onChangeValue={() => {}}
                    label=""
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

      <div className="flex-1 flex-wrap mt-3">
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">
            Formulário com validação
          </p>
          <Form />
        </Card>
      </div>

      <div className="flex-1 flex-wrap mt-3">
        <Card>
          <div className="grid grid-cols-12 gap-4 mb-2">
            <div className="col-span-8 md:col-span-8">
              <Input
                value=""
                onChangeValue={() => {}}
                // value={values.name}
                // onChangeValue={(value) => setFieldValue("name", value)}
                label="Nome"
                placeholder="Informe o nome do cliente"
                // error={errors?.name}
              />
            </div>
            <div className="col-span-4 md:col-span-4">
              <Checkbox label="Ativo" onChangeValue={() => {}} />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex-1 flex-wrap mt-3">
        <Card>
          <p className="text-sm uppercase mb-2 font-bold text-primary">Table</p>

          <Table
            mode="multiple"
            disabled={["1"]}
            columns={columns}
            rows={rows}
            onRowAction={(key) => {
              console.log("ROW:", key);
            }}
          />
        </Card>
      </div>

      <div className="flex-1 flex-wrap mt-3">
        <Card>
          <TextArea
            className="w-full"
            value={textArea}
            onChangeValue={(value) => setTextArea(value)}
            // value={values.name}
            // onChangeValue={(value) => setFieldValue("name", value)}
            label="Nome"
            placeholder="Informe o nome do cliente"
            // error={errors?.name}
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default App;
