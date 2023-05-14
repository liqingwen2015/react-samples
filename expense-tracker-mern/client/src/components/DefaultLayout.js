import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { useNavigate } from 'react-router-dom'

import "../resources/default-layout.css";

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem("expense-tracker-user"));
    const navigate = useNavigate()
    const items = [
        {
            key: '1',
            label: (
                <li onClick={() => {
                    localStorage.removeItem('expense-tracker-user')
                    navigate("/login");
                }}>退出</li>
            ),
        }
    ]
    return (
        <div className="layout">
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="logo">我的记账本</h1>
                </div>
                <div>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                        <button className='primary'>{user.name}</button>
                    </Dropdown>
                </div>
            </div>

            <div className="content">{props.children}</div>
        </div>
    );
}

export default DefaultLayout;
