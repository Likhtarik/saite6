import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Search,
    Toolbar,
    Inject,
} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded 3xl">
            <Header category="page" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((mass, index) => (
                        <ColumnDirective key={index} {...mass} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>
        </div>
    );
};

export default Employees;
