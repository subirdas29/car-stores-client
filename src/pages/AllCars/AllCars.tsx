import { Flex, Pagination, Checkbox, Input, Slider, Button } from 'antd';

import Cars from './Cars';
import { useState, useEffect } from 'react';
import Skeleton from '../../components/ui/Skeleton/Skeleton';
import { TCar } from '../../types/admin.types';
import { useAllCarsQuery } from '../../redux/features/car/carApi';
import banner from "../../assets/img/car-gallery/car-1.webp"

const AllCars = () => {
  const [page, setPage] = useState(1);
  const { data: allCarsData, isLoading } = useAllCarsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: '-createdAt' },

  ]);
  console.log(allCarsData,'allcars')

  const [filteredCars, setFilteredCars] = useState<TCar[]>([]);
  const [initialFilters, setInitialFilters] = useState<{ brand: string[]; model: string[]; category: string[] }>({
    brand: [],
    model: [],
    category: [],
  });

  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (allCarsData?.data) {
      const brands = new Set<string>();
      const models = new Set<string>();
      const categories = new Set<string>();

      allCarsData.data.forEach((car) => {
        if (car.brand) brands.add(car.brand);
        if (car.model) models.add(car.model);
        if (car.category) categories.add(car.category);
      });

      setInitialFilters({
        brand: Array.from(brands),
        model: Array.from(models),
        category: Array.from(categories),
      });

      setFilteredCars(allCarsData.data);
    }
  }, [allCarsData]);

  useEffect(() => {
    if (allCarsData?.data) {
      let filtered = allCarsData.data;
      if (search) {
        filtered = filtered.filter((car) =>
          car.brand.toLowerCase().includes(search.toLowerCase())
        );
      }
      filtered = filtered.filter((car) => car.price >= priceRange[0] && car.price <= priceRange[1]);
      if (selectedBrands.length) {
        filtered = filtered.filter((car) => selectedBrands.includes(car.brand));
      }
      if (selectedModels.length) {
        filtered = filtered.filter((car) => selectedModels.includes(car.model));
      }
   
      if (selectedCategories.length) {
        filtered = filtered.filter(
          (car) =>
            car.category &&
            selectedCategories.map((cat) => cat.trim().toLowerCase()).includes(car.category.trim().toLowerCase())
        );
      }
      setFilteredCars(filtered);
    }
  }, [search, priceRange, selectedBrands, selectedModels, selectedCategories, allCarsData]);

  const resetFilters = () => {
    setSearch('');
    setSelectedBrands([]);
    setSelectedModels([]);
    setSelectedCategories([]);
    setPriceRange([0, 100000]);
  };

  return isLoading ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8 md:mx-16 lg:mx-24">
    {[...Array(4)].map((_, index) => (
      <Skeleton key={index} />
    ))}
  </div>
  ) : (
    <div>
       <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "80px",
            position: "relative",
          }}
        >
          {/* Dark Blue Shadow Overlay */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundColor: "rgba(0, 0, 90, 0.4)", // Dark blue overlay
              zIndex: "1",
            }}
          />
          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: "2",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Cars
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Explore the world’s finest cars and find your perfect match.
            </p>
          </div>
        </div>
      </div>
      <div className="my-28 mx-8 md:mx-12 lg:mx-24 min-h-screen">

       <Input
          placeholder="Search cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="!w-full !mb-4"
        />

        <Button 
          className="mb-4 w-full lg:!hidden" 
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block flex flex-col gap-4 lg:gap-5`}> 
          <div className="border border-gray-200 shadow-lg rounded-md p-4">
  <h1 className="font-bold mb-2">Price Range</h1>
  <Slider
    range
    min={0}
    max={100000}
    step={1000}
    value={priceRange}
    onChange={(value) => setPriceRange(value as [number, number])}
  />
  <div className="flex justify-between text-sm text-gray-700 mt-2">
    <span>Min: ৳ {priceRange[0]}</span>
    <span>Max: ৳ {priceRange[1]}</span>
  </div>
</div>


            {[{ label: 'Brand', state: selectedBrands, setState: setSelectedBrands, data: initialFilters.brand }, 
              { label: 'Model', state: selectedModels, setState: setSelectedModels, data: initialFilters.model }, 
              { label: 'Category', state: selectedCategories, setState: setSelectedCategories, data: initialFilters.category }].map(
              (filter) => (
                <div key={filter.label} className="border border-gray-200 shadow-lg rounded-md p-4">
                  <h1 className="font-bold mb-2">{filter.label} Type</h1>
                  <Checkbox.Group
                    options={filter.data.map((item) => ({ label: item, value: item }))}
                    value={filter.state}
                    onChange={(values) => filter.setState(values as string[])}
                    className="flex flex-col gap-2"
                  />
                </div>
              )
            )}

            <Button className="w-full mt-2" onClick={resetFilters}>Reset Filters</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 lg:col-span-3 items-start">
  {
    filteredCars.length === 0 ?
       <div className="flex flex-col items-center justify-center mx-auto p-6 text-center text-gray-600 ">
         <img src='https://res.cloudinary.com/dsgnwjmlv/image/upload/v1746369140/undraw_no-data_ig65_z1mgrp.webp'/>
                 <h2 className="text-xl font-semibold mt-4">No results found</h2>
                 <p className="mt-2 text-sm">
                   Try adjusting your filters or searching with different keywords.
                 </p>
               </div>
    :
  
  filteredCars.map((car) => (
    <Cars key={car._id} car={car}  />
  ))}
</div>



        </div>

        <div className="my-4">
          <Flex justify="end" align="center">
            <Pagination
              current={page}
              onChange={(value) => setPage(value)}
              pageSize={allCarsData?.meta?.limit}
              total={allCarsData?.meta?.total}
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
