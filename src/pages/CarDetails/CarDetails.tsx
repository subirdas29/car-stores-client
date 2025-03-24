import { useEffect, useState } from "react";

// import car2 from "../../../public/assets/images/banner/cardetails/car-2.webp";
// import car3 from "../../../public/assets/images/banner/cardetails/car-3.webp";
// import car4 from "../../../public/assets/images/banner/cardetails/car-4.webp";

import banner from "../../assets/img/car-gallery/car-1.webp"

import { NavLink, useParams } from "react-router-dom";

import { toast, Toaster } from "sonner";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";

import { Skeleton } from "antd";
import { useGetACarQuery } from "../../redux/features/car/carApi";
const CarDetails = () => {
// Initial big image
  const { carId } = useParams();
  const { data, isLoading, isError } = useGetACarQuery(carId, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const {
    _id,
    brand,
    category,
    model,
    price,
    stock,
    description,
    imageUrl,
  } = data?.data ?? {};


  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setSelectedImage(imageUrl[0]);
    }
  }, [imageUrl]);
  const dispatch = useAppDispatch();

  if (isLoading) return   <Skeleton className="my-28" active />;
  if (isError) return  <Skeleton className="my-28" active /> 


  const handleAddToCart = () => {
    if (!_id) {
      toast.error("Car ID is missing.");
      return;
    }
    dispatch(
      addToCart({
        _id,
        car: _id,
        name: brand!,
        model:model!,
        category:category!,
        price: price!,
        quantity: 1,
        stock: stock!,
        imageUrl: imageUrl!,
      })
    );

    // Show toast notification
    toast.success(`${brand} added to cart!`);
  };

  const handleBuyNow = () => {
    if (!_id) {
      toast.error("Car ID is missing.");
      return;
    }

    dispatch(
      addToCart({
        _id,
        car: _id,
        name: brand!,
        model:model!,
        category:category!,
        price: price!,
        quantity: 1,
        stock: stock!,
        imageUrl: imageUrl!,
      })
    );

    // Show toast notification
    toast.success(`${brand} Add to Cart and CheckOut Now!`);
  };


  return  isLoading ? (
    <Skeleton className="my-28" active />
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

        <div className="mx-8 md:mx-12 lg:mx-24 my-28 grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-16">
          <div className="col-span-2">
            <div className="flex flex-col items-center">
              <img
                src={selectedImage}
                className="rounded-3xl w-full max-w-[1280px] h-[558px] object-cover mb-6 lg:mb-8"
                alt="Selected"
              />

              {/* Thumbnails */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                {imageUrl?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={`rounded-3xl h-20 md:h-28 lg:h-30 w-[1280px] cursor-pointer transition-transform transform hover:scale-110 ${
                      selectedImage === image ? "ring-3 ring-[#1890ff]" : ""
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h1 className="text-3xl font-semibold mb-4">
                {brand} {model} Descriptions
              </h1>
              <p className="text-[#7e7e84]">{description}</p>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl font-semibold mb-4">Features</h1>
              <div className="grid grid-cols-3">
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Blind spot alert</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Bluetooth</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Heated seats</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Leather seats</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Side airbags</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-3 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>alert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 md:my-0">
            <div>
              <p className="text-3xl font-bold">
                {brand} {model}
              </p>
              <div className="flex justify-between my-2">
                <div className="flex items-center ">
                  <span className="mr-1 lg:mr-2 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>22</p>
                </div>

                <div className="flex items-center ">
                  <span className="mr-1 lg:mr-2 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Convertible</p>
                </div>
                <div className="flex items-center ">
                  <span className="mr-1 lg:mr-2 w-2 h-2 bg-black rounded-full"></span>{" "}
                  <p>Diesel</p>
                </div>
              </div>
              <hr className="my-4" />
              <p className="text-2xl font-bold">price: ${price}</p>
              <p>Add to favorites</p>
            </div>
            <div className="my-8 rounded-4xl p-11 md:p-4 lg:p-11 bg-[#EDF1F4]">
              <div className="flex justify-between ">
                <div>
                  <p className="font-bold">Make:</p>
                  <p className="font-bold">Model:</p>
                  <p className="font-bold">Drivetype:</p>
                  <p className="font-bold">Category:</p>
                  <p className="font-bold">Seat:</p>
                  <p className="font-bold">Door:</p>
                  <p className="font-bold">Luggage:</p>
                  <p className="font-bold">Fuel Type:</p>
                  <p className="font-bold">Engine:</p>
                  <p className="font-bold">Year:</p>
                  <p className="font-bold">Mileage:</p>
                  <p className="font-bold">Transmission:</p>
                  <p className="font-bold">Drive:</p>
                  <p className="font-bold">Fuel Economy:</p>
                  <p className="font-bold">Exterior Color:</p>
                  <p className="font-bold">Interior Color:</p>
                  <p className="font-bold">Stock:</p>
                </div>
                <div>
                  <p>{brand}</p>
                  <p>{model}</p>
                  <p>Front wheel drive</p>
                  <p>{category}</p>
                  <p>2 seats</p>
                  <p>2 doors</p>
                  <p>150</p>
                  <p>Hybrid</p>
                  <p>3000</p>
                  <p>2020</p>
                  <p>200</p>
                  <p>Automatic</p>
                  <p>4WD</p>
                  <p>18.5</p>
                  <p>Blue Metalic</p>
                  <p>Black</p>
                  <p>{stock}</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="rounded-md py-2 px-5 border-1 w-full bg-transparent  hover:text-white  text-[#1890ff]   hover:bg-[#1890ff] font-bold cursor-pointer mb-4"
              >
                <Toaster />
                Add To Cart
              </button>

              <NavLink to="/cart">
                <button
                  onClick={handleBuyNow}
                  className="rounded-md py-2 px-5 border-1 hover:text-[#1890ff]  w-full hover:bg-transparent  text-white  bg-[#1890ff] font-bold cursor-pointer "
                >
                  Buy Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default CarDetails;
