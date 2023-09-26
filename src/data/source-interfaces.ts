export interface ICategory {
  id: number;
  code: string;
  name: string;
  description: string;
  status: number;
}

export interface IItem {
  id: number;
  code: string;
  name: string;
  unit: string;
  weight: number;
  purchasePrice: number;
  salesPrice: number;
  minStockLevel: number;
  minShopLevel: number;
  categoryFk: number;
  description: string;
  status: number;
}

export interface ISupplier {
  id: number;
  code: string;
  name: string;
  address: string;
  phone: string;
  description: string;
  taxFileNumber: string;
  status: number;
}

export interface ICustomer {
  id: number;
  type: string;
  branchFk: number;
  code: string;
  name: string;
  birthDate: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  joinDate: string;
  petName: string;
  creditLimit: number;
  priceGroup: string;
  taxFileNumber: string;
  status: number;
}

export interface IFormHeader {
  id: number;
  type: number;
  branchFk: number;
  formNo: string;
  formDate: string;
  partnerFk: number;
  salesmanFk: number;
  memo: string;
  printMemo: string;
  dueDate: string;
  paidDate: string;
  deliveryCost: number;
  deliveryCharge: number;
  discount: number;
  discountText: string;
  referenceFk: number;
  taxable: number;
  status: number;
  sessionNo: string;
  receivingMemo: string;
  receivingStatus: number;
  payment: number;
  custName: string;
  custAddress: string;
  custTaxFileNumber: string;
  memberFk: number;
}

export interface IFormDetail {
  id: number;
  headerFk: number;
  itemFk: number;
  type: number;
  quantity: number;
  unit: string;
  unitPrice: number;
  discount: number;
  discountText: string;
  expiredDate: string;
  memo: string;
  referenceFk: number;
  discRefFk: number;
  receivedOk: number;
  receivedMemo: string;
}

export interface IFormStatus {
  id: number;
  headerFk: number;
  status: string;
  operator: number;
  stamp: string;
  memo: string;
}

export interface ISourceSalesReportItem {
  _id: number,
  formId: number,
  formType: number,
  partnerFk: number,
  partnerName: string,
  formNo: string,
  formDate: string,
  categoryFk: number,
  categoryName: string,
  itemFk: number,
  itemName: string,
  itemUnit: string,
  itemType: number,
  quantity: number,
  unitPrice: number,
  discount: number,
  formStatus: number;
  formUpdatedAt?: string,
  detailUpdatedAt?: string
}
