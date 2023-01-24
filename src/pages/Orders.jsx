import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Resize,
    Sort,
    ContextMenu,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded 3xl">
            <Header category="page" title="Orders" />
            <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
                <ColumnsDirective>
                    {ordersGrid.map((mass, index) => (
                        <ColumnDirective key={index} {...mass} />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[
                        Resize,
                        Sort,
                        ContextMenu,
                        Filter,
                        Page,
                        ExcelExport,
                        PdfExport,
                        Edit,
                    ]}
                />
            </GridComponent>
        </div>
    );
};

export default Orders;
