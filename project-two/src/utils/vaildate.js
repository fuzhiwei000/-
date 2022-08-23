// 用户名匹配
export function nameRule(rule,value,callback) {
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入6到10位用户名'))
    } else {
        callback()
    }
}
// 密码匹配
export function passRule(rule,value,callback) {
    // 6-12位,包含大小写字母数字及其大小写字母
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!pass.test(value)) {
        callback(new Error('请输入6到12位密码包含大小写'))
    } else {
        callback()
    }
}