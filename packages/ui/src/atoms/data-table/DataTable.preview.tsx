// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { DataTable, dataTableColumns } from "./DataTable";
import { dataTableMocks } from "./DataTable.mocks";

export default {
  Default: () => (
    <div className="w-[800px] bg-background p-4 text-foreground">
      <DataTable />
    </div>
  ),
  Empty: () => (
    <div className="w-[800px] bg-background p-4 text-foreground">
      <DataTable columns={dataTableColumns} data={[...dataTableMocks.empty]} />
    </div>
  ),
};
