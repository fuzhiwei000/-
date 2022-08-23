//获取表格数据
export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data,
                    root.total = res.data.total
            }
        })
        .catch(err => {
            throw err
        })
}
//新增修改封装
import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                root.dialogFormVisible = false
                root.$message({ message: res.data.message, type: 'success' })
                callback(root, url)
                root.$refs['form'].resetFields()//清空验证

            }
        })
        .catch(err => {
            throw err
        })
}
//删除数据
export function delData(root, url, id, callback) {
    root.$alert('你确定要删除吗', '提示', {
        confirmButtonText: '确定',
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res => {
                if (res.status === 200) {
                    root.$message({ message: res.data.message, type: 'success' })
                    callback(root, url)
                    // 删除后重新调用渲染数据
                }
            })


        }
    }) .catch(err => {
        throw err
    })
}
// 作业列表获取表格数据方法封装
export function getTableData(root, url, params, arr) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
                root.tableData.map(item => {
                    //map返回一个新的修改过的数组不会改变原数组
                    arr.map(aItem => [
                        item.aItem ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
                    ])
                });
                root.loading = false
            }
        })
        .catch(err => {
            throw err
        })
}

//