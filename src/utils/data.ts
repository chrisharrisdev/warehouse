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
  binWeight: string
}

export const goods: GoodsType[] = [
  {
    binCode: '30010316',
    goodsCode: '15034608',
    goodsName: '味全每日C小青柠复合果汁',
    spec: '1*10',
    unit: '瓶',
    productDate: '2024-12-20',
    expireDate: '2025-01-09',
    expirePercent: '76.19%',
    qty: 200,
    qtyStr: '20',
    weight: '200g',
    binWeight: '30kg'
  },

]