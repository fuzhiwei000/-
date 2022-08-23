import service from '../service.js'
import qs from 'qs'
// 项目中大多数会把对应的接口请求封装成api
// 登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data: data
    })
}

// 学生列表
export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params: params
    })
}

//学生列表删除接口
export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}
//学生列表查询与重置本质也是渲染一边只是渲染单独的
// 信息列表新增接口
// export function info(data) {
//     data = qs.stringify(data)
//     // qs一般不用，这个后端数据需要用
//     return service({
//         method: 'post',
//         url: '/info',
//         data: data
//     })
// }
// // 信息列表修改接口
// export function updataInfo(data) {
//     data = qs.stringify(data)
//     // qs一般不用，这个后端数据需要用
//     return service({
//         method: 'put',
//         url: '/info',
//         data: data
//     })
// }
// 信息修改和列表查询接口合二为一
export function Info(type, data) {
    // 查询查所有不需要传参
    data = qs.stringify(data)
    let obj = { method: type, url: '/info', data }
    return service(obj)
}
// 信息列表查询接口
export function getInfo() {
    // 查询查所有不需要传参
    return service({
        method: 'get',
        url: '/info',
    })
}
// 信息列表删除接口
export function infoDel(id) {
    // 查询查所有不需要传参
    return service({
        method: 'delete',
        url: `/info/${id}`,
    })
}
//数据概览的接口图表
export function dataview() {
    return service({
        method:'get',
        url:'/dataview'
    })
}
//旅游地图的接口
export function travel() {
    return service({
        method:'get',
        url:'travel'
    })
}