import {
  BarChartOutlined,
  BorderOuterOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { UserRole } from '../../../types/user.type';
import './SideBar.scss';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const adminRole = useSelector((state: RootState) => state.auth.adminRole);

  const navigateHandler: MenuProps['onClick'] = (e) => {
    console.log('click', e);
    navigate(e.key);
    setOpenDrawer(true);
  };

  const items: MenuItem[] = [
    getItem('sangtrandev', 'myprofile', <BorderOuterOutlined />),
    getItem('Dashboard', 'dashboard', <PieChartOutlined />),
    getItem('Categories', 'categories', <UnorderedListOutlined />, [getItem('Categories', 'categories')]),
    getItem('Add Coupon', 'add-coupon', <FileOutlined />,  [getItem('Add Coupon', 'add-coupon')]),

    getItem('Courses', 'courses', <DesktopOutlined />, [getItem('Course Manager', 'courses')]),
    (adminRole === UserRole.ADMIN &&
      getItem('Orders', 'orders', <ShoppingCartOutlined />, [getItem('Order Manager', 'orders')])) as MenuItem,
    (adminRole === UserRole.ADMIN &&
      getItem('Users', 'users', <UserOutlined />, [
        getItem('All Users', 'users'),
        getItem('Admins', 'admins'),
        getItem('Intructors', 'intructors')
      ])) as MenuItem,
    (adminRole === UserRole.ADMIN &&
      getItem('Reports Center', 'reports', <BarChartOutlined />, [
        getItem(
          'User Analytics',
          'user-analytics',
          null,
          [
            getItem('User Progress', 'reports/users-progress'),
            // getItem('User Segment', 'reports/users-segment'),
            getItem('Course Insights', 'reports/course-insights')
          ],
          'group'
        ),
        getItem(
          'Exams',
          'exams',
          null,
          [
            getItem('Certifications', 'reports/certifications'),
            getItem('Review center', 'reports/reviews-center')
            // getItem('Question bank', 'reports/questions-bank')
          ],
          'group'
        ),
        getItem(
          'Sales',
          'sales',
          null,
          [
            getItem('Orders', 'reports/orders'),
            getItem('Courses revenues', 'reports/courses-revenue'),
            getItem('Instructors Revenues', 'reports/instructors-revenue'),
            getItem('Cancelled Sales', 'reports/cancelled-sales')
          ],
          'group'
        ),
        getItem('Add Coupon', 'add-coupon', <FileOutlined />)
      ])) as MenuItem,
    getItem('Setting', 'setting', <SettingOutlined />, [getItem('Settings', 'settings')]),
    getItem('My account', 'account', <UserAddOutlined />),
    getItem('Need Help ?', 'help', <FileOutlined />) ,

  ];

  return (
    <Sider
      className='sidebar'
      style={{ backgroundColor: '#fff' }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className='demo-logo-vertical' />
      <Menu
        className='sidebar__menu'
        onClick={navigateHandler}
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </Sider>
  );
};

export default SideBar;






















// import {
//   BarChartOutlined,
//   BorderOuterOutlined,
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   SettingOutlined,
//   ShoppingCartOutlined,
//   UnorderedListOutlined,
//   UserAddOutlined,
//   UserOutlined
// } from '@ant-design/icons';
// import { Layout, Menu, MenuProps, Modal, Form, Input, Select, Button, message } from 'antd';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { RootState } from '../../../store/store';
// import { UserRole } from '../../../types/user.type';
// import CouponManagement from '../../../pages/admin/CouponManagemant';
// import './SideBar.scss';

// const { Sider } = Layout;
// const { Option } = Select;
// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group'
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type
//   } as MenuItem;
// }

// const SideBar: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [showCouponModal, setShowCouponModal] = useState(false);
//   const navigate = useNavigate();

//   const isAuth = useSelector((state: RootState) => state.auth.isAuth);
//   const adminRole = useSelector((state: RootState) => state.auth.adminRole);

//   const navigateHandler: MenuProps['onClick'] = (e) => {
//     console.log('click', e);
//     navigate(e.key);
//     setOpenDrawer(true);
//   };

//   const handleAddCoupon = (couponData: any) => {
//     // Implement API call to add coupon here
//     console.log('Adding coupon:', couponData);
//     // Mock API call example:
//     fetch('http://localhost:9000/admin/coupon/coupon', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Add any authentication headers if required
//       },
//       body: JSON.stringify(couponData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Coupon added successfully:', data);
//       message.success('Coupon added successfully');
//     })
//     .catch(error => {
//       console.error('Failed to add coupon:', error);
//       message.error('Failed to add coupon');
//     });
//     setShowCouponModal(false);
//   };

//   const items: MenuItem[] = [
//     getItem('sangtrandev', 'myprofile', <BorderOuterOutlined />),
//     getItem('Dashboard', 'dashboard', <PieChartOutlined />),
//     getItem('Categories', 'categories', <UnorderedListOutlined />, [getItem('Categories', 'categories')]),
//     getItem('Courses', 'courses', <DesktopOutlined />, [getItem('Course Manager', 'courses')]),
//     getItem('Add Coupon', 'add-coupon', <FileOutlined />, [getItem('Add', 'add-coupon')]),
//     (adminRole === UserRole.ADMIN &&
//       getItem('Orders', 'orders', <ShoppingCartOutlined />, [getItem('Order Manager', 'orders')])) as MenuItem,
//     (adminRole === UserRole.ADMIN &&
//       getItem('Users', 'users', <UserOutlined />, [
//         getItem('All Users', 'users'),
//         getItem('Admins', 'admins'),
//         getItem('Instructors', 'intructors')
//       ])) as MenuItem,
//     (adminRole === UserRole.ADMIN &&
//       getItem('Reports Center', 'reports', <BarChartOutlined />, [
//         getItem(
//           'User Analytics',
//           'user-analytics',
//           null,
//           [
//             getItem('User Progress', 'reports/users-progress'),
//             // getItem('User Segment', 'reports/users-segment'),
//             getItem('Course Insights', 'reports/course-insights')
//           ],
//           'group'
//         ),
//         getItem(
//           'Exams',
//           'exams',
//           null,
//           [
//             getItem('Certifications', 'reports/certifications'),
//             getItem('Review center', 'reports/reviews-center')
//             // getItem('Question bank', 'reports/questions-bank')
//           ],
//           'group'
//         ),
//         getItem(
//           'Sales',
//           'sales',
//           null,
//           [
//             getItem('Orders', 'reports/orders'),
//             getItem('Courses revenues', 'reports/courses-revenue'),
//             getItem('Instructors Revenues', 'reports/instructors-revenue'),
//             getItem('Cancelled Sales', 'reports/cancelled-sales')
//           ],
//           'group'
//         ),
//         getItem('Add Coupon', 'add-coupon', <FileOutlined />)
//       ])) as MenuItem,
//     getItem('Setting', 'setting', <SettingOutlined />, [getItem('Settings', 'settings')]),
//     getItem('My account', 'account', <UserAddOutlined />),
//     getItem('Need Help ?', 'help', <FileOutlined />)
    
//   ];

//   return (
//     <Sider
//       className='sidebar'
//       style={{ backgroundColor: '#fff' }}
//       collapsible
//       collapsed={collapsed}
//       onCollapse={(value) => setCollapsed(value)}
//     >
//       <div className='demo-logo-vertical' />
//       <Menu
//         className='sidebar__menu'
//         onClick={navigateHandler}
//         theme='light'
//         defaultSelectedKeys={['1']}
//         mode='inline'
//         items={items}
//       />
        
//       <CouponManagement
//         open={showCouponModal}
//         onClose={() => setShowCouponModal(false)}
//         onAddCoupon={handleAddCoupon}
//       />
      
//     </Sider>
//   );
// };

// export default SideBar;
