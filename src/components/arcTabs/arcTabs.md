## 1. arcTabs 组件

> 该组件是用于展示一组数据切换展示相应的内容

### 2.1 组件的基础使用

> 在你需要使用的页面引入 arcTabs 组件

```javascript
//引入arcTabs组件
import ArcTabs from '@/components/arcTabs';
```

> 然后定义需要使用的一些数据

```JavaScript
// 设置tab栏默认选中值
import React, { useState } from 'react';
 const [selected, setSelected] = useState(0); // 当前选中的tab标签


 // tabs栏需要接收的数组数据
const tabSet = [
        {
            title: '热点资讯',
            content: <p>This is tab 1 content.</p> //可以直接传入自己的组件
        },
        {
            title: '行情解读',
            content: <p>This is tab 2 content.</p>
        },
        {
            title: '投教课程',
            content: <p>This is tab 3 content.</p>
        }
    ];
```

> arcTabs 组件接收的方法定义

```JavaScript
function onChange(item, index) {
        console.log(item, index, 'item, index222');
        setSelected(index);
    }
```

> 调用 arcTabs 组件，并传递所需数据

```JavaScript
    <div>
      <ArcTabs
        tabSet={tabSet}
        updateContent={mainStyles['updateContent']}
        activeTitle={mainStyles['activeTitle']}
        defaultActiveTab={selected}
        onChange={onChange}
      />
    </div>
```
