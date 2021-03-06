import { FiMoreVertical } from 'react-icons/fi'
import { Button } from '../../../../../UI'

export const columns = ({ handleDisplayMenu }) => [
  {
    title: 'Order No',
    field: 'order_no',
  },
  {
    title: 'Weight',
    field: 'weight',
  },
  {
    title: 'Priority',
    field: 'priority',
  },
  {
    title: 'Date',
    field: 'date',
  },
  {
    title: 'Amount',
    field: 'amount',
  },
  {
    title: 'Status',
    render: (row) => <div className="padding--container">Pending</div>,
  },
  {
    title: 'Action',
    align: 'center',
    cellStyle: {
      width: 10,
    },
    headerStyle: { width: 10 },
    render: (row) => (
      <Button
        icon
        arial-label="show menu"
        style={{ marginRight: '2em' }}
        className="btn--showMore"
        onClick={(e) => {
          handleDisplayMenu(e, row)
        }}
      >
        <FiMoreVertical style={{ pointerEvents: 'none' }} />
      </Button>
    ),
  },
]

export const data = [
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
  {
    order_no: '# PO1608055878778',
    weight: 12,
    priority: 'Low',
    date: '13 Jan 2020',
    amount: 'N50,000',
    status: 'pending',
  },
]
