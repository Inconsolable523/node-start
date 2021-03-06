# Vue & ApolloClient & Graphql

## GraphQl与Rest

	rest：
	优点：资源可定位，简单
	缺点：语法扩充性不强，想获得所有资源的时候需要发多次请求挥着用一个不是很方便扩展的语法。
	
	GraphQl：
	优点：语法灵活，只需要一次请求就能够获得想要的资源；
		 没有冗余；
		 强类型，有 introspection 机制，方便快捷

## 说明

1. **Graphql**构建数据驱动产品（数据接口),一系列规则
2. [Graphcool](https://www.graph.cool/)给开发者提供了一个已经开发生产好的GraphQl后端，更快的构建app应用。
![](./src/img/graphcool.png)

3. [Graphcool Console](https://console.graph.cool) 使用一个UI可以很直观方便的创建GraphQl后端。
4. **ApolloClient** 将应用和GraphQL API连接起来，这里使用的是Simple API。

## 介绍

使用vue+ApolloClient快速构建的一个列表。

### Graphcool Console
##  查询类型
![](./src/img/graphql1.png)
### 一条提交数据
![](./src/img/graphql2.png)
### 记录的所有提交数据
![](./src/img/graphql3.png)

## 运行

step1.`yarn install` 安装所有依赖包

step2.`yarn start`  运行

&&`yarn build`  打包
