import React, { useState } from "react"
import { UploadOutlined } from "@ant-design/icons"
import { Button, Upload, message } from "antd"
import type { UploadFile, RcFile, UploadProps } from "antd/es/upload/interface"
import { uolodaLargeFile } from '../../api/api'

const Index: React.FC = () => {
	const [fileList, setFileList] = useState([])
	const [uploading, setUploading] = useState(false)

	// 上传文件
	const handleUpload = async () => {
		// const uploadList = 
		// const res = await uolodaLargeFile({
		// 	formData
		// })

		// console.log('res', res)
	}

	const props: UploadProps = {
		beforeUpload: file => {
			const fileList = createFileChunk(file)
			// setFileList(fileList)
			console.log('fileList', fileList)
			return false
		},
		// fileList,
	}

	/**
	 * 创建切片
	 * @param {file} 大文件
	 * @param {size} 切片文件的大小
	 * **/
	const createFileChunk = (file:File, size:number = 2 * 1024 * 1024) => {
		let cur = 0
		let fileChunks = []
		while(cur < file.size) {
			fileChunks.push({
				file: file.slice(cur, cur + size)
			})
			cur += size
		}
		return fileChunks
	}

	/**
	 * 对切片的文件进行处理
	 * **/
	const uplodFile = (list: RcFile[]) => {
		// const requestList
		// console.log(list)
		// list.map({ file, fileName,  })
	}

	return (
		<div>
			<Upload { ...props }>
				<Button icon={ <UploadOutlined /> }>Select File</Button>
			</Upload>
			<Button
				type='primary'
				onClick={ handleUpload }
				disabled={ fileList.length === 0 }
				loading={ uploading }
				style={{ marginTop: 16 }}
			>
				{uploading ? "Uploading" : "Start Upload"}
			</Button>
		</div>
	)
}

export default Index
