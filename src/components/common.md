## 1. 组件使用

> 一个页面最基础的两个组件为 `搜索框组件 <ht-search-form>` / `表单组件 <ht-table>` / `弹出窗口组件` 组成,下面我们会讲解如何使用这三种最基础的组件来在配置好的路由页面实现基础功能.

### 1.1 ht-search-form 搜索框组件

> 该组件是页面上部搜索框的组件,通过传入 Json 文件来配置生成不同的搜索框.

#### 1.1.1 组件的基础使用

> 首先在 `JavaScript` 的头文件位置引入组件,并且进行引用.

```javascript
//组件文件引入
import HtSearchForm from "@/views/components/HtSearchForm";
import buttonGroup from "@/views/components/ButtonGroup";
//混入查询 JS 引入
import { listPageMixin } from "@/libs/listPageMixin";

export default {
  components: { HtSearchForm, buttonGroup }, // 引入组件
  mixins: [listPageMixin], // 混入
};
```

> 然后在 `data` 中定义需要使用的一些数据

```JavaScript
data() {
  return {
    //查询参数 (统一使用这个名字)
    queryParams:{
      nameA:"",
      nameB:"",
      ...
    },
    //普通搜索(通常为三个搜索项)的配置 Json 定义,赋值操作在 mounted 中进行
    formOptions:[],
    //高级搜索 / 普通搜索项 > 3 的配置 Json 定义,赋值操作在 mounted 中进行
    advOptions:[],
  }
}
```

> 在 `mounted` 生命周期中需要对搜索框的配置 Json 进行赋值.

```JavaScript
mounted(){
  //基础搜索
  const formOptions = [
    {
      //此处展现最简单的例子,其他数据类型搜索框请看 5.1.2
      componentType:"search-input",// 搜索框数据类型
      modelName:"nameA",// 搜索框搜索变量,来自 queryParams 中
      label:"labelName",//  搜索项描述,自定义
      placeholder:"placeholder",// 输入框占位符,自定义
      size:"small",// 输入框尺寸
    },
    {
      //此处展现最简单的例子,其他数据类型搜索框请看 5.1.2
      componentType:"search-input",// 搜索框数据类型
      modelName:"nameB",// 搜索框搜索变量,来自 queryParams 中
      label:"labelName",//  搜索项描述,自定义
      placeholder:"placeholder",// 输入框占位符,自定义
      size:"small",// 输入框尺寸
    },
    {...}
  ];
  //高级搜索(可以为空数组,使用方式和基础相同)
  const advOptions = [
    {
      //此处展现最简单的例子,其他数据类型搜索框请看 5.1.2
      componentType:"search-input",// 搜索框数据类型
      modelName:"nameB",// 搜索框搜索变量,来自 queryParams 中
      label:"labelName",//  搜索项描述,自定义
      placeholder:"placeholder",// 输入框占位符,自定义
      size:"small",// 输入框尺寸
    },
    {...}
  ];
  this.formOptions = formOptions;
  this.advOptions = advOptions;
}
```

Html 部分

> 此处只用关注 `permission` 字段,此处需要配置能使用搜索框配置所需要的权限一致,`xxxx` 为页面名称.

```html
<Ht-search-form
  v-show="showSearch"
  :dictMap="dictMap"
  :queryParams="queryParams"
  :formOptions="formOptions"
  :advOptions="advOptions"
  permission="xxxx:xxxx:view"
></Ht-search-form>
```

#### 1.1.2 搜索框不同数据类型使用

> 此处只需要配置 `mounted` 生命周期中的 Json 文件即可实现不同数据类型的搜索框,其中支持的 `5` 种组件如下.

- `search-input` 输入数据类型搜索框

  > 该组件是通过使用者键入文字来搜索该字段,适用于实现 `名称` 等字段的搜索框.

  ```JavaScript
  mounted(){
    //基础搜索
    const formOptions = [
      {
        componentType:"search-input",// 输入数据类型搜索框
        modelName:"nameA",// 搜索框搜索变量,来自 queryParams 中
        label:"labelName",//  搜索项描述,自定义
        placeholder:"placeholder",// 输入框占位符,自定义
        size:"small",// 输入框尺寸
      }
    ];
    //高级搜索
    const advOptions = [];
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;
  }
  ```

- `search-select` 选择数据类型搜索框

  > 该组件是通过使用者选择输入框中的内容来搜索该字段,输入框内容为后端接口返回,适用于实现 `从后台返回数据中进行选择搜索` 等功能的搜索框.

  ```JavaScript
  // 由于使用了 await 所以此处得加上 async
  async mounted(){
  //基础搜索
    const formOptions = [
      {
        componentType:"search-select",// 选择数据类型搜索框
        modelName:"nameA",// 搜索框搜索变量,来自 queryParams 中
        label:"labelName",//  搜索项描述,自定义
        placeholder:"placeholder",// 输入框占位符,自定义
        size:"small",// 输入框尺寸
        selectOptionList:[],// 下拉选择框中的选项数组,其中元素为 Json {optionsLabel:"", optionsValue:""}
        optionsLabel:"optionsLabel",// 下拉栏的Label,对应 selectOptionList 中的属性
        optionsValue:"optionsValue"// 下拉栏Value,对应 selectOptionList 中的属性
      }
    ];
    //高级搜索
    const advOptions = [];
    //从 api 接口获取需要显示的 selectOptionList,此处函数需要自己在 api 文件中实现,然后引入调用
    const { result } = await getSelectOptionList();
    //使用 set 方法,将对应的 formOptions/advOptions 中的 selectOptionList 进行使用后台返回的 result 进行赋值
    this.$set(formOptions[0], "selectOptionList", result);
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;
  }
  ```

