// import { CaretRightOutlined } from '@ant-design/icons';
// import { Col, Collapse, CollapseProps, Divider, Row, Select, Skeleton, theme } from 'antd';
// import type { CSSProperties } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import ButtonCmp from '../../../components/Button';
// import { RootState } from '../../../store/store';
// import { IOrder } from '../../../types/order.type';
// import { useCreateOrderMutation, useGetRetrieveCartQuery, useGetUserQuery } from '../client.service';
// import { clearCart } from '../client.slice';
// import './Checkout.scss';
// import DetailItem from './components/DetailItem';
// import axios from 'axios';
// declare global {
//   interface Window {
//     Razorpay: any; // Adjust the type as per your usage
//   }
// }

// const text = `
// Name on card
// TRAN NHAT SANG

// Card number
// **** 0124

// Expiry date
// 5/2026
// `;

// const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
//   {
//     key: '1',
//     label: 'Visa  **** 0124',
//     children: <p>{text}</p>,
//     style: panelStyle
//   },
//   {
//     key: '2',
//     label: 'Credit/Debit Card',
//     children: <p>{text}</p>,
//     style: panelStyle
//   },
//   {
//     key: '3',
//     label: 'Paypal',
//     children: <p>{text}</p>,
//     style: panelStyle
//   }
// ];

// const Checkout = () => {
//   const { token } = theme.useToken();
//   const [createOrder, createOrderResult] = useCreateOrderMutation();

//   const panelStyle = {
//     marginBottom: 0,
//     background: token.colorFillAlter,
//     borderRadius: token.borderRadiusLG,
//     border: '1px solid rgba(0, 0, 0, 0.1)'
//   };

//   const cart = useSelector((state: RootState) => state.client.cart);
//   const courseIds = cart.items.map((item) => item.courseId);

//   const { data: cartData, isFetching: isCartFetching } = useGetRetrieveCartQuery(
//     { courseIds },
//     {
//       skip: !courseIds.length
//     }
//   );

//   const cartItems = cartData?.cart.items || [];
//   const totalPrice = cartData?.cart.totalPrice || 0;

//   const userId = useSelector((state: RootState) => state.auth.userId);

