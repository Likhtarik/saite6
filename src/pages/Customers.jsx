import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
} from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded 3xl">
            <Header category="page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
            >
                <ColumnsDirective>
                    {customersGrid.map((mass, index) => (
                        <ColumnDirective key={index} {...mass} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Sort, Page, Toolbar, Edit, Selection, Filter]} />
            </GridComponent>
        </div>
    );
};

export default Customers;
