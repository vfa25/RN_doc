# 栈(Stack)

## 什么是“栈”

- 是一种`后进先出`的数据结构，Last In First Out（LIFO）。
- 从栈的操作特性来看，是一种“操作受限”的线性表，只允许一端插入和删除数据。这一端即`栈顶`。

## 为什么需要“栈”

- 栈是一种操作受限的数据结构，其操作特性用数组和链表均可实现。
- 但，任何数据结构都是对特定应用场景的抽象，数组和链表虽然使用起来更加灵活，但却暴露了几乎所有的操作，难免会引发错误操作的风险。
- 当某个数据集合只涉及在一端插入和删除数据，且满足后进先出、先进后出的操作特性时，应该首选栈这种数据结构。比如前端框架Vue路由（vue-router）和类HTML解析（vue-template）。

## 如何实现“栈”

- 数组实现（自动扩容）

  - 时间复杂度分析：
  
  最好时间复杂度为$O(1)$；最坏时间复杂度为$O(n)$，即在自动扩容时，会进行完整的数据拷贝。根据均摊复杂度，平均时间复杂度为$O(1)$。

  - 空间复杂度分析：
  
  在入栈和出栈的过程中，只需要一两个临时变量存储空间，所以是$O(1)$级别。

- 链表实现

  - 时间复杂度分析：
  
  压栈和出栈的时间复杂度均为$O(1)$级别，因为只需更改单个结点的索引即可。

  - 空间复杂度分析：
  
  在入栈和出栈的过程中，只需要一两个临时变量存储空间，所以是$O(1)$级别。

## 栈的神奇应用

- 无处不在的Undo操作（撤销）
- 程序调用的系统栈（尾递归优化的由来）

  操作系统给每个线程分配了一块独立的内存空间，这块内存被组织成“栈”这种结构，用来存储函数调用时的临时变量。每进入一个函数，就会将其中的临时变量作为栈帧入栈，当被调用函数执行完成，返回之后，将这个函数对应的栈帧出栈。

- 如何实现浏览器的前进后退功能？

  使用两个栈X和Y，把首次浏览的页面依次压入栈X，当点击后退按钮时，再依次从栈X中出栈，并将出栈的数据一次放入Y栈。当点击前进按钮时，再依次从栈Y中取出数据，放入栈X中。当栈X中没有数据时，说明没有页面可以继续后退浏览了。当Y栈没有数据，那就说明没有页面可以点击前进浏览了。
