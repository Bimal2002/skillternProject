import React, { useEffect, useMemo, useState } from 'react';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { ICoupon } from '../../../../../types/coupon.type';
import { CouponError } from '../../../../../utils/helpers';

import { useAddCouponMutation, useUpdateCouponMutation } from '../../coupon.service';

const { Option } = Select;

interface CreateCouponProps {
  isOpen: boolean;
  onClose: () => void;
  couponId?: string; // Optionally passed if editing an existing coupon
}

const CreateCoupon: React.FC<CreateCouponProps> = ({ isOpen, onClose, couponId }) => {
  const [addCoupon, addCouponResult] = useAddCouponMutation();
  const [updateCoupon, updateCouponResult] = useUpdateCouponMutation();

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<ICoupon>({
    _id: '',
    code: '',
    discount: 0,
    description: '',
    dateStart: new Date(), // Initial validFrom date, adjust as needed
    dateEnd: new Date() // Initial validUntil date, adjust as needed
  });

  useEffect(() => {
    if (couponId) {
      // Fetch coupon details if editing
      // Implement your query hook here to fetch coupon details based on couponId
      // Example:
    //   const { data } = useGetCouponQuery(couponId);
    //   if (data) {
    //     setFormData({
    //       _id: couponId,
    //       code: data.code || '',
    //       discount: data.discount || 0,
    //       description: data.description || '',
    //       validFrom: data.validFrom || new Date(),
    //       validUntil: data.validUntil || new Date()
    //     });
    //   }
    } else {
      // Reset form for new coupon
      setFormData({
        _id: '',
        code: '',
        discount: 0,
        description: '',
        dateStart: new Date(),
        dateEnd: new Date()
      });
      form.resetFields();
    }
  }, [couponId, form]);

  const submitHandler = (formData: ICoupon) => {
    if (formData._id) {
      // Update existing coupon
      updateCoupon(formData)
        .then(() => {
          notification.success({
            message: 'Coupon updated successfully',
            description: 'Coupon updated successfully'
          });
          onClose();
        })
        .catch((error) => {
          notification.error({
            message: 'Failed to update coupon',
            description: error.message
          });
        });
    } else {
      // Add new coupon
      addCoupon(formData)
        .then(() => {
          notification.success({
            message: 'Coupon added successfully',
            description: 'Coupon added successfully'
          });
          onClose();
        })
        .catch((error) => {
          notification.error({
            message: 'Failed to add coupon',
            description: error.message
          });
        });
    }
  };

  return (
    <Drawer
      title={couponId ? 'Edit Coupon' : 'Create Coupon'}
      width={720}
      onClose={onClose}
      visible={isOpen}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={() => form.submit()}>
            Submit
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        name="createCouponForm"
        onFinish={submitHandler}
        initialValues={formData}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="code"
              label="Coupon Code"
              rules={[{ required: true, message: 'Please enter coupon code' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="discount"
              label="Discount (%)"
              rules={[{ required: true, message: 'Please enter discount percentage' }]}
            >
              <Input type="number" min={0} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="dateStart"
              label="Valid From"
              rules={[{ required: true, message: 'Please select valid from date' }]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="dateEnd"
              label="Valid Until"
              rules={[{ required: true, message: 'Please select valid until date' }]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter description' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default CreateCoupon;





























// import React, { useEffect, useState } from 'react';
// import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
// import { useGetCouponByIdQuery,usePostCouponMutation, useUpdateCouponMutation } from '../../coupon.service';
// import { ICoupon } from '../../../../../types/coupon.type';

// const { Option } = Select;

// interface CreateCouponProps {
//   isOpen: boolean;
//   onClose: () => void;
//   couponId?: string; // Optionally passed if editing an existing coupon
// }

// const CreateCoupon: React.FC<CreateCouponProps> = ({ isOpen, onClose, couponId }) => {
//   const [postCoupon] = usePostCouponMutation();
//   const [updateCoupon] = useUpdateCouponMutation();
//   const { data: couponData, isSuccess: isCouponDataSuccess } = useGetCouponByIdQuery(couponId!, { skip: !couponId });

//   const [form] = Form.useForm();
//   const [formData, setFormData] = useState<ICoupon>({
//     _id: '',
//     code: '',
//     discount: 0,
//     description: '',
//     validFrom: new Date(),
//     validUntil: new Date()
//   });

//   useEffect(() => {
//     if (couponId && isCouponDataSuccess && couponData) {
//       setFormData({
//         _id: couponId,
//         code: couponData.coupon.code || '',
//         discount: couponData.coupon.discount || 0,
//         description: couponData.coupon.description || '',
//         validFrom: couponData.coupon.validFrom ? new Date(couponData.coupon.validFrom) : new Date(),
//         validUntil: couponData.coupon.validUntil ? new Date(couponData.coupon.validUntil) : new Date()
//       });
//       form.setFieldsValue({
//         code: couponData.coupon.code,
//         discount: couponData.coupon.discount,
//         description: couponData.coupon.description,
//         validFrom: couponData.coupon.validFrom ? new Date(couponData.coupon.validFrom) : new Date(),
//         validUntil: couponData.coupon.validUntil ? new Date(couponData.coupon.validUntil) : new Date()
//       });
//     } else {
//       setFormData({
//         _id: '',
//         code: '',
//         discount: 0,
//         description: '',
//         validFrom: new Date(),
//         validUntil: new Date()
//       });
//       form.resetFields();
//     }
//   }, [couponId, isCouponDataSuccess, couponData, form]);

//   const submitHandler = async (values: ICoupon) => {
//     try {
//       if (couponId) {
//         await updateCoupon(values).unwrap();
//         notification.success({
//           message: 'Coupon updated successfully',
//           description: 'Coupon updated successfully'
//         });
//       } else {
//         await postCoupon(values).unwrap();
//         notification.success({
//           message: 'Coupon added successfully',
//           description: 'Coupon added successfully'
//         });
//       }
//       onClose();
//     } catch (error) {
//       notification.error({
//         message: 'Failed to save coupon',
//         description: 'An error occurred while saving the coupon'
//       });
//     }
//   };

//   return (
//     <Drawer
//       title={couponId ? 'Edit Coupon' : 'Create Coupon'}
//       width={720}
//       onClose={onClose}
//       visible={isOpen}
//       bodyStyle={{ paddingBottom: 80 }}
//       footer={
//         <Space>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button type="primary" onClick={() => form.submit()}>
//             Submit
//           </Button>
//         </Space>
//       }
//     >
//       <Form
//         form={form}
//         name="createCouponForm"
//         onFinish={submitHandler}
//         initialValues={formData}
//         layout="vertical"
//       >
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="code"
//               label="Coupon Code"
//               rules={[{ required: true, message: 'Please enter coupon code' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="discount"
//               label="Discount (%)"
//               rules={[{ required: true, message: 'Please enter discount percentage' }]}
//             >
//               <Input type="number" min={0} />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               name="validFrom"
//               label="Valid From"
//               rules={[{ required: true, message: 'Please select valid from date' }]}
//             >
//               <Input type="date" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               name="validUntil"
//               label="Valid Until"
//               rules={[{ required: true, message: 'Please select valid until date' }]}
//             >
//               <Input type="date" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={24}>
//             <Form.Item
//               name="description"
//               label="Description"
//               rules={[{ required: true, message: 'Please enter description' }]}
//             >
//               <Input.TextArea rows={4} />
//             </Form.Item>
//           </Col>
//         </Row>
//       </Form>
//     </Drawer>
//   );
// };

// export default CreateCoupon;
