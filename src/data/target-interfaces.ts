import internal from "stream";
import { ISourceSalesReportItem } from "./source-interfaces";

export interface ITargetSalesReportItem extends ISourceSalesReportItem{
  checkedTime: string;
}
