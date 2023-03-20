import React from 'react';
import * as dayjs from 'dayjs';
import { TableCell, TableBody, TableRow } from '@windmill/react-ui';
import Status from '../table/Status';

const OrderTable = ({ orders }) => {
  return (
    <>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order._id}>
            <TableCell>
              <span className="text-sm">
                {dayjs(order.createdAt).format('MMM D, YYYY')}
              </span>
            </TableCell>

           <TableCell>
              <span className="text-sm ">{order.deliveryAddress.address.substring(0)}</span>
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
            <TableCell>
              <Status status={order.status} />
              
            </TableCell>  
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default OrderTable;