//   const { data: userData } = useGetUserQuery(userId, {
//     skip: !userId
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const checkoutHandler = () => {
//     const newOrder = {
//       items: cart?.items || [],
//       user: {
//         _id: userData?.user._id,
//         email: userData?.user.email,
//         name: userData?.user.name,
//         phone: userData?.user.phone
//       },
//       transaction: {
//         method: 'VNPay'
//       },
//       totalPrice: totalPrice,
//       note: 'No caption',
//       vatFee: totalPrice * 0.1
//     };

//     // Assuming this is within a function or a component
//     createOrder(newOrder as Omit<IOrder, '_id'>)
//       .unwrap()
//       .then((result) => {
//         if (result.order._id) {
//           dispatch(clearCart());
//           navigate(`/order-completed?orderId=${result.order._id}`);

//         }
//       })
//       .catch((error) => {
//         console.log('Error creating order:', error);
//       });

//     console.log(createOrderResult);
//   };

//   // const checkoutHandler = async () => {
//   //   try {
//   //     const response = await axios.post('http://localhost:9000/order', {
//   //       amount: totalPrice * 100, // Razorpay requires amount in paise
//   //       currency: 'INR',
//   //     });

//   //     const options = {
//   //       key: 'rzp_test_LyBRVIW5CKxzOE', // Replace with your actual Razorpay API key
//   //       amount: response.data.amount,
//   //       currency: response.data.currency,
//   //       order_id: response.data.id,
//   //       name: 'Your App Name',
//   //       description: 'Purchase Description',
//   //       image: 'https://example.com/your_logo.png',
//   //       handler: async (response: any) => {
//   //         const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
//   //         const newOrder = {
//   //           items: cart.items,
//   //           user: {
//   //             _id: userData?.user._id,
//   //             email: userData?.user.email,
//   //             name: userData?.user.name,
//   //             phone: userData?.user.phone,
//   //           },
//   //           transaction: {
//   //             method: 'Razorpay',
//   //             razorpay_payment_id,
//   //             razorpay_order_id,
//   //             razorpay_signature,
//   //           },
//   //           totalPrice: totalPrice,
//   //           note: 'No caption',
//   //           vatFee: totalPrice * 0.1,
//   //         };

//   //         try {
//   //           const result = await createOrder(newOrder as Omit<IOrder, '_id'>).unwrap();
//   //           if (result.order?._id) {
//   //             dispatch(clearCart());
//   //             navigate(`/order-completed?orderId=${result.order._id}`);
//   //           }
//   //         } catch (error) {
//   //           console.error('Failed to create order:', error);
//   //           // Handle error gracefully (e.g., show error message to user)
//   //         }
//   //       },
//   //       prefill: {
//   //         name: userData?.user.name,
//   //         email: userData?.user.email,
//   //         contact: userData?.user.phone,
//   //       },
//   //       theme: {
//   //         color: '#F37254', // Customize theme color to match your app
//   //       },
//   //     };

//   //     const razorpay = new window.Razorpay(options);
//   //     razorpay.open();

//   //   } catch (error) {
//   //     console.error('Error during checkout:', error);
//   //     // Handle error gracefully (e.g., show error message to user)
//   //   }
//   // };

//   return (
//     <div className='checkout'>
//       <div className='checkout__wrap container '>
//         <Row>
//           <Col className='checkout__col checkout__col--left spacing-h-sm' md={12}>
//             <h2 className='checkout__title'>Checkout</h2>
//             <h3 className='checkout__billing-title'>Billing address</h3>
//             <div className='checkout__countries'>
//               <div className='checkout__countries-header'>
//                 <span className='checkout__countries-header-item checkout__countries-title'>Country</span>
//                 <span className='checkout__countries-header-item checkout__countries-required'>Required</span>
//               </div>
//               <div className='checkout__countries-body'>
//                 <Select
//                   className='checkout__countries-select'
//                   defaultValue='Viet Nam'
//                   style={{ width: '50%' }}
//                   options={[
//                     { value: 'Singapore', label: 'Singapore' },
//                     { value: 'Indo', label: 'Indo' },
//                     { value: 'Malay', label: 'Malay' }
//                   ]}
//                 />

//                 <div className='checkout__countries-condition-term'>
//                   Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax
//                   jurisdictions.
//                 </div>
//               </div>

//               <div className='checkout__payment-methods'>
//                 <div className='checkout__payment-header'>
//                   <h3 className='checkout__payment-title'>Payment method</h3>
//                   <span className='checkout__payment-secured'>Secured connection</span>
//                 </div>
//                 <div className='checkout__payment-body'>
//                   <Collapse
//                     bordered={false}
//                     defaultActiveKey={['1']}
//                     expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
//                     style={{ background: token.colorBgContainer }}
//                     items={getItems(panelStyle)}
//                   />
//                 </div>
//               </div>
//               <div className='checkout__orders-detail'>
//                 <h3 className='checkout__orders-detail-title'>Order details</h3>
//                 {isCartFetching && <Skeleton />}
//                 {!isCartFetching &&
//                   cartItems.map((cartItem: { _id: string; name: string; thumbnail: string; finalPrice: number }) => {
//                     return <DetailItem key={cartItem._id} courseItem={cartItem} />;
//                   })}
//               </div>
//             </div>
//           </Col>
//           <Col className='checkout__col checkout__col--right spacing-h-sm' md={12}>
//             <Row>
//               <Col md={12}>
//                 <div className='checkout__summary'>
//                   <h3 className='checkout__summary-title'>Summary</h3>
//                   <div className='checkout__summary-row checkout__summary-price'>
//                     <span className='checkout__summary-col checkout__summary-price-label'>Original Price:</span>
//                     <span className='checkout__summary-col checkout__summary-price-text'>${totalPrice}</span>
//                   </div>
//                   <Divider className='checkout__summary-divider' />
//                   <div className='checkout__summary-row checkout__summary-total'>
//                     <span className='checkout__summary-col checkout__summary-total-label'>Total:</span>
//                     <span className='checkout__summary-col checkout__summary-total-text'>${totalPrice}</span>
//                   </div>

//                   <div className='checkout__summary-notify'>
//                     By completing your purchase you agree to these <Link to='/'> Terms of Service.</Link>
//                   </div>
//                   <ButtonCmp onClick={checkoutHandler} className='checkout__summary-btn btn btn-primary btn-md'>
//                     Complete Checkout
//                   </ButtonCmp>
//                 </div>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



import { CaretRightOutlined } from '@ant-design/icons';
import { Col, Collapse, Divider, Row, Select, Skeleton, theme } from 'antd';
import type { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonCmp from '../../../components/Button';
import { RootState } from '../../../store/store';
import { IOrder } from '../../../types/order.type';
import { useCreateOrderMutation, useGetRetrieveCartQuery, useGetUserQuery } from '../client.service';
import { clearCart } from '../client.slice';
import './Checkout.scss';
import DetailItem from './components/DetailItem';
import axios from 'axios';
// import { theme } from 'antd';
import { useLocation } from 'react-router-dom';


declare global {
  interface Window {
    Razorpay: any; // Adjust the type as per your usage
  }
}

const text = `
Name on card
TRAN NHAT SANG

Card number
**** 0124

Expiry date
5/2026
`;

const getItems = (panelStyle: React.CSSProperties) => [
  {
    key: '1',
    label: 'Visa  **** 0124',
    children: <p>{text}</p>,
    style: panelStyle
  },
  {
    key: '2',
    label: 'Credit/Debit Card',
    children: <p>{text}</p>,
    style: panelStyle
  },
  {
    key: '3',
    label: 'Paypal',
    children: <p>{text}</p>,
    style: panelStyle
  }
];

const Checkout = () => {
  const { token } = theme.useToken();
  const [createOrder, createOrderResult] = useCreateOrderMutation();
  const location = useLocation();
  const totalP = location.state?.totalPrice || 0;

  const panelStyle = {
    marginBottom: 0,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: '1px solid rgba(0, 0, 0, 0.1)'
  };

  const cart = useSelector((state: RootState) => state.client.cart);
  const courseIds = cart.items.map((item) => item.courseId);

  const { data: cartData, isFetching: isCartFetching } = useGetRetrieveCartQuery(
    { courseIds },
    {
      skip: !courseIds.length
    }
  );

  const cartItems = cartData?.cart.items || [];
  const totalPrice = cartData?.cart.totalPrice || 0;

  const userId = useSelector((state: RootState) => state.auth.userId);

  const { data: userData } = useGetUserQuery(userId, {
    skip: !userId
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutHandler = async () => {
    try {
      const orderData = {
        courseId: cart.items.map((item) => item.courseId), // Assuming courseId is an array of courseIds from cart.items
        items: cart.items.map((item) => ({ courseId: item.courseId })),
        user: {
          _id: userData?.user._id,
          email: userData?.user.email,
          name: userData?.user.name
          // Add other user details as needed
        },
        transaction: {
          method: 'VNPay' // Adjust based on your payment method
        },
        totalPrice: totalPrice,
        note: 'No caption',
        vatFee: totalPrice * 0.1 // Adjust vatFee calculation as per your business logic
      };

      const response = await axios.post('http://localhost:9000/order', orderData);
      console.log("Res->", response);
      const razorpayOptions = {
        key: 'rzp_test_LyBRVIW5CKxzOE', // Replace with your actual Razorpay API key
        // amount: response.data.amount*100,
        amount: totalP * 100,  // Convert totalPrice to paise
        currency: response.data.currency,
        order_id: response.data.id,
        name: 'SkillTern',
        description: 'Purchase Description',
        image: 'https://example.com/your_logo.png',
        handler: async (response: any) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
          const newOrder = {
            ...orderData,
            transaction: {
              ...orderData.transaction,
              razorpay_payment_id,
              razorpay_order_id,
              razorpay_signature
            }
          };

          try {
            const result = await createOrder(newOrder as Omit<IOrder, '_id'>).unwrap();
            if (result.order?._id) {
              dispatch(clearCart());
              navigate(`/order-completed?orderId=${result.order._id}`);
            }
          } catch (error) {
            console.error('Failed to create order:', error);
            // Handle error gracefully (e.g., show error message to user)
          }
        },
        prefill: {
          name: userData?.user.name,
          email: userData?.user.email,
          contact: userData?.user.phone
        },
        theme: {
          color: '#F37254' // Customize theme color to match your app
        }
      };

      const razorpay = new window.Razorpay(razorpayOptions);
      razorpay.open();
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle error gracefully (e.g., show error message to user)
    }
  };

  return (
    <div className='checkout'>
      <div className='checkout__wrap container '>
        <Row>
          <Col className='checkout__col checkout__col--left spacing-h-sm' md={12}>
            <h2 className='checkout__title'>Checkout</h2>
            <h3 className='checkout__billing-title'>Billing address</h3>
            <div className='checkout__countries'>
              <div className='checkout__countries-header'>
                <span className='checkout__countries-header-item checkout__countries-title'>Country</span>
                <span className='checkout__countries-header-item checkout__countries-required'>Required</span>
              </div>
              <div className='checkout__countries-body'>
                <Select
                  className='checkout__countries-select'
                  defaultValue='Viet Nam'
                  style={{ width: '50%' }}
                  options={[
                    { value: 'Singapore', label: 'Singapore' },
                    { value: 'Indo', label: 'Indo' },
                    { value: 'Malay', label: 'Malay' }
                  ]}
                />

                <div className='checkout__countries-condition-term'>
                  Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax
                  jurisdictions.
                </div>
              </div>

              <div className='checkout__payment-methods'>
                <div className='checkout__payment-header'>
                  <h3 className='checkout__payment-title'>Payment method</h3>
                  <span className='checkout__payment-secured'>Secured connection</span>
                </div>
                <div className='checkout__payment-body'>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={{ background: token.colorBgContainer }}
                    items={getItems(panelStyle)}
                  />
                </div>
              </div>
              <div className='checkout__orders-detail'>
                <h3 className='checkout__orders-detail-title'>Order details</h3>
                {isCartFetching && <Skeleton />}
                {!isCartFetching &&
                  cartItems.map((cartItem: { _id: string; name: string; thumbnail: string; finalPrice: number }) => {
                    return <DetailItem key={cartItem._id} courseItem={cartItem} />;
                  })}
              </div>
            </div>
          </Col>
          <Col className='checkout__col checkout__col--right spacing-h-sm' md={12}>
            <Row>
              <Col md={12}>
                <div className='checkout__summary'>
                  <h3 className='checkout__summary-title'>Summary</h3>
                  <div className='checkout__summary-row checkout__summary-price'>
                    <span className='checkout__summary-col checkout__summary-price-label'>Original Price:</span>
                    <span className='checkout__summary-col checkout__summary-price-text'>${totalPrice}</span>
                  </div>
                  <Divider className='checkout__summary-divider' />
                  <div className='checkout__summary-row checkout__summary-total'>
                    <span className='checkout__summary-col checkout__summary-total-label'>Total:</span>
                    <span className='checkout__summary-col checkout__summary-total-text'>${totalP}</span>
                  </div>

                  <div className='checkout__summary-notify'>
                    By completing your purchase you agree to these <Link to='/'> Terms of Service.</Link>
                  </div>
                  <ButtonCmp onClick={checkoutHandler} className='checkout__summary-btn btn btn-primary btn-md'>
                    Complete Checkout
                  </ButtonCmp>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Checkout;







