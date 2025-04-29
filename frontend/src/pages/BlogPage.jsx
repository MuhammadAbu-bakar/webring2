import React, { useRef, useEffect } from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const blogCards = [
  {
    id: 1,
    title: "How AI is Helping Businesses Work Smarter",
    description:
      "AI isn't just a buzzword, it's changing how businesses operate daily. From automating tasks to offering real-time insights, we explore how AI can give your business a serious edge.",
    image: "/i1.png",
  },
  {
    id: 2,
    title: "Future-Proof Your Business with the Right IT Setup",
    description:
      "Behind every successful business is a solid IT foundation. We explore how the right systems can keep things running smoothly and securely and ready to grow when you are.",
    image: "/i2.png",
  },
  {
    id: 3,
    title: "Why a Custom Website Can Take Your Business Further",
    description:
      "Your website is more than just a digital presence, it's your first impression. We share how a custom-built site can truly reflect your brand and connect better with your audience.",
    image: "/i3.png",
  },
  {
    id: 4,
    title: "Turning Your App Idea into a Real-World Solution",
    description:
      "Got a great app idea? We'll show you how we bring concepts to life with smart design, smooth functionality, and a clear focus on what your users need.",
    image: "/i4.png",
  },
  {
    id: 5,
    title: "Making Dental Websites That Truly Connect with Patients",
    description:
      "Patients start their journey online. That's why we build dental websites that are easy to navigate, mobile-friendly, and built to build trust from the very first visit.",
    image: "/i5.png",
  },
  {
    id: 6,
    title: "Why a Great Dental Website is Worth the Investment",
    description:
      "A clean, informative, and user-friendly site can make all the difference for dental practices. Learn what goes into creating a site that drives appointments and builds credibility.",
    image: "/i6.png",
  },
  {
    id: 7,
    title: "Getting Your Product the Attention It Deserves",
    description:
      "You've got a great product, now let's get it noticed. We explore how targeted marketing strategies help your product stand out and reach the right people.",
    image: "/i7.png",
  },
  {
    id: 8,
    title: "The Secret to Strong Product Marketing in a Busy Market",
    description:
      "Great marketing is more than ads, it's about telling your product's story. Learn how smart positioning and clear messaging can cut through the noise.",
    image: "/i8.png",
  },
  {
    id: 9,
    title: "Blending Great Design with Powerful Web Functionality",
    description:
      "Design matters. We explore how a well-thought-out website can be both beautiful and effective, keeping visitors engaged and encouraging them to take action.",
    image: "/i9.png",
  },
];

function Blog() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  const headerControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsInView, cardsControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box width="100%" height="100%">
      {/* Animated Header Section */}
      <Box position="relative" ref={headerRef}>
        <MotionImage
          src="/blogBanner.png"
          width="100%"
          height={{ base: "250px", md: "400px", lg: "543px" }}
          objectFit="cover"
          alt="Blog Banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <MotionHeading
          textAlign="center"
          zIndex="1"
          position="absolute"
          top="45%"
          left="47%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "28px", md: "42px", lg: "64px" }}
          color="white"
          initial="hidden"
          animate={headerControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              },
            },
          }}
        >
          Blog
        </MotionHeading>
      </Box>

      {/* Animated Cards Section */}
      {/* <Box width="100%" padding={{ base: "20px", md: "50px", lg: "100px" }}>
        <Container maxW="1920px">
          <MotionBox
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={{ base: "16px", md: "24px" }}
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={containerVariants}
          >
            {blogCards.map((card) => (
              <MotionBox
                key={card.id}
                width="100%"
                bgColor="#F8F8F6"
                borderRadius="xl"
                position="relative"
                p={4}
                display="flex"
                flexDirection="column"
                height="auto"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                cursor="pointer"
                onClick={() => navigate(`/blog/${card.id}`)}
              >
                <MotionBox
                  overflow="hidden"
                  borderRadius="10px"
                  variants={imageVariants}
                >
                  <MotionImage
                    src={card.image}
                    width="100%"
                    height={{ base: "200px", sm: "250px", md: "299px" }}
                    objectFit="cover"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionBox>
                <MotionHeading
                  fontWeight="700"
                  lineHeight="110%"
                  fontSize={{
                    base: "20px",
                    sm: "24px",
                    md: "32px",
                    lg: "30px",
                  }}
                  mt={"20px"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {card.title}
                </MotionHeading>
                <MotionText
                  fontSize={{
                    base: "14px",
                    sm: "16px",
                    md: "20px",
                    lg: "18px",
                  }}
                  fontWeight="400"
                  mt={"15px"}
                  noOfLines={3}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {card.description}
                </MotionText>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box> */}
    </Box>
  );
}

export default Blog;
