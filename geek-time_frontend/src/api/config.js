import axios from 'axios';

// 这里不使用 fetch 因为存在兼容性问题
// 推荐使用 axios 兼容性更好

export const baseUrl = "http://localhost/data"; // 全局的后端 api 前缀

const axiosInstance = axios.create({
    baseURL:baseUrl
})

export { axiosInstance }

export const iconSet = [{
    data: [{
        tab1: [
            {
<<<<<<< HEAD
                "id": 1,
                "iconUrl": "\ue606",
                "name": "账户",
                "count": "0.0"
            },
            {
                "id": 2,
                "iconUrl": "\ue6ce",
                "name": "我的课程",
                "count": ""
=======
                id: 1,
                iconUrl: "\ue605",
                name: "账户",
                count: "0.0",
                href:'/user/account',
            },
            {
                id: 2,
                iconUrl: "\ue61d",
                name: "我的课程",
                href:'/user/course',
>>>>>>> zhouzihan
            },
            {
                id: 3,
                iconUrl: "\ue677",
                name: "我的订单",
                href:'/user/order',
                
            }
        ],
        tab2: [
            {
                id: 1,
                iconUrl: "\ue620",
                name: "商城订单",
                href:'/user/account',
            },
            {
                id: 2,
                iconUrl: "\ue62b",
                name: "我的拼团",
                href:'/user/account',
            },
            {
                id: 3,
                iconUrl: "\ue654",
                name: "我的证书",
                href:'/user/account',
            }
        ],
        tab3: [
            {
                id: 1,
                iconUrl: "\ue664",
                name: "我的每日一课",
                href:'/user/account',
            }
        ],
        tab4: [
            {
<<<<<<< HEAD
                "id": 1,
                "iconUrl": "\ue65d",
                "name": "礼券",
                "count": "2"
=======
                id: 1,
                iconUrl: "\ue61f",
                name: "礼券",
                count: "2",
                href:'/user/account',
>>>>>>> zhouzihan
            },
            {
                id: 2,
                iconUrl: "\ue6ad",
                name: "课程赠送",
                href:'/user/account',
            },
            {
<<<<<<< HEAD
                "id": 3,
                "iconUrl": "\ue69f",
                "name": "分享有赏",
                "count": ""
=======
                id: 3,
                iconUrl: "\ue60c",
                name: "分享有赏",
                href:'/user/account',
>>>>>>> zhouzihan
            },
            {
                id: 4,
                iconUrl: "\ue608",
                name: "邀请好友",
                count: "得30元",
                href:'/user/account',
            },
            {
<<<<<<< HEAD
                "id": 5,
                "iconUrl": "\ue603",
                "name": "关注服务号领币",
                "count": ""
=======
                id: 5,
                iconUrl: "\ue60d",
                name: "关注服务号领币",
                href:'/user/account',
>>>>>>> zhouzihan
            }
        ],
        tab5: [
            {
                id: 1,
                iconUrl: "\ue60e",
                name: "帮助与反馈",
                href:'/user/account',
            },
            {
<<<<<<< HEAD
                "id": 2,
                "iconUrl": "\ue617",
                "name": "设置",
                "count": ""
=======
                id: 2,
                iconUrl: "\ue616",
                name: "设置",
                href:'/user/account',
>>>>>>> zhouzihan
            }
        ]
    }]
}]