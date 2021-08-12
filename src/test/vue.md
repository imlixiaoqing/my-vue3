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

* 回调函数(callback)
  * 通过 props 传递事件

### 祖先

* provied
* inject

* $attrs
* $listeners

### 兄弟

* eventBus

```javascript
eventBus.js
import Vue from 'vue'
export default new Vue()

import eventBus from 'eventBus.js'

eventBus.$emit('handleSome', {})

eventBus.$off('handlesome')
```

### 任意

* vuex

## vuex

### 相关概念

* state，驱动应用的数据源；
* view，以声明方式将 state 映射到视图；
* actions，响应在 view 上的**用户输入**导致的状态变化。

### 数据流向

<img src="https://vuex.vuejs.org/vuex.png" width="30%">

### State

### Getters

### Mutations

```javascript
this.$store.commit()
```

### Actions

```javascript
this.$store.dispatch()
```

### Modules

## vue-router

### 模式

* hash(#)
  * window.location 对象
  * window.onhashchange => hashchange 事件
  * location.hash / location.href
  
```javascript
window.onhashchange((e) => {
  console.log(e.oldURL)
  console.log(e.newURL)
})
```

* history
  * window.history 对象
  * window.onpopstate 事件

### 导航守卫

#### 应用

* beforeEach
  * 登录权限等判断
* beforeRouteLeave
  * 清除当前组件中的定时器
  * 当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转
  * 保存相关内容到Vuex中或Session中

#### 执行顺序

当点击切换路由时

* beforeRouterLeave
* beforeEach
* beforeEnter
* beforeRouteEnter
* beforeResolve
* afterEach
* beforeCreat
* created
* beforeMount
* mounted
* beforeRouteEnter - next()

当路由更新时

* beforeRouteUpdate

#### 全局

* 全局前置守卫 - beforeEach
* 全局解析守卫 - beforeResolve
* 全局后置钩子 - afterEach
  
```javascript
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

router.beforeResolve((to, from, next) => {
})

router.afterEach((to, from) => {
  // ...
})
```

#### 路由

* 路由独享的守卫
* beforeEnter

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

#### 组件内

* 组件内的守卫
  * beforeRouteEnter
  * beforeRouteUpdate
  * beforeRouteLeave
  
```javascript
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}

beforeRouteUpdate(to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`

  // just use `this`
  this.name = to.params.name
  next()
},

beforeRouteLeave(to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`

  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

## 知识点

### nexttick

* Vue 在更新 DOM 时是异步执行的
* 将回调延迟到下次 DOM 更新循环之后执行
* 修改数据、dom更新后、执行回调
* 应用场景
  * 使用、操作dom元素时

### keepAlive(keep-alive)

* 避免反复重渲染导致的性能问题
* 缓存不活动的组件实例，而不是销毁它们
* 生命周期钩子
  * activated
  * deactivated

### watch & computed

* computed - 基于它们的响应式依赖进行缓存的
* watch - 数据变化时执行异步或开销较大的操作时
