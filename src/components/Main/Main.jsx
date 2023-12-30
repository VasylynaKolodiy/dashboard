import React, {useState} from 'react';
import "./Main.scss"
import customers, {user} from "../../assets/data";
import {DataGrid} from '@mui/x-data-grid';


const Main = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const renderStatusButton = (status) => {
        return status ? <button className='button active'>Active</button> :
            <button className='button'>Inactive</button>;
    };

    const filteredCustomers = customers.filter((customer) =>
        customer.customerName.toLowerCase().includes(searchValue.toLowerCase())
    );

    const columns = [
        {field: 'customerName', headerName: 'Customer Name', flex: 1},
        {field: 'company', headerName: 'Company', flex: 1},
        {field: 'phoneNumber', headerName: 'Phone Number', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1},
        {field: 'country', headerName: 'Country', flex: 1},
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params) => renderStatusButton(params.value),
        },
    ];

    return (
        <main className="main">
            <h2 className="main__title">
                Hello {user.name} 👋🏼,
            </h2>

            <div className="customers">
                <div className="customers__header">
                    <div className="customers__info">
                        <div className="customers__title">
                            All Customers
                        </div>
                        <div className="customers__label">
                            Active Members
                        </div>
                    </div>

                    <div className="customers__search">
                        <input
                            className="customers__search-input"
                            type="search"
                            placeholder="Search"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <div className="customers__table" style={{height: 'auto', width: '100%'}}>
                    <DataGrid
                        rows={filteredCustomers}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 8},
                            },
                        }}
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;