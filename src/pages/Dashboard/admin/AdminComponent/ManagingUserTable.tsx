
// export type TTableData = Pick<
//   TAcademicSemester,
//   'name' | 'year' | 'startMonth' | 'endMonth'
// >;

import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { TQueryParam } from '../../../../types/global';

const ManagingUserTable = () => {
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Car Name',
      key: 'carName',
      dataIndex: 'carName',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
    },
    {
      title: 'OrderDate',
      key: 'orderDate',
      dataIndex: 'orderDate',
      filters: [
        {
          text: '2024',
          value: '2024',
        },
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
      ],
    },
    {
      title: 'Quantity',
      key: 'quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log({filters,extra})

    if(extra.action=== 'filter'){
      const queryParams :TQueryParam[] = []
      filters.name?.forEach((item) => 
        queryParams.push({name:'name', value:item}
      ));

      filters.year?.forEach((item) =>
            queryParams.push({ name: 'year', value: item })
          );
          console.log(queryParams)
     
    //   setParams(queryParams)
    }
    
   
  };

  return (
    <Table
    //   loading={isFetching}
      columns={columns}
    //   dataSource={columns}
      onChange={onChange}
    />
  );
}

export default ManagingUserTable
