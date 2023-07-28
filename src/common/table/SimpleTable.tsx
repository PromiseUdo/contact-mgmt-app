import clsx from "clsx"; // Utility to conditionally join class names.
import { forwardRef, useImperativeHandle } from "react";
import { Column, useTable, usePagination } from "react-table";

// Define the interface for the table props.
type ITable = {
  columns: Array<Column>; // Array of column definitions.
  data: Array<any>; // Array of data rows.
  paginationOptions?: any; // Optional pagination options.
};

// Define the SimpleTable component as a forwardRef component.
const SimpleTable = forwardRef((props: ITable, forwardedRef) => {
  // Destructure props to access columns, data, and paginationOptions.
  const { columns, data, paginationOptions } = props;

  // Create a table instance using react-table with manual pagination.
  const tableInstance: any = useTable(
    {
      columns,
      data,
      initialState: {
        ...paginationOptions,
        manualPagination: true,
      },
    },
    usePagination
  );
  // Use useImperativeHandle to expose table functions to the parent component.
  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        page: tableInstance.page,
        pageCount: tableInstance.pageCount,
        canPreviousPage: tableInstance.canPreviousPage,
        canNextPage: tableInstance.canNextPage,
        gotoPage: tableInstance.gotoPage,
        previousPage: tableInstance.previousPage,
        nextPage: tableInstance.nextPage,
        setPageSize: tableInstance.setPageSize,
        pageSize: tableInstance.state.pageSize,
        pageIndex: tableInstance.state.pageIndex,
      };
    },
    []
  );
  // Destructure tableInstance to access table props and methods.
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    tableInstance;

  // Render the SimpleTable component.
  return (
    <div className="w-full pb-4 h-full scrollbar scrollbar-track-jaa-teal-20 scrollbar-thumb-jaa-teal-100 scrollbar-h-1 scrollbar-w-1 scrollbar-track-rounded scrollbar-thumb-rounded">
      <table
        ref={forwardedRef}
        {...getTableProps()}
        className="w-full overflow-auto  !border-spacing-0 !border-collapse"
      >
        <thead className="w-full sticky top-0">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup: any) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column: any) => (
                    // Apply the header cell props
                    <th
                      {...column.getHeaderProps()}
                      className="border-0 mx-0 p-0 w-auto"
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()} className="w-full relative ">
          {
            // Loop over the table rows
            page.map((row: any) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell: any) => {
                      // Apply the cell props
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="border-0 mx-0 p-0"
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
});
SimpleTable.displayName = "SimpleTable";

// Define the interface for the table header cell props.
type ITableHeaderCell = {
  className?: string;
  title: string;
};

// Define the TableHeaderCell component.
export const TableHeaderCell = (props: ITableHeaderCell) => {
  const { className, title } = props;

  return (
    <span
      className={clsx(
        "h-11 py-3 px-6 mx-0 flex self-stretch items-center border-b border-contact-gray-300 bg-contact-shades-bg text-contact-shades-gray-4 xs",
        className
      )}
    >
      {title}
    </span>
  );
};

// Define the interface for the table body cell props.
type ITableBodyCell = {
  className?: string;
  content: React.ReactNode;
};

// Define the TableBodyCell component.
export const TableBodyCell = (props: ITableBodyCell) => {
  const { className, content } = props;
  return (
    <span
      className={clsx(
        "w-auto h-[72px] py-3 px-6 flex self-stretch items-center border-b border-contact-gray-200 bg-contact-shades-white text-contact-shades-gray-3 sm",
        className
      )}
    >
      {content}
    </span>
  );
};

export default SimpleTable;
