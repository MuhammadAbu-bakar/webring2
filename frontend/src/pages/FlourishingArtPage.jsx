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
          letterSpacing="1px"
        >
          Flourishing Art
        </Heading>

        {/* Studio Background */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Studio Vision:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Flourishing Art represents the intersection of botanical science
              and fine art. Founded by classically trained artists with a
              passion for the natural world, our studio creates works that honor
              both the precision of plant anatomy and the expressive potential
              of artistic interpretation. Each piece begins with careful
              observation and evolves into a celebration of nature's intricate
              beauty.
            </Text>
            <Text>
              We specialize in original paintings that capture the ephemeral
              quality of flora at its peak, preserving moments of natural
              perfection through meticulous watercolor and gouache techniques.
              Our limited edition prints make this botanical artistry accessible
              to more collectors, while commissioned pieces allow for deeply
              personal nature-inspired creations.
            </Text>
          </Box>
        </Box>

        {/* Artistic Specialties */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Artistic Specialties:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Our botanical watercolor and gouache paintings represent the core
              of our practice. Using techniques honed through years of study, we
              layer translucent washes to achieve remarkable depth and
              luminosity, capturing the delicate structures of petals, leaves,
              and stems with scientific precision while maintaining artistic
              sensitivity.
            </Text>
            <Text mb={4}>
              For clients seeking more interpretive works, our nature-inspired
              abstract compositions distill organic forms into their essential
              elements. These pieces maintain the spirit of botanical subjects
              while exploring color relationships and compositional dynamics
              through a contemporary lens.
            </Text>
            <Text mb={4}>
              Custom commissioned floral artworks allow collectors to
              immortalize meaningful botanicals - whether wedding bouquets,
              memorial flowers, or beloved garden specimens. Each commission
              begins with extensive consultation to understand the personal
              significance behind the subject matter.
            </Text>
            <Text mb={4}>
              Our limited edition archival prints are produced using
              museum-quality giclée technology on fine art paper, ensuring the
              subtlest details and color nuances of the original works are
              preserved. These editions are kept intentionally small to maintain
              exclusivity and value.
            </Text>
            <Text>
              The herbarium-style mixed media pieces combine pressed botanical
              specimens with delicate ink drawings and watercolor accents,
              creating dimensional artworks that bridge the gap between
              scientific documentation and artistic expression.
            </Text>
          </Box>
        </Box>

        {/* Our Offerings */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Offerings:
          </Heading>

          {/* Original Artworks */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Original Artworks
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Our botanical watercolor collections showcase the diversity of
                plant life through series focused on specific themes - perhaps
                the stages of a blooming peony or the seasonal transformation of
                maple leaves. Each painting in these collections represents
                countless hours of observation and careful brushwork to achieve
                both accuracy and artistry.
              </Text>
              <Text mb={4}>
                The seasonal floral series follows nature's calendar, with
                spring focusing on delicate blossoms, summer on vibrant garden
                flowers, autumn on changing foliage, and winter on structural
                seed pods and evergreen elements. These works celebrate the
                cyclical beauty of the natural world.
              </Text>
              <Text mb={4}>
                For collectors seeking statement pieces, our large-scale nature
                installations create immersive botanical environments. These
                might feature oversized floral elements or expansive landscapes
                of imagined flora, all rendered with the same attention to
                detail as our smaller works.
              </Text>
              <Text mb={4}>
                The framed herbarium artworks present pressed botanical
                specimens alongside scientific-style illustrations, creating
                dimensional pieces that reference historical botanical
                documentation while incorporating contemporary design
                sensibilities.
              </Text>
              <Text>
                Our one-of-a-kind mixed media pieces push the boundaries of
                botanical art, incorporating elements like gold leaf, handmade
                papers, or delicate embroidery to add texture and depth to the
                floral subjects. These experimental works represent the cutting
                edge of our artistic practice.
              </Text>
            </Box>
          </Box>

          {/* Print Collections */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Print Collections
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                The limited edition giclée prints are produced in-house using
                archival pigment inks and fine art papers selected to complement
                each artwork's characteristics. Each print is hand-numbered and
                signed, with editions typically limited to 50 or fewer to
                maintain collectibility.
              </Text>
              <Text mb={4}>
                For more accessible collecting, our open edition art prints
                offer favorite designs at various size options. While not
                limited in quantity, these still maintain our exacting quality
                standards, printed on premium matte or watercolor-textured
                papers.
              </Text>
              <Text mb={4}>
                Understanding that every space has unique requirements, we offer
                custom print sizes and framing services. Our framing options use
                conservation-grade materials and are designed to enhance rather
                than compete with the artwork, with choices ranging from simple
                white gallery frames to rustic wood finishes.
              </Text>
              <Text>
                Seasonal print releases coincide with nature's cycles, offering
                collectors the opportunity to build a rotating gallery that
                reflects the changing year. These curated collections often
                feature companion pieces that work beautifully together while
                standing strong as individual artworks.
              </Text>
            </Box>
          </Box>

          {/* Commissioned Works */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Commissioned Works
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Personal portraits incorporating meaningful botanicals create
                profound connections between people and plants. These might
                feature birth flowers, plants from meaningful locations, or
                species with personal symbolism, integrated into compositions
                that tell visual stories about the subject's relationship with
                nature.
              </Text>
              <Text mb={4}>
                Our wedding floral paintings preserve bridal bouquets as
                timeless artworks, capturing every detail from the delicate
                veining of petals to the intricate wrapping of stems. These
                commissioned pieces often become family heirlooms, passed down
                with the stories they represent. We work from both fresh
                bouquets and photographs to create these lasting memorials of
                special days.
              </Text>
              <Text mb={4}>
                Memorial pieces honor significant plants or flowers associated
                with loved ones. These sensitive works might depict a favorite
                garden rose, funeral flowers, or even a simple dandelion from a
                meaningful place. We approach these commissions with particular
                care, taking time to understand the stories and emotions behind
                each request.
              </Text>
              <Text>
                For commercial projects, we create custom artworks that align
                with brand identities while maintaining our distinctive
                botanical aesthetic. These might include series of paintings for
                hotel suites, large-scale installations for corporate lobbies,
                or signature illustrations for product packaging. Each project
                begins with thorough consultation to ensure the artwork
                perfectly serves its intended space and purpose.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Artistic Process */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Artistic Process:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Our creative process begins with deep observation, whether working
              from live specimens in our studio garden or carefully selected
              reference materials. For each piece, we study the subject's growth
              patterns, structural details, and unique characteristics, often
              creating numerous sketches before beginning the final artwork.
            </Text>
            <Text mb={4}>
              We use only archival-quality materials - from acid-free papers to
              lightfast pigments - ensuring each artwork maintains its beauty
              for generations. This commitment to longevity influences every
              choice, from the selection of substrates to the finishing
              treatments applied to completed works.
            </Text>
            <Text mb={4}>
              The layering techniques we've developed create remarkable depth
              and texture in our paintings. Thin washes of color build gradually
              to achieve luminosity, while careful dry-brush work captures fine
              details like leaf venation or the delicate fuzz on a stem. This
              meticulous approach results in artworks that reveal new details
              upon closer inspection.
            </Text>
            <Text mb={4}>
              While maintaining scientific accuracy in botanical details, we
              exercise artistic license in composition and presentation. A
              specimen might be depicted at various stages of bloom within a
              single piece, or arranged with complementary species in ways that
              wouldn't occur in nature but create visual harmony.
            </Text>
            <Text>
              For commissioned works, collaboration is central to our process.
              We guide clients through choices of medium, size, and presentation
              while learning about the personal significance behind their
              requested subject. Regular updates ensure the developing artwork
              aligns with their vision, resulting in pieces that feel deeply
              personal while maintaining our artistic integrity.
            </Text>
          </Box>
        </Box>

        {/* Client Experiences */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Collector Experiences:
          </Heading>
          <Box fontSize="18px" fontStyle="italic" mb={4}>
            <Text mb={4}>
              "The commissioned painting of my grandmother's rose garden has
              become our family's most treasured heirloom. The artist didn't
              just capture the physical appearance of the roses - they somehow
              conveyed the love and care my grandmother put into that garden.
              Every time I look at it, I see new details that take me back to
              childhood summers spent helping her tend those flowers. It's more
              than art; it's a piece of our family history preserved with
              incredible skill and sensitivity." - Margaret D.
            </Text>
            <Text mb={4}>
              "I've collected three pieces from the seasonal series over the
              years, and they've completely transformed my living space. The
              spring cherry blossom painting brings lightness after winter,
              while the autumn maple leaves fill the room with warmth as days
              grow shorter. What amazes me most is the botanical accuracy - my
              botanist friends can identify the exact cultivars depicted. Yet
              despite this precision, each piece has undeniable artistic soul.
              They're constant reminders of nature's beauty right in my home." -
              Alex R.
            </Text>
            <Text>
              "After seeing my wedding bouquet preserved in a Flourishing Art
              painting, several friends have commissioned their own. The artist
              captured not just the flowers but the delicate lace from my gown
              wrapped around the stems and even the tiny pearl pins my mother
              added. It's displayed in our entryway where guests always pause to
              admire it, and now represents so much more than just our wedding
              flowers - it's become a symbol of our growing family's story." -
              Sophia L.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
