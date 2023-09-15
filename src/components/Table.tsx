import React,{ FC } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface TableProps {
    columns: TableColumn<any>[]
    data: any[],
    title: string;
    onRowClick?: (row: any) => void;
}

const Table: FC<TableProps> = ({columns, data, title, onRowClick}) => {
    return (
        <div style={{
            borderRadius: '6px',
            margin: '30px 0px 30px 0px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 32px 0px rgba(136, 152, 170, 0.15)'
        }}>
        <h4 style={{padding: '20px'}}>{title}</h4>
        <DataTable
            columns={columns}
            highlightOnHover
            persistTableHead
            customStyles={{
                rows: {
                     style: {
                        padding: '0px 20px 0px 20px'
                     }
                },
                headRow: {
                    style: {
                        backgroundColor: '#F6F9FC',
                        padding: '0px 20px 0px 20px'

                    }
                }
            }}
            onRowClicked={onRowClick}
            data={data}
        /></div>
    );
}
 
export default Table;