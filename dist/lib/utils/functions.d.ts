/// <reference types="react" />
type DataRow = Array<string | number | JSX.Element>;
export declare function mountDataTable(dataColumns: Array<string | number | JSX.Element>, dataRows: Array<DataRow>): {
    columns: {
        key: string;
        elem: string | number | JSX.Element;
    }[];
    rows: {
        key: string;
        items: {
            key: string;
            elem: string | number | JSX.Element;
        }[];
    }[];
};
export declare function formatCurrency(value: number): string;
export declare function moneyMask(value: string): string;
export {};
