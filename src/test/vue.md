# vue

## 生命周期

### 创建期间

* beforeCreate
* created
* beforeMount
* mounted
  
### 运行期间

* beforeUpdate
* updated
  
### 销毁期间

* beforeDestroy
* destroyed

### keep-alive

* activated
* deactivated

### 错误时

* errorCaptured

### 父子组件生命周期顺序

* 父-beforeCreate
* 父-created
* 父-beforeMount
* 子-beforeCreate
* 子-created
* 子-beforeMount
* 子-mounted
* 父-mounted
* 父-beforeDestroy
* 子-beforeDestroy
* 子-destroyed
* 父-destroyed

## 组件通信

### 父子

* props
* $emit()

* $children[n]
* $parent

* ref

### 祖先

* provied
* inject

### 兄弟

* eventBus

### 任意

* vuex
