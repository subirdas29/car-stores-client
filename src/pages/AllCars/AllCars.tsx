import { Flex, Pagination, Skeleton, Checkbox } from 'antd';
import { useAllCarsQuery } from '../../redux/features/admin/adminApi';
import Cars from './Cars';
import { useState } from 'react';
import { TQueryParam } from '../../types/global';

const brand = ['Ford', 'Audi', 'BMW', 'Tesla', 'Mercedes-Benz', 'Porsche'];
const model = ['2025 Mustang GT', '2025 A8', 'Model S', '2025 X5', '2025 GLC', '2025 911'];
const category = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'];

const AllCars = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  
  const { data: allCars, isLoading } = useAllCarsQuery([
    { name: 'page', value: page },
    { name: 'sort', value: '-createdAt' },
    ...params,
  ]);

  const handleCheckboxChange = (checkedValues: string[], type: string) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== type),
      ...checkedValues.map((value) => ({ name: type, value })),
    ]);
    setPage(1);
  };

  return isLoading ? (
    <Skeleton className="my-28" active />
  ) : (
    <div>
      {/* Banner Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url('assets/images/banner/car2.webp')`,
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
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight: "bold", color: "white" }}>
              Cars
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px", fontWeight: "bold", color: "white" }}>
              Explore the world’s finest cars and find your perfect match.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-28 mx-8 md:mx-12 lg:mx-24 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Filters */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {[{ label: 'Brand', data: brand }, { label: 'Model', data: model }, { label: 'Category', data: category }].map(
              (filter) => (
                <div key={filter.label} className="border border-gray-200 shadow-lg rounded-md p-4">
                  <h1 className="font-bold mb-2">{filter.label} Type</h1>
                  <Checkbox.Group
                    options={filter.data.map((item) => ({ label: item, value: item }))}
                    onChange={(values) => handleCheckboxChange(values, filter.label.toLowerCase())}
                    className="flex flex-col gap-2"
                  />
                </div>
              )
            )}
          </div>

          {/* Cars List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mb-6 lg:col-span-2 items-start">
            {allCars?.data?.map((car) => (
              <Cars key={car._id} car={car} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="my-4">
          <Flex justify="end" align="center">
            <Pagination
              current={page}
              onChange={(value) => setPage(value)}
              pageSize={allCars?.meta?.limit}
              total={allCars?.meta?.total}
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
