import React from "react";
import { Select } from "@windmill/react-ui";
import Brands from "../../services/BrandServices";
const SelectOption = ({ register, name, label }) => {
  const [allBrands, setBrands] = React.useState([]);

  const settingData= async function(){
    const data = await Brands.getAllBrand();
    if (data) {
      setBrands(data);
    }
  }
  React.useEffect(() => {
    settingData()

  }, [])

  return (
    <>
      <Select
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>Select Brand</option>
        {allBrands ? allBrands.map((brand, key) => {

          return (
            <option value={brand.brandName} key={key}>{brand.brandName}</option>
          )
        }) : "Loading. . ."}
      </Select>
    </>
  );
};

export default SelectOption;
