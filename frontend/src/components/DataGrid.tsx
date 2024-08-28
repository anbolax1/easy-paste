import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../styles/DataGrid.module.css';

const DataGrid = ({ data, currentPage, itemsPerPage, onPageChange }) => {
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentData = data.slice(offset, offset + itemsPerPage);

    return (
        <div className={styles.dataGrid}>
            <h1>Мои пасты</h1>
            <table className={styles.dataTable}>
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Паста</th>
                    <th>Язык</th>
                </tr>
                </thead>
                <tbody>
                {currentData.map((item, index) => {
                    const pasteUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${item.hash}`;
                    const handleRowClick = () => {
                        window.open(pasteUrl, '_blank', 'noopener,noreferrer');
                    };
                    return (
                            <tr key={index} className={styles.rowClickable} onClick={handleRowClick}>
                                <td>{item.title}</td>
                                <td>{item.paste_content}</td>
                                <td>{item.language}</td>
                            </tr>

                    )
                } )}
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'«'}
                nextLabel={'»'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={onPageChange}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                pageClassName={styles.pageItem}
                previousClassName={styles.pageItem}
                nextClassName={styles.pageItem}
            />
        </div>
    );
};

export default DataGrid;
