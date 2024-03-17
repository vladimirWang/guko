import React from 'react'
import { Input, Form, Button } from 'antd-mobile'

const { Item, useForm } = Form

const initialValues = {
  username: 'wang',
}
export default function Login() {
  const [form] = useForm()
  const { getFieldsValue, submit } = form
  const onSubmit = async () => {
    try {
      const params = await getFieldsValue()
      console.log(params, 'pasmfs')
    } catch (error: any) {
      console.log(error.message, '---异常')
    }
  }
  return (
    <div>
      <Form form={form} initialValues={initialValues} footer={<Button onClick={onSubmit}>提交</Button>}>
        <Item name="username">
          <Input />
        </Item>
      </Form>
    </div>
  )
}
