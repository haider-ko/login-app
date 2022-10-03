import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Spin,
  Modal,
  Card,
} from "antd";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  DeleteTwoTone,
} from "@ant-design/icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Tag } from "antd";
// import Card from "./Card";
import CardList from "./CardList";
import Cards from "./Cards";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 10px;
`;

const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const EditTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = (id) => {
    setIsModalOpen(true);
    const newDat = dataSource.filter((item) => item.id !== id);
    setDataSource(newDat);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Api Fetching

  useEffect(() => {
    if (isFetching)
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((dataSource) => setDataSource(dataSource));
  }, [isFetching]);

  const [count, setCount] = useState(2);

  const handleDelete = (id) => {
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "email",
      dataIndex: "email",
      editable: true,
    },
    {
      title: "username",
      dataIndex: "username",
      editable: true,
    },
    {
      title: "phone number",
      dataIndex: "phone",
      editable: true,
    },

    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.id)}
          >
            <DeleteTwoTone />
          </Popconfirm>
        ) : null,
    },
    // {
    //   title: "operation",
    //   dataIndex: "operation",
    //   render: (_, record) =>
    //     dataSource.length >= 1 ? (
    //       <>
    //         <Link type="primary" onClick={() => showModal(record.id)}>
    //           Open Modal
    //         </Link>
    //         <Modal
    //           title="Basic Modal"
    //           open={isModalOpen}
    //           onOk={handleOk}
    //           onCancel={handleCancel}
    //         >
    //           <div>
    //             {dataSource.map((employee, index) => {
    //               return <div>{employee.name}</div>;
    //             })}
    //           </div>
    //         </Modal>
    //       </>
    //     ) : null,
    // },
  ];

  const handleAdd = () => {
    const newData = {
      id: count,
      name: `Type your name `,
      email: "Type your email ",
      phone: `Type your phone number`,
      username: `Type your username`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id == item.id);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        shape="round"
        ghost
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Button
        onClick={async () => {
          <Spin spinning={loading} />;
          setIsFetching(true);
        }}
        type="primary"
        shape="round"
        style={{
          marginBottom: 16,
          marginLeft: 860,
        }}
      >
        Fetch Data
      </Button>
      <StyledCard title="Click the fetch button to display data">
        {isFetching ? (
          <Table
            components={components}
            rowClassName={"editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
          />
        ) : (
          ""
        )}
      </StyledCard>
    </div>
  );
};

export default EditTable;
