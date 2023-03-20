import React from 'react';
import { TableBody, TableRow, TableCell} from '@windmill/react-ui';
//import {Avatar } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ShowHideButton from '../table/ShowHideButton';
import BrandDrawer from '../drawer/BrandDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const BrandTable = ({ brand }) => {
  const { title, serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
   return (
    <>
      <MainModal id={serviceId} title={title} />
      <MainDrawer>
        <BrandDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {brand?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell className="font-semibold uppercase text-xs">
              {parent._id.substring(20, 24)}
            </TableCell>
            {/* <TableCell>
              <Avatar
                className="hidden mr-3 md:block bg-gray-50 p-1"
                src={parent.icon}
                alt={parent.parent}
              />
            </TableCell> */}

            {/* <TableCell className="font-medium text-sm">
              <div className="flex flex-row">
                {parent?.children?.map((child, i) => (
                  <span
                    key={i + 1}
                    className="bg-gray-200 mr-2 border-0 text-gray-500 rounded-full inline-flex items-center justify-center px-2 py-1 text-xs font-semibold font-serif mt-2 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {child}
                  </span>
                ))}
              </div>
            </TableCell> */}
            <TableCell className="text-sm ">{parent.brandName}</TableCell>
            {/* <TableCell className="text-sm">{parent.type}</TableCell> */}
            <TableCell>
              <ShowHideButton id={parent._id} status={parent.status} />
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={parent._id}
                title={parent.brandName}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default BrandTable;