- `search-select-dict` 选择字典数据类型搜索框
  > 该组件是通过使用者选择输入框中的内容来搜索该字段,输入框内容为后端接口返回并且通过数据字典进行转换后显示,适用于实现 `从后台返回数据字典进行搜索` 等功能的搜索框.
  ```JavaScript
  // data 中需要添加字典数组,其中值为所需要用到的字典名
  data(){
    return:{
       searchFormDictList: ["sys_xxxx_xxxxx"]
    }
  }
  // 由于使用了 await 所以此处得加上 async
  async mounted(){
  //基础搜索
    const formOptions = [
      {
        componentType:"search-select-dict",// 选择数据字典类型搜索框
        modelName:"nameA",// 搜索框搜索变量,来自 queryParams 中
        label:"labelName",//  搜索项描述,自定义
        placeholder:"placeholder",// 输入框占位符,自定义
        size:"small",// 输入框尺寸
        selectOptionList:[],// 下拉选择框中的选项数组
        dictName:"sys_xxxx_xxxxx",// 从后台查询的数据字典
      }
    ];
    //高级搜索
    const advOptions = [];
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;
    // 使用方法进行数据字典的查找和匹配,自带不需要额外实现
    this.dictMapAsync = this.getDictMap();
  }
  ```
- `search-dates-input` 选择日期范围数据类型搜索框
  > 该组件是通过使用者选择两个日期,通过选择开始日期和结束日期进行时间段搜索.
  ```JavaScript
  mounted(){
  //基础搜索
    const formOptions = [
      {
        componentType:"search-dates-input",// 选择数据字典类型搜索框
        modelName:"times",// 用来标识,与搜索项无关
        label:"labelName",//  搜索项描述,自定义
        placeholder:["placeholder1","placeholder2"],// 输入框占位符数组,数值为两个选择框的 placeholder ,自定义
        size:"small",// 输入框尺寸
        times:["beginTime","endTime"]// 两个选择框的对应变量,来自 queryParams 中
      }
    ];
    //高级搜索
    const advOptions = [];
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;
  }
  ```
- `search-dept-tree` 选择树形数据类型搜索框

  > 该组件是返回一个树形的拉下选择框

  ```JavaScript
  // 由于使用了 await 所以此处得加上 async
  async mounted(){
  //基础搜索
    const formOptions = [
      {
        componentType:"search-dept-tree",// 选择数据字典类型搜索框
        modelName:"deptTree",// 用来标识,与搜索项无关
        label:"labelName",//  搜索项描述,自定义
        placeholder:"placeholder",// 输入框占位符,自定义
        size:"small",// 输入框尺寸
        selectOptionList:[],// 下拉选择框中的选项数组
        radio:"false",
        linkParentChoose:"false",
        paramsName:"nameA"// 查询的对应变量,来自 queryParams 中
      }
    ];
    //高级搜索
    const advOptions = [];
    //使用 set 方法,将对应的 formOptions/advOptions 中的 selectOptionList 进行使用后台返回的 result 进行赋值
    const { result } = await getSelectOptionList();
    this.$set(formOptions[0], "selectOptionList", result);
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;
  }

  ```

- `search-select-with-button` 搜索框带搜索按钮，可以在下拉框中选择后端返回的数据

  > 该组件是返回一个从后端获取的拉下选择框

  ```JavaScript
  //基础搜索
    const formOptions = [
      {
        componentType: "search-select-with-button",// 类型
        modelName:"nameA",// 搜索框搜索变量,来自 queryParams 中
        label: "labelName", // 搜索项描述
        placeholder: "placeholder", // placeholder
        size: "small",
        selectOptionList: [],
        optionsValue: "value",// 当前搜索框下拉绑定的字段
        optionsLabel: "label",// 当前搜索框下拉显示的字段
        queryUrl: this.reqConfig.queryUrl,// 查询后端接口
      },
    ];
    //高级搜索
    const advOptions = [];
    //进行赋值
    this.formOptions = formOptions;
    this.advOptions = advOptions;

  ```

---

## 2. 组件使用

> 常见的一个 'BlockContent' 卡片组件 下面我将讲解它：

### 2.1 BlockContent 组件

> 该组件一个卡片组件，头部分为左右两部分，分别对应组件的标题和右侧图标，下面是卡片内容

#### 2.1.1 组件的基础使用
> 首先在头文件位置导入 BlockContent 组件.

