export interface GoodsType {
  binCode: string,
  goodsCode: string,
  goodsName: string,
  spec: string,
  unit: string,
  productDate: string,
  expireDate: string,
  expirePercent: string,
  qty: number,
  qtyStr: string,
  weight: string,
  binWeight: string,
  owner: string,
  lotNo: string,
}

export const goods: GoodsType[] = [
  {
    binCode: '30010318',
    goodsCode: '15034608',
    goodsName: '味全每日C小青柠复合果汁',
    spec: '1*10',
    unit: '瓶',
    productDate: '2024-12-20',
    expireDate: '2025-01-09',
    expirePercent: '73.19%',
    qty: 200,
    qtyStr: '20',
    weight: '200g',
    binWeight: '30kg',
    owner: '广西美宜佳',
    lotNo: '20241220'
  },
  {
    binCode: '30010317',
    goodsCode: '02895086',
    goodsName: '加加金标生抽王',
    spec: '1*10',
    unit: '瓶',
    productDate: '2024-08-20',
    expireDate: '2025-01-09',
    expirePercent: '75.19%',
    qty: 200,
    qtyStr: '20',
    weight: '200g',
    binWeight: '30kg',
    owner: '广西美宜佳',
    lotNo: '20241220'
  },
  {
    binCode: '30010316',
    goodsCode: '02896144',
    goodsName: '东鹏特饮维生素功能饮料(罐装)',
    spec: '1*10',
    unit: '瓶',
    productDate: '2024-11-20',
    expireDate: '2025-01-09',
    expirePercent: '72.19%',
    qty: 120,
    qtyStr: '20',
    weight: '200g',
    binWeight: '30kg',
    owner: '广西美宜佳',
    lotNo: '20241220'
  },  
  {
    binCode: '30010320',
    goodsCode: '05082474',
    goodsName: '自嗨锅菌菇牛肉煲仔饭自热锅',
    spec: '1*20',
    unit: '瓶',
    productDate: '2024-10-20',
    expireDate: '2025-01-09',
    expirePercent: '76.19%',
    qty: 36,
    qtyStr: '12',
    weight: '400g',
    binWeight: '40kg',
    owner: '广西美宜佳',
    lotNo: '20241220'
  },
  {
    binCode: '30010321',
    goodsCode: '06000970',
    goodsName: '美焙辰奥尔良鸡肉即食汉堡',
    spec: '1*10',
    unit: '瓶',
    productDate: '2024-08-20',
    expireDate: '2025-01-09',
    expirePercent: '75.19%',
    qty: 48,
    qtyStr: '4',
    weight: '200g',
    binWeight: '33kg',
    owner: '广西美宜佳',
    lotNo: '20241220'
  },        
]

export const redGoods: GoodsType[] = [
  {
    binCode: '30010315',
    goodsCode: '02894096',
    goodsName: '海天特级金标生抽王',
    spec: '1*24',
    unit: '瓶',
    productDate: '2023-02-01',
    expireDate: '2024-07-24',
    expirePercent: '0%',
    qty: 72,
    qtyStr: '3',
    weight: '1.2kg',
    binWeight: '100kg',
    owner: '广西美宜佳',
    lotNo: '20230201'
  },

]

export const yellowGoods: GoodsType[] = [
  {
    binCode: '30010314',
    goodsCode: '00984171',
    goodsName: 'N蓝月亮亮白增艳-薰衣草洗衣液',
    spec: '1*12',
    unit: '袋',
    productDate: '2023-02-27',
    expireDate: '2026-02-25',
    expirePercent: '76.25%',
    qty: 72,
    qtyStr: '6',
    weight: '1.2kg',
    binWeight: '100kg',
    owner: '广西美宜佳',
    lotNo: '20230227'
  },

]