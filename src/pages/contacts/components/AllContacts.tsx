import Button from "@/common/Button";
import SimpleTable, {
  TableBodyCell,
  TableHeaderCell,
} from "@/common/table/SimpleTable";
import EmptyComponent from "@/pages/components/EmptyComponent";
import { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Contact } from "@/store/reducers/contactReducer";
import StatusState from "@/common/StatusState";
import { useToggleState } from "@/hooks/useToggleState";
import ContactDetail from "./ContactDetail";
import iconComponents from "@/assets/iconComponents";
type ContactProps = {
  setContact: (data: any) => void;
  createOrUpdateContact: () => void;
  deleteContact: () => void;
  filters?: {
    search: string;
  };
};

const AllContacts = (props: ContactProps) => {
  const { filters, createOrUpdateContact, deleteContact, setContact } = props;
  const [selectedContact, setSelectedContact] = useState();
  const {
    state: showDetail,
    close: closeDetails,
    open: openDetails,
  } = useToggleState();

  const TableRef = useRef<{
    pageIndex: number;
    pageCount: number;
    nextPage: () => void;
  }>();

  const columns = useMemo(
    () => [
      {
        Header: <TableHeaderCell title="S/N" />,
        accessor: "sn",
        Cell: (cell: any) => <TableBodyCell content={cell?.value} />,
        sticky: "top",
      },
      {
        Header: (
          <TableHeaderCell title="First Name" className="lg:min-w-[205px]" />
        ),
        accessor: "first_name",
        Cell: (cell: any) => <TableBodyCell content={cell?.value} />,
        sticky: "top",
      },
      {
        Header: (
          <TableHeaderCell title="Last Name" className="lg:min-w-[205px]" />
        ),
        accessor: "last_name",
        Cell: (cell: any) => <TableBodyCell content={cell?.value} />,
        sticky: "top",
      },
      {
        Header: <TableHeaderCell title="Status" className="lg:min-w-[205px]" />,
        accessor: "active",
        Cell: (cell: any) => (
          <TableBodyCell
            content={
              <StatusState status={cell?.value ? "active" : "inactive"} />
            }
          />
        ),
        sticky: "top",
      },
      {
        Header: <TableHeaderCell title="" />,
        accessor: "view",
        Cell: (cell: any) => (
          <TableBodyCell
            content={
              <>
                <Button
                  onClick={selectItem(openDetails, cell.row.original)}
                  variant="empty"
                  label="View"
                />
                <Button
                  onClick={selectItem(createOrUpdateContact, cell.row.original)}
                  variant="empty"
                  label={
                    <>
                      <iconComponents.dashboard.EditIcon />
                    </>
                  }
                />
                <Button
                  onClick={selectItem(deleteContact, cell.row.original)}
                  variant="empty"
                  label={
                    <>
                      <iconComponents.dashboard.DeleteIcon className="fill-contact-red-600" />
                    </>
                  }
                />
              </>
            }
          />
        ),
        sticky: "top",
      },
    ],
    []
  );

  const contactList = useSelector(
    (state: { contacts: { contacts: Contact[] } }) => state.contacts.contacts
  );

  const data = useMemo(() => {
    return contactList.map((el, idx) => {
      return {
        sn: idx + 1,
        ...el,
      };
    });
  }, [contactList]);

  const selectItem = (callbackFn: Function, data: any) => () => {
    setSelectedContact(data);
    setContact(data);
    callbackFn();
  };

  const unSelectItem = (callbackFn: Function) => () => {
    callbackFn();
    setContact(undefined);
    setSelectedContact(undefined);
  };
  return (
    <div className="w-full overflow-hidden flex flex-col bg-contact-shades-white pb-6 rounded-lg !mb-10">
      <div className="w-full max-w-full min-h-[584px] max-h-[784px] overflow-y-hidden">
        {data.length === 0 ? (
          <div className="w-full h-full mt-16 flex justify-center items-center">
            <EmptyComponent
              title="No Members yet"
              subtitle="You have not added a contact to this platform yet"
              onCreate={createOrUpdateContact}
            />
          </div>
        ) : (
          <SimpleTable ref={TableRef} columns={columns} data={data} />
        )}
      </div>
      <ContactDetail
        onClose={unSelectItem(closeDetails)}
        open={showDetail}
        data={selectedContact}
      />
    </div>
  );
};

export default AllContacts;
