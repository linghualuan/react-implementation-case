import request from './axios'

// 上传大文件
export const uolodaLargeFile = (data: object) => {
    return request({
        method: 'post',
        data,
        url: '/uploadLargeFile'
    })
}