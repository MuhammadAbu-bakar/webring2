import { Box, Image, Text, IconButton } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';

const techLogos = [
  { name: "Javascript", src: "/javascript.png" },
  { name: "WordPress", src: "/wordpress.png" },
  { name: "Flutter", src: "/flutter.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Android", src: "/android.png" },
  { name: "Amazon", src: "/amazon.png" },
  { name: "React", src: "/react.png" },
  { name: "Mongo DB", src: "/mongodb.png" },
  { name: "Laravel", src: "/laravel.png" }
];

const TechLogosSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Box 
      w="100%" 
      maxW="1923px" 
      h="auto" 
      mx="auto" 
      px={{ base: "10px", sm: "20px", md: "50px" }}
      position="relative"
    >
      {/* Navigation Arrows */}
      <IconButton 
        ref={navigationPrevRef}
        aria-label="Previous slide"
        position="absolute"
        left={{ base: "5px", md: "10px" }}
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        color="gray.700"
        _hover={{ bg: "gray.100" }}
        size={{ base: "sm", md: "md" }}
        onClick={() => swiperInstance?.slidePrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </IconButton>
      
      <IconButton
        ref={navigationNextRef}
        aria-label="Next slide"
        position="absolute"
        right={{ base: "5px", md: "10px" }}
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        color="gray.700"
        _hover={{ bg: "gray.100" }}
        size={{ base: "sm", md: "md" }}
        onClick={() => swiperInstance?.slideNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>

      <Box position="relative" w="100%" px={{ base: "30px", md: "50px" }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={true}
          loop={true}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }, 100);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          {techLogos.map((logo, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <Box
                w={{ base: "250px", sm: "280px", md: "330px" }}
                h={{ base: "150px", md: "200px" }}
                borderRadius="10px"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
                bg="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                transition="all 0.3s ease"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  bg: 'gray.200',
                  zIndex: 1
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  bg: 'gray.200',
                  zIndex: 1
                }}
                
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  w={
                    logo.name === "Amazon" 
                      ? { base: "155px", md: "225px" } 
                      : { base: "105px", md: "140px" }
                  }
                  h={
                    logo.name === "React" 
                      ? { base: "100px", md: "120px" }
                      : logo.name === "Amazon" 
                      ? { base: "60px", md: "70px" } 
                      : { base: "80px", md: "95px" }
                  }
                  objectFit="contain"
                />
                <Text fontSize={{ base: "14px", md: "18px" }} fontWeight="500" pt={{ base: 4, md: 8 }}>
                  {logo.name}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TechLogosSection;