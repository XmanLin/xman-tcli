module.exports = function (funcName) {
    return `
import React, {useEffect, useState} from 'react';
import { Table } from 'antd';

const ${funcName} = () => {
    const [list, setList] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const columns:any[] = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            align: 'center',
            render: (text: any, record:any) => {
                return ''
            }
        },
    ]
    useEffect(() => {
        getList()
    },[page])

    const getList = () => {

    }

    const pagination: any = {
        current: page,
        showSizeChanger: false,
        showQuickJumper: false,
        onChange: (pageNum: any, pageSize: any) => {
          setPage(pageNum);
        },
        total,
        pageSize: 10,
    };


    return (
        <div className="">
            <Table
            loading={isLoading}
            columns={columns}
            dataSource={list}
            rowKey=""
            size="small"
            bordered
            pagination={pagination} />
        </div>
    )
}

export default ${funcName};
    ` 
}