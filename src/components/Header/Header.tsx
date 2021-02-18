import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Avatar, Col, Layout, Menu, Row, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";


export const Header: FC = () => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout;

    return <Header className="header">
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to='/users'>Users</Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <><Col span={1}>
                    <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>

            </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallback}>Log out</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button>
                    <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>}
        </Row>
    </Header>

    // (<header className={s.header}>
    //     <img
    //         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnNLfpaoxKO2v0-m4gmIhyp_IavIeoa1xuKlgofksobKcJ_gja&usqp=CAU'/>
    //
    //     <div className={s.loginBlock}>
    //         {props.isAuth
    //             ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
    //             : <NavLink to={'/login'}>Login</NavLink>}
    //     </div>
    // </header>);
};