```JavaScript

import BlockContent from '../../components/BlockContent';
import arrow_right_grey from '../../assets/arrow_right_grey.png'
import { Image } from 'antd-mobile';
import styles from './index.module.less'

```
> BlockContent基础用法

>  extra传入标签 ExtraImage （首字母必须大写）
```JavaScript

const ExtraImage =()=><Image src={arrow_right_grey} className={styles.card_image} />

 ```

```JavaScript
<BlockContent title='专属推荐' extra={<ExtraImage/>} headerClassName={styles.class_header}  >
      <div> 删除不知道该写什么删除</div>
</BlockContent>
 ```
 > 基础用法是传title、extra、和卡片内容，三个插槽分别对应左侧标题、右侧图标和卡片内容、如果不传则不显示

## 3. 组件使用

> 常见的一个组件 `Cell组件` ,下面我会讲解如何使用这个组件。

### 3.1 Cell 组件

> 该组件用于展示列表中的单个元素，包括左侧图标和标题，右侧副标题、小红点、右箭头，同时支持点击事件处理。其中副标题、小红点、右箭头为可选的内容。

#### 3.1.1 组件的基础使用

> 首先在头文件位置导入 Cell 组件、自定义样式（可选）和 Cell 所需的 icon

```javascript
//导入Cell组件
import Cell from "../../components/Cell";
//导入自定义样式
import styles from "./index.module.less";
//导入Cell的icon
import Icon from "../../assets/xxx.png";
```

> 然后定义需要使用的一些数据

```JavaScript
 // 模拟数据，包含单元格的各种信息
const cellData = [
    {
      icon: "Icon", //图标用import导入
      title: "Example Cell 1",
      subTitle: "This is a subtitle",
      showRedDot: true,// 显示小红点
      showArrowIcon: true, // 显示右箭头,
      cellClassName: styles.cell_margin_top,//自定义Cell组件样式类名
      onClick: () => {
        // 示例点击事件
        console.log("Cell 1 clicked ");
      },
    },
    {
      icon: "Icon",
      title: "Example Cell 2",
      subTitle: "", // 无副标题内容
      showRedDot: false,// 不显示小红点
      showArrowIcon: false,// 不显示右箭头
      onClick: () => {
        // 示例点击事件
        console.log("Cell 2 clicked ");
      },
    },
  ];
```

> 调用 Cell 组件，并传递所需数据

```JavaScript
//data：Cell组件所需数据
    <div>
      {cellData.map((item, index) => (
        <Cell key={index} data={item}/>
      ))}
    </div>
```

## 4. 组件使用

> 常见的一个 `Pop弹窗组件`，下面是具体使用说明。

### 4.1 Pop 弹窗组件

> 该组件用于绑定在需要触发弹窗的元素或组件上，可触发的弹窗包括提示弹窗和确认弹窗，其中提示弹窗只包含信息的确认按钮，确认弹窗包含信息的确认与取消按钮，同时，其各自包含的确认与取消按钮均支持点击事件处理。

#### 4.1.1 组件的使用

> 首先在头文件位置导入 Pop 组件.
```javascript
//导入Cell组件
import Pop from '../../components/modal/modal';
```

> 然后定义需要触发的确认或取消事件
```javascript
const handleConfirm = () => {  
    console.log('用户点击了确认');  
    // 执行其他操作，比如关闭弹窗、更新状态等  
  };  
  
  const handleCancel = () => {  
    console.log('用户点击了取消');  
    // 执行其他操作，比如关闭弹窗、更新状态等  
  }; 
```

> 调用 Pop 组件，并传递所需参数
```javascript
<div>  
  {/* 使用自定义的触发内容 */}  
  <Pop  
    // modalType 默认为提示弹窗，若传入参数"confirm"可切换为确认弹窗
    // modalType="confirm"  
    title="确认操作"  
    content="你确定要执行这个操作吗？"  
    confirmText="我知道了"  
    // 当弹窗类型为提示弹窗时，取消按钮文本及取消事件回调均不会生效
    cancelText="取消"  
    onConfirm={handleConfirm}  
    onCancel={handleCancel}  
    // 绑定触发元素或组件
    triggerContent={<button>点击显示弹窗</button>}  
  />  
</div> 
```

## 5. 组件使用

> 一个数据展示组件,下面我会讲解如何使用这个组件。

### 5.1 DataDisplay 组件

> 该组件用于展示数据,未登录状态下展示'--'，无数量时展示0（0.00），超过万展示'X.x万+'。整数与小数部分展示不同的样式。

#### 5.1.1 组件的基础使用

> 首先在头文件位置导入 DataDisplay 组件、自定义样式（可选）。

```javascript
//导入DataDisplay组件
import { DataDisplay } from '../../../components/DataDisplay';
//导入自定义样式
import styles from "./index.module.less";
```

> 需要使用的一些数据

```JavaScript

 data{string | number} - 传入的数值
 [isLogin]{boolean} - 是否为登录状态
 [flag]{boolean} - 是否展示金额符号￥
 [cname]{string} - 自定义样式类名
 
```

> 调用 DataDisplay 组件，并传递所需数据

```JavaScript
    <DataDisplay data={discountInfo.coupon} flag={true} />
```
