import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, GridRowsProp, GridColDef, gridClasses } from '@mui/x-data-grid';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-cell': {
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '17px',
        boxSizing: 'none', borderBottom: 'none',
    }
}));

const Table: React.FunctionComponent<{}> = () => {
    const rows: GridRowsProp = [
        { id: 1, name: 'TDH', measured: 12.3, calculated: 23.1, unit: "oC", startingPoint: false, type: "input", weight: 0, md: 1991.87 },
        { id: 2, name: 'PDH', measured: 127.43, calculated: 127.43, unit: "bara", startingPoint: false, type: "input", weight: 0, md: 1991.87 },
        { id: 3, name: 'TUC', measured: 49.58, calculated: 49.81, unit: "oC", startingPoint: false, type: "output", weight: 1000, md: 87.70 },
        { id: 4, name: 'PUC', measured: 40.58, calculated: 40.58, unit: "bara", startingPoint: false, type: "output", weight: 100, md: 87.70 },
    ];

    const typeOptions: { value: string, label: string }[] = [
        { value: "input", label: "Input" },
        { value: "output", label: "Output" }
    ]

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150, sortable: false },
        { field: 'measured', type: "number", headerName: 'Measured', width: 180, sortable: false },
        { field: 'calculated', type: "number", headerName: 'Calculated', width: 180, sortable: false },
        { field: 'unit', headerName: 'Unit', width: 90, sortable: false },
        { field: 'startingPoint', type: "boolean", headerName: 'Starting Point', width: 100, sortable: false },
        {
            field: 'type',
            type: "singleSelect",
            headerName: 'Type',
            width: 160,
            sortable: false,
            valueOptions: () => typeOptions,
            valueFormatter: ({ id: rowId, value, field }) =>
                typeOptions.find((opt) => opt.value === value)?.label,
            editable: true
        },
        { field: 'weight', type: "number", headerName: 'Weight', width: 130, sortable: false },
        { field: 'md', type: "number", headerName: 'MD [m]', width: 130 },
    ];
    return (
        <div style={{ height: 520, width: '1180px' }}>
            <StripedDataGrid
                rows={rows}
                columns={columns}
                rowHeight={30}
                showColumnRightBorder={false}
                showCellRightBorder={false}
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'md', sort: 'desc' }]
                    }
                }}
                disableColumnMenu
            />
        </div>
    )
}

export default Table