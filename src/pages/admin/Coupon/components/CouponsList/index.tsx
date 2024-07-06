import { Button, Popover, Space, Table, notification } from 'antd';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import type { FilterValue } from 'antd/es/table/interface';
import React, { useState } from 'react';
import './CouponsList.scss';
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { useDispatch } from 'react-redux';
// import { ICoupon } from '../../../../../types/coupon.type';
import { ICoupon } from '../../../../../types/coupon.type';

import { CouponError } from '../../../../../utils/helpers';
import { useDeleteCouponMutation } from '../../coupon.service';
import { startEditCoupon } from '../../coupon.slice';

interface DataCouponType {
  key: React.Key;
  code: string;
  discount: number;
  description: string;
  validFrom: string;
  validUntil: string;
  actions?: any;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

interface CouponListProps {
  data: ICoupon[];
  onCouponEdit: (couponId: string) => void;
}

const SettingContent = ({ couponId }: { couponId: string }) => {
  const [deleteCoupon, { isLoading }] = useDeleteCouponMutation();

  const deleteCouponHandler = () => {
    deleteCoupon(couponId)
      .unwrap()
      .then((result) => {
        notification.success({
          message: 'Delete coupon successfully',
          description: result.message
        });
      })
      .catch((error: CouponError) => {
        notification.error({
          message: 'Delete coupon failed',
          description: error.data.message
        });
      });
  };

  return (
    <div>
      <p>Content</p>
      <Button type="link" danger onClick={deleteCouponHandler} loading={isLoading}>
        Delete
      </Button>
    </div>
  );
};

const CouponList: React.FC<CouponListProps> = (props) => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10 // Adjust page size as needed
    }
  });

  const dispatch = useDispatch();

  const couponEditHandler = (couponId: string) => {
    props.onCouponEdit(couponId);
    dispatch(startEditCoupon(couponId));
  };

  const columns: ColumnsType<DataCouponType> = [
    {
      title: 'Code',
      dataIndex: 'code',
      width: '15%'
    },
    {
      title: 'Discount (%)',
      dataIndex: 'discount',
      sorter: (a, b) => a.discount - b.discount
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Valid From',
      dataIndex: 'validFrom'
    },
    {
      title: 'Valid Until',
      dataIndex: 'validUntil'
    },
    {
      title: 'Manage',
      dataIndex: 'actions',
      render: (_, record) => (
        <Space>
          <Button onClick={() => couponEditHandler(record.key.toString())}>
            <EditOutlined />
          </Button>
          <Popover placement='bottomRight' content={<SettingContent couponId={record.key.toString()} />} title='Actions'>
            <Button>
              <EllipsisOutlined />
            </Button>
          </Popover>
        </Space>
      )
    }
  ];

  // const couponsSource: DataCouponType[] = props.data.map((couponItem) => ({
  //   key: couponItem._id,
  //   code: couponItem.code,
  //   discount: couponItem.discount,
  //   description: couponItem.description,
  //   validFrom: couponItem.validFrom,
  //   validUntil: couponItem.validUntil
  // }));
  // const couponsSource: DataCouponType[] = props.data.map((couponItem) => ({
  //   key: couponItem._id,
  //   code: couponItem.code,
  //   discount: couponItem.discount,
  //   description: couponItem.description,
  //   validFrom: couponItem.validFrom, // Convert Date to string
  //   // const formattedDate = coupon.date ? coupon.date.toDateString() : 'Date not available';

  //   validUntil: couponItem.validUntil.toString() // Convert Date to string
  // }));

  const couponsSource: DataCouponType[] = props.data.map((couponItem) => ({
    key: couponItem._id,
    code: couponItem.code,
    discount: couponItem.discount,
    description: couponItem.description,
    validFrom: couponItem.validFrom instanceof Date ? couponItem.validFrom.toISOString() : couponItem.validFrom,
    validUntil: couponItem.validUntil instanceof Date ? couponItem.validUntil.toISOString() : couponItem.validUntil
  }));
  
  
  const onChange: TableProps<DataCouponType>['onChange'] = (pagination, filters, sorter, extra) => {
    setTableParams({ pagination });
  };

  return (
    <div className='coupon-list'>
      <Table
        columns={columns}
        dataSource={couponsSource}
        onChange={onChange}
        pagination={tableParams.pagination}
      />
    </div>
  );
};

export default CouponList;
