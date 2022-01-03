# CSS代码规范

采用 BEM 前端命名方法论。

## BEM前端命名方法论

BEM是一种前端命名方法论，主要是针对[CSS](https://baike.baidu.com/item/CSS/5457)，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写。这种命名方法让[CSS](https://baike.baidu.com/item/CSS/5457)便于统一团队开发规范和方便维护。

BEM规定是块和元素之间用-连接，元素和修饰符之间用__或者--连接。

### BEM各部分定义

1. 一个独立的（语义上或视觉上），可以复用而不依赖其它组件的部分，可作为一个块（Block）
2. 属于块的某部分，可作为一个元素（Element）
3. 用于修饰块或元素，体现出外形行为状态等特征的，可作为一个修饰器（Modifier）

### 常见的块（Block）

- `container`: 容器
- `header`: 头部
- `article`: 文章
- `menu`: 菜单
- `box`: 盒子
- `item`:成员



### 常见的元素(Element)

- `title`：标题
- `content`: 内容
- `desc`:描述
- `info`:信息
- `word`:文字
- `section`: 部分
- 常见的表单元素:`form`、`input`、`button`、`textarea`
- `item`:成员



### 常见的修饰符(Modifier)

- `primary`:重要的
- `active`:活跃的
- `inner`:内部的
- `success`:成功的
- `fail`:失败的
- `default`:默认的



### 经典案例

- `publicBox_title`:公共盒子标题
- `publicBox_content`:公共盒子内容
- `publicBox_desc`:公共盒子描述
- `publicBox_info`:公共盒子信息
- `publicBox_content--inner`:公共盒子内容内部
- `button--primary`:重要的按钮

