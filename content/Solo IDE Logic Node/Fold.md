# Fold
fold 为一个迭代累加器

function (initial, fomula, arrayOrObject) {
  let total = initial
  if (typeof arrayOrObject === 'array') {
    array.forEach(elem => { total = fomula(total, elem)})
  } else {
    for (let key in arrayOrObject) {
      total = fomula(total, arrayOrObject[key]) 
    }
  }
  return total
}

Fomula 为处理每个元素的公式
old 为初始值
a 为输入
输出为 total
