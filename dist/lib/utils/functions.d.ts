/// <reference types="react" />
import { RowTypes } from "../components/table/types";
export declare function mountDataTable(dataColumns: Array<string | number | JSX.Element>, dataRows: Array<Array<string | number | JSX.Element>>): {
    columns: {
        key: string;
        elem: string | number | JSX.Element;
    }[];
    rows: RowTypes[];
};
