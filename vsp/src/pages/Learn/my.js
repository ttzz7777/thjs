import { Input } from "antd";
import Msg from "./msg";
import './my.css'
import UpdateMsg from "./updatemsg";
import { useState, useEffect,useRef } from "react";
import MySave from "./mysave";
import MySend from "./mysend";
import MyOrder from "./myorder";
import Tg from "./tg";
import { Avatar, Row, Col, Modal } from "antd";
import head from "../../asset/b1.jpg"
import { ajax, isGood } from "../../config";
function UpdateMy(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fusername,setFusername] = useState(0);
    const showModal = (value) => {
        setFusername(value.username)
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const [msgPage, setmsgPage] = useState(1);
    function handleToPage(value) {
        props.setPage(value)
    }

    function handleMsgPage(value) {
        setmsgPage(value)
    }
    var user = localStorage.getItem("user")
    user = JSON.parse(user)
    const [gzUser, setGzUser] = useState(0);

    useEffect(() => {
        var vv='1';
        ajax("/geteyes", { wusername: user.username }, "POST").then(res => res.json()).then(json => {
            setGzUser(json.message)
        })


        return () => {

        };
    });


    function handleGetHead(value){
        user.head = `http://localhost:8080/${value}`
    }
    function showMsgPage() {
        var page = ""
        switch (msgPage) {
            case 1:
                page = <UpdateMsg getHead={handleGetHead} getPage={handleToPage}></UpdateMsg>
                break;
            case 2:
                page = <MySave getPage={handleMsgPage}></MySave>
                break;
            case 3:
                page = <MySend getPage={handleMsgPage}></MySend>
                break;
            case 4:
                page = <MyOrder getPage={handleMsgPage}></MyOrder>
                break;
            case 5:
                page = <Tg getPage={handleMsgPage}></Tg>
                break;
            default:
                page = "nothink"
        }

        return (
            <>
                {page}
            </>
        )
    }

    var p = ""
    if (gzUser) {
        p = gzUser.map(item => {
            //console.log(item.head);
            return (
                <>
                    <Col span={4}>
                        <Avatar onClick={()=>showModal(item)} src={item.head} size={50}></Avatar>
                    </Col>
                </>
            )
        })
    }



    var msg = useRef()
    function handleOk1() {
        var d = new Date()
        // console.log(msg.current.resizableTextArea.textArea.value)
        ajax("/sx", {
            susername: fusername,
            fusername: user.username,
            context:msg.current.resizableTextArea.textArea.value,
            utime:`${d.getFullYear()-d.getMonth()+1-d.getDate()}`,
        },"POST").then(res=>res.json()).then(json=>{
            isGood(json,"发送")
        })
    }

    return (
        <>
            <Modal title="发送消息" open={isModalOpen} onOk={handleOk1} onCancel={handleCancel}>
                <Input.TextArea ref={msg}></Input.TextArea>
            </Modal>
            <div className="my-msg">
                <Msg getPage={handleToPage} getMsg={handleMsgPage} updateUser={user.head}></Msg>
            </div>
            <div className="my-box">
                {showMsgPage()}
            </div>
            <div className="my-rightbox">
                <Row gutter={20} wrap>
                    {p}
                </Row>
            </div>
        </>
    )
}

export default UpdateMy;