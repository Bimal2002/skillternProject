import React from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';

interface CouponManagementProps {
  open: boolean;
  onClose: () => void;
  onAddCoupon: (couponData: any) => void;
}

const { Option } = Select;

const CouponManagement: React.FC<CouponManagementProps> = ({ open, onClose, onAddCoupon }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onAddCoupon(values); // Call the parent component's function to add coupon
        form.resetFields(); // Reset form fields after submitting
        onClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('Validation failed:', error);
        message.error('Failed to add coupon');
      });
  };

  return (
    <Modal
      title="Add Coupon"
      visible={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Add Coupon
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="couponCode"
          label="Coupon Code"
          rules={[{ required: true, message: 'Coupon code is required' }]}
        >
          <Input placeholder="Enter coupon code" />
        </Form.Item>
        <Form.Item
          name="discount"
          label="Discount"
          rules={[
            { required: true, message: 'Discount value is required' },
            {
              validator: (_, value) => {
                if (value < 0) {
                  return Promise.reject('Discount value cannot be negative');
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input type="number" placeholder="Enter discount value" />
        </Form.Item>
        <Form.Item
          name="couponType"
          label="Coupon Type"
          rules={[{ required: true, message: 'Coupon type is required' }]}
        >
          <Select placeholder="Select a coupon type">
            <Option value="percentage">Percentage</Option>
            <Option value="fixed">Fixed Amount</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Description is required' }]}
        >
          <Input.TextArea placeholder="Enter coupon description" />
        </Form.Item>
        {/* Add more form fields as needed */}
      </Form>
    </Modal>
  );
};

export default CouponManagement;
