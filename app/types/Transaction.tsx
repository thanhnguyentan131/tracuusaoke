import { z } from "zod";

import type { DateValue, RangeValue } from "@nextui-org/react";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  SyntheticEvent,
} from "react";

export interface ColumnInterface {
  name: string;
  uid: string;
  sortable: boolean;
  minWidth?: number | `${number}` | `${number}%` | null;
  width?: number | `${number}` | `${number}%` | null;
  // align?: "start" | "center" | "end"; nextUITable
  align?: "inherit" | "left" | "center" | "right" | "justify";
}

export const transactionColumns: Array<ColumnInterface> = [
  { name: "Page Id", uid: "trans_no", sortable: true, align: "center" },
  {
    name: "Date",
    uid: "date",
    sortable: true,
    minWidth: 20,
    align: "center",
  },
  // { name: "Time", uid: "time", sortable: true, minWidth: 20, align: "center" },
  {
    name: "Transaction Details",
    uid: "detail",
    sortable: true,
    align: "center",
  },
  { name: "Debit Amount", uid: "debit", sortable: true, align: "center" },
  {
    name: "Credit Amount",
    uid: "credit",
    sortable: true,
    align: "center",
  },
];

export const TransactionValidator = z.object({
  txsId: z.string(),
  trans_no: z.string(),
  date: z.string(),
  detail: z.string(),
  debit: z.string(),
  credit: z.string(),
});

export type Transaction = z.infer<typeof TransactionValidator>;

export const sampleTransactions: Array<Transaction> = Array.from({
  length: 10,
}).map((_, i) => ({
  txsId: i.toString(),
  trans_no: "1",
  date: "2021-09-01",
  detail: "1",
  debita: "1",
  credit: "1",
}));

export interface TransactionQuery {
  keyword?: string;
  dateRangeFilter?: RangeValue<DateValue>;
  page: number;
  pageSize: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
}
// Event bubbling can be problematic in real-world applications, so the default for React Spectrum components
// is not to propagate. This can be overridden by calling continuePropagation() on the event.
export type BaseEvent<T extends SyntheticEvent> = T & {
  /**
   * Use continuePropagation.
   * @deprecated */
  stopPropagation(): void;
  continuePropagation(): void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KeyboardEvent = BaseEvent<ReactKeyboardEvent<any>>;
