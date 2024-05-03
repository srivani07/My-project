export interface ITableCardProps {
  title: string;
  tableData: ITableData[];
}

export interface ITableData {
  name: string;
  patientCount: number;
  labs: number;
  dietPlan: number;
}
