import Header2 from "../components/ServicesHeader";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  IconButton,
  VStack,
  Text
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HeroBanner2 from "../components/HeroBanner2";
import Skills2 from "../components/Skills2";




const ServicesPage=()=>{
    return(
        <>
          <HeroBanner2 />
          <Skills2 />
        </>

    );
        
    
}
export default ServicesPage;