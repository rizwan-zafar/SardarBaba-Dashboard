import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import BrandServices from '../services/BrandServices';
import { notifyError, notifySuccess } from '../utils/toast';
 
const useBrandSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
  const [children, setChildren] = useState([]);
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    //clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ status, brandName}) => {
    if (!imageUrl) {
      notifyError('Icon is required!');
      return;
    }
    const brandData = {
      status: "Show",
       brandName: brandName,
       imageUrl: imageUrl,
     };

    if (id) {
      BrandServices.updateBrand(id, brandData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      BrandServices.addBrand(brandData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue('parent');
      // setValue("slug");
      //setValue('children');
      //setValue('type');
      //setImageUrl('');
      //setChildren([]);
      //clearErrors('parent');
      // setValue("slug");
      //clearErrors('children');
      //clearErrors('type');
      return;
    }
    if (id) {
      BrandServices.getBrandById(id)
        .then((res) => {
          if (res) {
            // console.log("resp0",res)
               setValue('brandName', res.brandName);
            // setValue("slug", res.slug);
              //setValue('icon');
              setImageUrl(res.brandName);
          }
        })
        .catch((err) => {
          notifyError('There is a server error!');
          console.log('There is a server error!',err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    imageUrl,
    setImageUrl,
    children,
    setChildren,
  };
};

export default useBrandSubmit;
