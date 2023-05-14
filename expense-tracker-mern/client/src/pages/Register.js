import { Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios'
import Spinner from "../components/Spinner";

function Register() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(true);

    useEffect(() => {
        if (localStorage.getItem("expense-tracker-user")) {
            navigate("/");
        }
    }, []);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await axios.post("/api/users/register", values);
            message.success("注册成功！");
            setLoading(false);
        } catch (error) {
            message.error("抱歉，出错了！");
            setLoading(false);
        }
    };


    return (
        <div className="register">
            {loading && <Spinner />}
            <div className="row justify-content-center align-items-center w-100 h-100">
                <div className="col-md-5">
                    <div className="lottie">
                        <lottie-player
                            src="https://assets3.lottiefiles.com/packages/lf20_06a6pf9i.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                </div>
                <div className="col-md-4">
                    {/*1 添加onFinish:提交表单且数据验证成功后回调事件*/}
                    <Form layout="vertical" onFinish={onFinish}>
                        <h1>用户注册</h1>

                        <Form.Item label="姓名" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="邮箱" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="密码" name="password">
                            <Input type="password" />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/login">已经注册 ,点击进入登录页面</Link>
                            <button className="primary" type="submit">
                                注册
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;

