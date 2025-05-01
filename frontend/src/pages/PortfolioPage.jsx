import React from "react";
import { Box, Image, Heading, Container, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const portfolioCards = [
  {
    id: 1,
    title: "Almassa",
    description:
      "A dynamic corporate website built for Almassa to establish a strong online presence. We focused on sleek visuals and interactive sections to enhance user engagement and highlight their innovation-driven services.",
    image: "/almassa.png",
    navigateTo: "/almassa",
  },
  {
    id: 2,
    title: "MedExpress",
    description:
      "For MedExpress, we designed a clean, professional platform tailored to the healthcare industry. The website emphasizes clarity, functionality, and easy navigation to support patients onboarding and medical service outreach.",
    image: "/medexpress.png",
    navigateTo: "/medexpress",
  },
  {
    id: 3,
    title: "JazPayments",
    description:
      "We partnered with JazPayments to develop a user-centric platform that simplifies payment solutions. The site features intuitive design and secure integrations, ensuring clients can access services with confidence and ease.",
    image: "/jazzpay.png",
    navigateTo: "/jazpayment",
  },
  {
    id: 4,
    title: "My Retro Jersey",
    description:
      "My Retro Jersey needed a visually engaging eCommerce site to showcase their unique vintage football jerseys. We delivered a bold design with a seamless shopping experience to boost conversions and brand appeal.",
    image: "/myretro.png",
    navigateTo: "/myretrojersey",
  },
  {
    id: 5,
    title: "JP Logistics",
    description:
      "JP Logistics needed a bold, trustworthy digital presence to reflect their global shipping services. We delivered a responsive, information-rich website that builds credibility and makes it easy for users to request quotes and track shipments.",
    image: "/jplogistics.png",
    navigateTo: "/jplogistics",
  },
  {
    id: 6,
    title: "Sora Schools",
    description:
      "We crafted an innovative and student-friendly digital platform for Sora School, focusing on accessibility and interactivity. The design promotes personalized learning journeys while maintaining a clean, modern aesthetic for both students and educators.",
    image: "/soraschools.png",
    navigateTo: "/soraschools",
  },
  {
    id: 7,
    title: "Gemma Foods",
    description:
      "For Gemma Foods, we created a visually rich and appetite-driven design that brings their fresh, chef-crafted meals to life. From product storytelling to seamless order flow, the website delivers both beauty and functionality.",
    image: "/gemmafoods.png",
    navigateTo: "/gemmafoods",
  },
  {
    id: 8,
    title: "Motion Grey",
    description:
      "Motion Grey's website was designed to blend technology and lifestyle. With a sleek, minimal look and a performance-optimized structure, we ensured a smooth shopping experience for their ergonomic furniture and wellness products.",
    image: "/motiongrey.png",
    navigateTo: "/motiongrey",
  },
  {
    id: 9,
    title: "US Technologies 100",
    description:
      "US Technologies 100's platform showcases cutting-edge tech solutions with a focus on user experience. The responsive design highlights their innovative approach while maintaining professional credibility.",
    image: "/ustechnologies.png",
    navigateTo: "/ustechnologies",
  },
  {
    id: 10,
    title: "13 Chauffers",
    description:
      "For 13 Chauffers, we developed an elegant transportation service platform that emphasizes luxury and reliability. The intuitive booking system and clean interface reflect their premium service standards.",
    image: "/13chauffer.png",
    navigateTo: "/chauffers",
  },
  {
    id: 11,
    title: "Targomo",
    description:
      "Targomo's location intelligence platform required a sophisticated yet accessible interface. We delivered a solution that effectively communicates complex spatial data through intuitive visualizations and clear navigation.",
    image: "/targomoo.png",
    navigateTo: "/targomo",
  },
  {
    id: 12,
    title: "The Dentist of SummerLin",
    description:
      "The Dentist of Summerlin provides professional dental care services in Summerlin, Las Vegas, specializing in general, cosmetic, and restorative treatments like teeth whitening, veneers, implants, and Invisalign.",
    image: "/portsummerlin.png",
    navigateTo: "/dentist-summerlin",
  },
  {
    id: 13,
    title: "The Dentist CEO",
    description:
      "The Dentist CEO is a platform dedicated to helping dental professionals build thriving practices through business coaching, marketing strategies, and leadership development.",
    image: "/portdentistceo.png",
    navigateTo: "/dentist-ceo",
  },
  {
    id: 14,
    title: "Dentist Art",
    description:
      "Dentist Art is an innovative platform combining dentistry with artistic craftsmanship, specializing in high-end aesthetic dental solutions like custom veneers, smile design, and digital smile makeovers.",
    image: "/portart.png",
    navigateTo: "/dentist-art",
  },
  {
    id: 15,
    title: "The Gentle Dentist",
    description:
      "The Gentle Dentist provides compassionate, anxiety-free dental care with a focus on patient comfort and minimally invasive techniques. Specializing in family dentistry, cosmetic procedures, and sedation options, this practice emphasizes a stress-free environment.",
    image: "/portgentle.png",
    navigateTo: "/gentle-dentist",
  },
  {
    id: 16,
    title: "Log Cabin Florist",
    description:
      "Log Cabin Florist is a full-service floral design studio offering fresh, handcrafted arrangements for weddings, events, and everyday occasions.Known for their rustic charm and artistic elegance, they specialize in seasonal blooms and custom bouquets.",
    image: "/portlogan.png",
    navigateTo: "/log-cabin-florist",
  },
  {
    id: 17,
    title: "Flourishing Art",
    description:
      "Flourishing Art is a creative studio specializing in bespoke botanical and nature-inspired artwork, offering original paintings, prints, and commissioned pieces that celebrate the beauty of flora and organic forms.",
    image: "/portflorishart.png",
    navigateTo: "/flourishing-art",
  },
  {
    id: 18,
    title: "Dentist Sonrisas",
    description:
      "Sonrisas Dental is a modern dental practice offering personalized, patient-centered care with a focus on comfort, advanced technology, and comprehensive services from preventive dentistry to cosmetic smile transformations.",
    image: "/portsonrisas.png",
    navigateTo: "/dentist-sonrisas",
  },
  {
    id: 19,
    title: "One of a Kind Designs",
    description:
      "One of a Kind Designs is a Bakersfield-based creative studio specializing in custom signage, vehicle wraps, and branded merchandise, offering businesses and individuals eye-catching solutions to stand out.",
    image: "/portbaker.png",
    navigateTo: "/baker-field",
  },
  {
    id: 20,
    title: "Chase Flower Shop",
    description:
      "Chase Flower Shop is a boutique floral studio crafting fresh, hand-arranged blooms for weddings, events, and everyday occasions, blending timeless elegance with modern design.",
    image: "/portchase.png",
    navigateTo: "/chase-flower",
  },
];

function Portfolio() {
  const navigate = useNavigate();

  return (
    <Box width="100%" minHeight="100vh" bg="white">
      {/* Header */}
      <Box position="relative">
        <MotionImage
          src="/portfolioBanner.png"
          width="100%"
          height={{ base: "300px", md: "543px" }}
          objectFit="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <MotionHeading
          position="absolute"
          top={{ base: "45%", md: "45%" }}
          left={{ base: "36%", md: "42%" }}
          transform="translate(-50%, -50%)"
          color="white"
          fontSize={{ base: "28px", md: "64px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Portfolio
        </MotionHeading>
      </Box>

      {/* Cards */}
      <Container maxW="container.xxl" py={{ base: "40px", md: "80px" }}>
        <MotionBox
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: "24px", md: "32px" }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {portfolioCards.map((card) => (
            <MotionBox
              key={card.id}
              bg="#F8F8F8"
              borderRadius="xl"
              p={4}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              onClick={() => navigate(card.navigateTo)}
              cursor="pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <MotionBox
                height={{ base: "250px", md: "350px" }}
                mb={4}
                borderRadius="lg"
                overflow="hidden"
                variants={imageVariants}
              >
                <MotionImage
                  src={card.image}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </MotionBox>
              <MotionHeading fontSize={{ base: "xl", md: "3xl" }}>
                {card.title}
              </MotionHeading>
              <MotionText
                noOfLines={4}
                mt={2}
                color="gray.600"
                fontSize={{ base: "xl", md: "xl" }}
              >
                {card.description}
              </MotionText>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}

export default Portfolio;
