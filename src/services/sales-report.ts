import { SourceData } from "../configs/source-data";

export type GetBranchTransferSalesReportParams = {
  startDate: string;
  endDate: string;
  limit: number;
  offset: number;
}

export const getBranchTransferSalesReport = async ({
  startDate,
  endDate,
  limit,
  offset
}: GetBranchTransferSalesReportParams) => {
  return await SourceData({ d: 'form_detail' })
    .leftJoin({ h: 'form_header' }, 'h.id', '=', 'd.headerFk')
    .leftJoin({ b: 'branch' }, 'b.id', '=', 'h.partnerFk')
    .leftJoin({ i: 'item' }, 'i.id', '=', 'd.itemFk')
    .leftJoin({ c: 'category' }, 'c.id', '=', 'i.categoryFk')
    .whereIn('h.type', [3, 6])
    .where('h.status', '>', 0)
    .where('h.formDate', '>=', startDate)
    .where('h.status', '<', endDate)
    .orderBy('h.id')
    .limit(limit)
    .offset(offset)
    .select({
      _id: 'd.id',
      formId: 'h.id',
      formType: 'h.type',
      partnerFk: 'h.partnerFk',
      partnerName: 'b.name',
      formNo: 'h.formNo',
      formDate: 'h.formDate',
      categoryFk: 'i.categoryFk',
      categoryName: 'c.name',
      itemFk: 'd.itemFk',
      itemName: 'i.name',
      itemUnit: 'i.unit',
      itemType: 'd.type',
      quantity: 'd.quantity',
      unitPrice: 'd.unitPrice',
      discount: 'd.discount',
      formStatus: 'h.status',
      formUpdatedAt: 'h.updatedAt',
      detailUpdatedAt: 'd.updatedAt'
    });
}
