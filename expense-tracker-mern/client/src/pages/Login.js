import { Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "../resources/authentication.css";
import axios from 'axios'
import Spinner from "../components/Spinner";

//3 结构导航
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", values);
            localStorage.setItem(
                "expense-tracker-user",
                //解决方法
                JSON.stringify({ ...response.data, password: "" })
            );
            setLoading(false)
            message.success("登录成功！");
            navigate("/");
        } catch (error) {
            setLoading(false)
            message.error("登录失败！");
        }

    }

    useEffect(() => {
        if (localStorage.getItem("expense-tracker-user")) {
            navigate("/");
        }
    }, []);


    return (
        <div className="register">
            {loading && <Spinner />}
            <div className="row justify-content-center align-items-center w-100 h-100">
                <div className="col-md-4">
                    <Form layout="vertical" onFinish={onFinish}>
                        <h1>用户登录</h1>
                        <Form.Item label="邮箱" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="密码" name="password">
                            {/*在不想使用缓存的input标签中添加 autocomplete="off"属性;*/}
                            <Input type="password" autocomplete="new-password" />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/register">还没有注册 ,点击进入注册页面</Link>
                            <button className="primary" type="submit">
                                登录
                            </button>
                        </div>
                    </Form>
                </div>

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
            </div>
        </div>
    );

}
export default Login;
