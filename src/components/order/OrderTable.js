import React from 'react';
import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';

import Status from '../table/Status';
import { FiZoomIn } from 'react-icons/fi';
import Tooltip from '../tooltip/Tooltip';
import SelectStatus from '../form/SelectStatus';

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <span className="font-semibold uppercase text-xs">{i + 1}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format('MMM D, YYYY')}
              </span>
            </TableCell>

         <TableCell>
              <span className="text-sm">{order.deliveryAddress.address.substring(0, 25)}</span>
            </TableCell>
            
            <TableCell>
              {' '}
              <span className="text-sm">{order.deliveryAddress.phone}</span>{' '}
            </TableCell>
             
            <TableCell>
              <span className="text-sm font-semibold">
               Cash On Delivery
              </span>
            </TableCell>
            
            <TableCell>
              {' '}
              <span className="text-sm font-semibold">
                ${Math.round(order.subTotal)}.00
              </span>{' '}
            </TableCell>
            
            <TableCell className="text-center text-xs">
              <Status status={order.status} />
            </TableCell>
             
            <TableCell className="text-center">
              <SelectStatus id={order._id} order={order} />
            </TableCell>
           
            <TableCell className="text-right flex justify-end">
              <div className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                {' '}
                <Link to={`/order/${order._id}`}>
                  <Tooltip
                    id="view"
                    Icon={FiZoomIn}
                    title="View Invoice"
                    bgColor="#34D399"
                  />
                </Link>
              </div>
            </TableCell>  
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
