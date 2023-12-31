import React, {useEffect, useState} from 'react';
import "./Main.scss"
import customers, {user} from "../../assets/data";
import {DataGrid} from '@mui/x-data-grid';
import {Pagination, Stack} from "@mui/material";


const Main = () => {
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const PAGE_SIZE = 8;

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const renderStatusButton = (status) => {
        return status ? <button className='button active'>Active</button> :
            <button className='button'>Inactive</button>;
    };

    const [filteredCustomers, setFilteredCustomers] = useState([...customers]);

    useEffect(() => {
        const filtered = customers.filter((customer) =>
            customer.customerName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCustomers(filtered);
    }, [searchValue]);

    useEffect(() => {
        setResult(filteredCustomers.slice(0, PAGE_SIZE));
        setCurrentPage(1)
    }, [filteredCustomers]);

    const [result, setResult] = useState([...filteredCustomers.slice(0, PAGE_SIZE)]);

    const columns = [
        {field: 'customerName', headerName: 'Customer Name', flex: 1.2},
        {field: 'company', headerName: 'Company', flex: 1},
        {field: 'phoneNumber', headerName: 'Phone Number', flex: 1.1},
        {field: 'email', headerName: 'Email', flex: 1.5},
        {field: 'country', headerName: 'Country', flex: 1},
        {
            field: 'status',
            headerName: 'Status',
            renderCell: (params) => renderStatusButton(params.value),
        },
    ];

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        const startIndex = (newPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        setResult(filteredCustomers.slice(startIndex, endIndex))
    };

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

                    {filteredCustomers.length > 0
                        ? <>
                            <DataGrid
                                rows={result}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {page: 0, pageSize: PAGE_SIZE},
                                    },
                                }}
                            />


                            <Stack>
                                <div className="pagination__info">
                                    {`Showing data ${(currentPage - 1) * PAGE_SIZE + 1} to ${Math.min(currentPage * PAGE_SIZE, filteredCustomers.length)} of ${filteredCustomers.length} entries`}
                                </div>
                                {filteredCustomers.length > PAGE_SIZE && (
                                    <div className="pagination__pages">
                                        <Pagination
                                            count={Math.ceil(filteredCustomers.length / PAGE_SIZE)}
                                            page={currentPage}
                                            onChange={handlePageChange}
                                        />
                                    </div>
                                )}
                            </Stack>

                        </>
                        : <div>No data found</div>
                    }

                </div>
            </div>
        </main>
    );
};

export default Main;