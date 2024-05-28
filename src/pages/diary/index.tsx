import { useEffect } from 'react'
import { userLogin } from '../../api/user'
import { Button } from 'antd-mobile'

function diary() {
  useEffect(() => {}, [])
  return (
    <div className="discounts">
      <Button
        onClick={() => {
          userLogin({ code: 1 }).then((res) => {
            console.log(res, '---user login')
          })
        }}
      >
        fetch user
      </Button>
      日记
      {/* 标题栏 */}
      {/* 优惠信息汇总 */}
      {/* 金刚位 */}
      {/* 轮播图 */}
      {/* 热门优惠 */}
      {/* 推荐/商家tab */}
    </div>
  )
}

export default diary
