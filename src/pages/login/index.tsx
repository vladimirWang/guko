import { Button, Form, Input } from 'antd-mobile'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import styles from './login.module.less'
import { userLogin } from '../../api/user'

const { Item, useForm } = Form

const initialValues = {
  username: 'wang',
  password: '123456',
}
export default function Login() {
  const [visible, setVisible] = useState(false)
  const [form] = useForm()
  const { getFieldsValue } = form
  const onSubmit = async () => {
    try {
      const params = await getFieldsValue()
      const resp = await userLogin(params)
      console.log(resp, '============login resp=============')

      // submit
    } catch (error: any) {
      console.log(error.message, '---异常')
    }
  }
  return (
    <div className={styles.loginPage}>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onSubmit}
        footer={
          <Button block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <div className="text-center">
          <img src="/logo192.png" width={100} />
        </div>

        <div className={styles.main}>
          <Item name="username" label="用户名" rules={[{ required: true, message: '用户名必填' }]}>
            <Input />
          </Item>
          <Item name="password" label="密码" rules={[{ required: true, message: '密码必填' }]}>
            <Input className={styles.input} placeholder="请输入密码" type={true ? 'text' : 'password'} />
            {/* <div className={styles.password}>
              <Input className={styles.input} placeholder="请输入密码" type={visible ? 'text' : 'password'} />
              <div className={styles.eye}>
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            </div> */}
          </Item>
        </div>
      </Form>
    </div>
  )
}
