import { ObjectId } from "mongodb";
import { initTargetDb } from "./configs/target-data";
import { ISourceSalesReportItem } from "./data/source-interfaces";
import { getBranchTransferSalesReport } from "./services/sales-report";
import { ITargetSalesReportItem } from "./data/target-interfaces";

async function app() {
  try {
    const startDate: string = '2023-07-01';
    const endDate: string = '2023-08-01';
    const limit: number = 1000;
    let offset: number = 0;
    let salesDataCurr: ISourceSalesReportItem[] = [];

    console.log('Process started at ' + (new Date()).toISOString() + '...');

    const db = await initTargetDb();

    do {
      salesDataCurr = await getBranchTransferSalesReport({
        startDate, endDate, limit, offset
      });

      if (0 === salesDataCurr.length) break;

      const salesDataTarget: ITargetSalesReportItem[] = salesDataCurr.map((row: ISourceSalesReportItem): ITargetSalesReportItem => {
        return {...row, checkedTime: (new Date()).toISOString()};
      })
      const result = await db.collection<ITargetSalesReportItem>('sales_report').insertMany(salesDataTarget, { ordered: false });
      console.log(result);

      offset += limit;
    } while (salesDataCurr.length > 0);

    console.log('Process finished at ' + (new Date()).toISOString() + '.');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

app();
