import React, { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function AddEditTransaction({ 
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  getTransactions,
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  const onFinish = async (values) => {
   try {
     const user = JSON.parse(localStorage.getItem('expense-tracker-user'))
     setLoading(true)
     await axios.post("/api/transactions/add-transaction", {...values,userid:user._id},key: uuidv4(),);
     //请求所有交易流水
      getTransactions();
      message.success("流水添加成功！");
      setShowAddEditTransactionModal(false);
      setLoading(false);
   } catch (error) {
      setLoading(false)
     message.error("抱歉，出错了！");
   }
 };

  return (
    <Modal>
      {/*3 加载组件*/}
      {loading && <Spinner />}
      <Modal
        title="添加流水"
        open={showAddEditTransactionModal}
        onCancel={() => setShowAddEditTransactionModal(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          className="transaction-form"
          onFinish={onFinish}
        >
          <Form.Item label="金额" name="amount">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="类型" name="type">
            <Select
              initialValue="收入"
              options={[
                {
                  value: "all",
                  label: "所有类型",
                },
                {
                  value: "income",
                  label: "收入",
                },
                {
                  value: "expense",
                  label: "支出",
                },
              ]}
            />
          </Form.Item>

          <Form.Item label="分类" name="category" initialValue="工资">
            <Select
              // defaultValue="工资"
              options={[
                {
                  value: "salary",
                  label: "工资",
                },
                {
                  value: "freelance",
                  label: "兼职",
                },
                {
                  value: "food",
                  label: "饮食",
                },
                {
                  value: "entertainment",
                  label: "娱乐",
                },
                {
                  value: "investment",
                  label: "投资",
                },
                {
                  value: "travel",
                  label: "旅行",
                },
                {
                  value: "education",
                  label: "教育",
                },
                {
                  value: "medical",
                  label: "医疗",
                },
                {
                  value: "tax",
                  label: "交通",
                },
              ]}
            />
          </Form.Item>

          <Form.Item label="时间" name="date">
            <Input type="date" />
          </Form.Item>
          {/**/}
          <Form.Item label="关联" name="reference">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="描述" name="description">
            <Input type="text" />
          </Form.Item>

          {/*3 自定义footer*/}
          <div className="d-flex justify-content-end">
            <button className="primary" type="submit">
              保存
            </button>
          </div>
        </Form>
      </Modal>
    </Modal>
  );
}

export default AddEditTransaction;
