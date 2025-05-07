import { Box, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="white" color="black">
      <Box p={8} maxW="1000px" mx="auto">
        <Heading
          fontSize="48px"
          textAlign="center"
          mb="100px"
          fontWeight="600"
          color="black"
        >
          Log Cabin Florist
        </Heading>

        {/* Studio Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Studio Background:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Nestled in the heart of the countryside, Log Cabin Florist began
              as a small passion project and has blossomed into a premier floral
              design studio. Our journey started with a simple love for the
              natural beauty of seasonal blooms and has grown into a
              full-service floral atelier serving weddings, special events, and
              everyday floral enthusiasts.
            </Text>
            <Text>
              What sets us apart is our unique ability to blend rustic charm
              with artistic elegance. Each arrangement tells a story, combining
              the untamed beauty of nature with sophisticated design principles.
              Our studio, housed in a beautifully restored log cabin, serves as
              both our creative workshop and a welcoming space for clients to
              explore floral possibilities.
            </Text>
          </Box>
        </Box>

        {/* Our Specialties */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Specialties:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Our rustic-chic wedding florals have become sought-after for
              couples wanting natural elegance with a touch of woodland magic.
              We specialize in creating breathtaking installations that
              transform venues while maintaining an organic, effortless beauty.
              From floral arches that frame your vows to delicate bud vases that
              adorn reception tables, every element is thoughtfully designed.
            </Text>
            <Text mb={4}>
              For those who want to bring seasonal beauty into their homes
              year-round, our bouquet subscription service delivers carefully
              curated arrangements that celebrate each season's unique
              offerings. These aren't just bouquets - they're carefully composed
              seasonal stories told through blooms, foliage, and natural
              textures.
            </Text>
            <Text mb={4}>
              Our custom floral design service creates one-of-a-kind pieces for
              special events and occasions. Whether it's an intimate anniversary
              dinner or a grand corporate gala, we craft florals that perfectly
              capture the essence of your vision. We take pride in using
              predominantly locally-sourced blooms, supporting nearby growers
              while ensuring the freshest possible flowers.
            </Text>
            <Text>
              Beyond arrangements, we share our passion through floral workshops
              and design classes held in our studio. These hands-on experiences
              teach the art of floral design while fostering a deeper
              appreciation for nature's beauty. From beginner basics to advanced
              techniques, we love helping others discover the joy of working
              with flowers.
            </Text>
          </Box>
        </Box>

        {/* Our Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Services:
          </Heading>

          {/* Wedding Florals */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Wedding & Event Florals
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Creating wedding florals is our greatest passion and privilege.
                Each bridal bouquet we craft is a unique work of art, designed
                to complement the bride's personality and wedding aesthetic. We
                carefully select blooms that hold their beauty throughout the
                day, incorporating special touches like delicate ribbons or
                meaningful charms when desired.
              </Text>
              <Text mb={4}>
                Our ceremony installations range from simple floral arches to
                dramatic hanging installations, all designed to enhance your
                venue's natural beauty. For receptions, we create cohesive
                tablescapes that might include lush centerpieces, delicate bud
                vase arrangements, or sweeping table runners of greenery and
                blooms.
              </Text>
              <Text>
                The finishing touches - boutonnieres, corsages, and floral
                hairpieces - receive the same careful attention as larger
                pieces. Our full-service coordination ensures every floral
                element works in harmony, from the first look to the final
                dance.
              </Text>
            </Box>
          </Box>

          {/* Seasonal Arrangements */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Seasonal Arrangements
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Our seasonal arrangements celebrate nature's ever-changing
                palette. The weekly and monthly subscription bouquets bring the
                countryside's current beauty into homes and offices, with each
                delivery featuring what's freshest and most vibrant from local
                growers. These arrangements evolve throughout the year, from the
                soft pastels of spring to the rich, warm tones of autumn.
              </Text>
              <Text mb={4}>
                The signature "Cabin Collection" represents our design
                philosophy in its purest form - arrangements that feel freshly
                gathered from a woodland garden, with careful attention to
                texture, color, and form. These pieces showcase the beauty of
                imperfect, natural elements combined with premium blooms.
              </Text>
              <Text>
                For holidays and special occasions, we create limited-edition
                designs that capture the spirit of the season while maintaining
                our distinctive style. Our farmers market bouquets bring
                studio-quality designs to the local community, offering
                accessible pieces of floral art.
              </Text>
            </Box>
          </Box>

          {/* Custom Design */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Custom Floral Design
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Special occasions deserve extraordinary florals. Our custom
                designs for birthdays, anniversaries, and celebrations transform
                events into unforgettable experiences. We work closely with
                clients to understand their vision, then create pieces that
                exceed expectations. A golden anniversary might call for elegant
                roses with gilded accents, while a milestone birthday could
                inspire a bold, vibrant arrangement bursting with personality.
              </Text>
              <Text mb={4}>
                In times of loss, our sympathy flowers offer comfort and beauty.
                These arrangements are designed with particular care and
                sensitivity, often incorporating meaningful flowers or colors
                that honor the departed. We handle each order with the utmost
                respect and attention to detail.
              </Text>
              <Text mb={4}>
                Corporate clients rely on us to elevate their spaces and events
                with sophisticated florals. From weekly office arrangements to
                large-scale event installations, we create designs that align
                with brand aesthetics while bringing life and energy to
                professional environments. Our photo shoot florals are crafted
                with the camera in mind, ensuring they photograph beautifully
                from every angle.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Design Philosophy */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Design Philosophy:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              At the heart of our work is a deep respect for nature's rhythms.
              We prioritize seasonal, locally-grown flowers not just for their
              freshness and reduced environmental impact, but because they
              inherently reflect the beauty of the moment. There's magic in
              working with peonies in late spring or dahlias in early fall -
              flowers that can't be forced but arrive precisely when they're
              meant to.
            </Text>
            <Text mb={4}>
              Our hand-tied arrangements celebrate organic movement, allowing
              each stem to find its natural place in the composition. This
              approach creates designs that feel alive and effortless, as if
              they were just gathered from a garden. We often incorporate
              interesting foliages, seed pods, and other natural elements that
              add texture and authenticity to our work.
            </Text>
            <Text mb={4}>
              The containers and vessels we use are carefully selected to
              complement our rustic aesthetic. From vintage pitchers to
              handcrafted wooden boxes, these elements add character and warmth
              to our arrangements. Sustainability guides many of our choices,
              from using floral foam alternatives to composting waste and
              recycling materials whenever possible.
            </Text>
            <Text>
              Every custom order begins with a personalized consultation where
              we listen carefully to your vision, preferences, and needs. These
              conversations often spark creative ideas that make each piece
              truly unique. Whether you know exactly what you want or need
              guidance, we're here to translate your floral dreams into reality.
            </Text>
          </Box>
        </Box>

        {/* Client Experiences */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Client Experiences:
          </Heading>
          <Box fontSize="18px" fontStyle="italic" mb={4}>
            <Text mb={4}>
              "Log Cabin Florist transformed our barn wedding into a floral
              fairyland that still has our guests talking. From the lush bridal
              bouquet that felt like it was picked from an enchanted garden to
              the dramatic floral chandelier that took everyone's breath away -
              every arrangement was more beautiful than we could have imagined.
              Their team understood our vision perfectly and executed it with
              such care and artistry. The flowers were the most complimented
              element of our entire celebration!" - Emily & James
            </Text>
            <Text mb={4}>
              "I've been receiving the seasonal subscription for over a year
              now, and every bouquet surprises and delights me. The winter
              arrangements with pinecones and berries made my home feel cozy
              during the holidays, while the summer bouquets bursting with
              peonies and garden roses brought the outdoors inside. It's like
              having a little piece of the countryside in my city apartment each
              month. The care instructions included with each delivery help me
              enjoy them longer too." - Sarah T.
            </Text>
            <Text>
              "After disappointing experiences with other florists, finding Log
              Cabin Florist was a revelation. The sympathy arrangement they
              created for my mother's service was profoundly beautiful -
              incorporating her favorite flowers in a design that felt both
              elegant and deeply personal. The care they took in understanding
              what would be meaningful, and the gentle way they handled such a
              sensitive order, meant more than I can express. These aren't just
              florists - they're true artists who understand the emotional
              language of flowers." - Michael R.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
