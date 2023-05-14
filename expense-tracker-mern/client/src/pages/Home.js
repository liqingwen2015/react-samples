import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Input, Modal, Select, message, Table } from "antd";
import "../resources/transaction.css";
import DefaultLayout from "../components/DefaultLayout";
import AddEditTransaction from "../components/AddEditTransaction";
import Spinner from "../components/Spinner";
//2格式化组件库
import moment from "moment";
function Home() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  //3 添加loading状态
  const [loading, setLoading] = useState(false);
  //4 初始化流水状态
  const [transactionsData, setTransactionsData] = useState([]);

  //2 创建获取所有流水的方法
  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
      setLoading(true);
      const response = await axios.post(
        "/api/transactions/get-all-transactions",
        {
          userid: user._id,
        }
      );
      //6打印测试
      console.log(response.data);
      //5 存储流水
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("抱歉，出错了！");
    }
  };

  // 1 设置useEffect钩子函数
  useEffect(() => {
    getTransactions();
  }, []);

  //1创建表格的columns
  const columns = [
    {
      title: "日期",
      key: "date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "金额",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "分类",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "类型",
      key: "type",
      dataIndex: "type",
    },
    {
      title: "关联",
      key: "reference",
      dataIndex: "reference",
    },
  ];

  // 5监听表单提交
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <div className="filter d-flex justify-content-between align-items-center">
        {/*左侧下拉框*/}
        <div>
          <div>
            {/*右侧按钮*/}
            <div>
              <button
                className="primary"
                onClick={() => setShowAddEditTransactionModal(true)}
              >
                添加流水
              </button>
              <div></div>

              <div className="table-analtics"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-analtics">
        {/*3引入table组件进行展示*/}
        <div className="table">
          <Table columns={columns} dataSource={transactionsData} />
        </div>
      </div>
      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
        />
      )}
    </DefaultLayout>
  );
}

export default Home;
