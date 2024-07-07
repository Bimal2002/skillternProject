import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Skeleton, Space } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCouponsQuery } from './coupon.service';
import { startEditCoupon } from './coupon.slice';
import CouponsList from './components/CouponsList';
import CreateCoupon from './components/CreateCoupon';
import { ICoupon } from '../../../types/coupon.type';
import {IParams} from  '../../../types/params.type';

const { Search } = Input;

const Coupons = () => {
  const [params, setParams] = useState<IParams>({
    _limit: 12,
    _page: 1,
    _q: ''
  });

  const { data, isFetching } = useGetCouponsQuery({ params });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onSearchHandler = (value: string) => {
    setParams({ ...params, _q: value });
  };

  // const { data, isFetching } = useGetCouponsQuery({ params });
  // const [open, setOpen] = useState(false);
  // const dispatch = useDispatch();

  // const onSearchHandler = (value: string) => {
  //   setParams({ ...params, _q: value });
  // };

  const newCouponHandler = () => {
    dispatch(startEditCoupon(''));
    setOpen(true);
  };

  const onCouponEdit = (couponId: string) => {
    // Handle edit functionality here
    console.log('Editing coupon with ID:', couponId);
  };

  return (
    <div className='coupons'>
      <div className='coupons__wrap'>
        <div className='coupons__filter'>
          <Space className='sub-header__wrap'>
            <Button onClick={newCouponHandler} type='primary' icon={<PlusOutlined />}>
              New Coupon
            </Button>
            <Search placeholder='Search coupons' onSearch={onSearchHandler} style={{ width: 200 }} />
          </Space>
        </div>
        <div className='coupons__content'>
          {isFetching ? <Skeleton /> : <CouponsList data={data?.coupons || []} onCouponEdit={onCouponEdit} />}
        </div>
      </div>
      <CreateCoupon isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Coupons;
