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
          The Gentle Dentist
        </Heading>

        {/* Practice Philosophy */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Philosophy:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              At The Gentle Dentist, we've reimagined dental care from the
              ground up. Our practice was born from a simple idea: dental visits
              shouldn't be something to dread. We've created an environment
              where clinical excellence meets genuine compassion, where advanced
              technology serves patient comfort first.
            </Text>
            <Text mb={4}>
              What sets us apart is our commitment to understanding each
              patient's unique needs and anxieties. Whether you're visiting for
              a routine cleaning or more complex treatment, you'll notice the
              difference from the moment you walk through our doors. Our team
              takes time to listen, explain, and accommodate your comfort
              preferences at every step.
            </Text>
            <Text>
              We specialize in minimally invasive techniques that preserve your
              natural tooth structure while achieving optimal oral health. This
              approach, combined with our range of sedation options, allows us
              to provide comprehensive care while keeping you completely
              comfortable.
            </Text>
          </Box>
        </Box>

        {/* Key Differentiators */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Why Choose Our Practice:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Our specialized anxiety-reduction protocols are designed to help
              even the most nervous patients feel at ease. We begin with a
              consultation where we listen to your concerns and past
              experiences, then create a personalized comfort plan for your
              treatment.
            </Text>
            <Text mb={4}>
              For patients who need extra support, we offer multiple sedation
              options ranging from mild nitrous oxide to deeper IV sedation.
              Each option is administered by our trained team with your safety
              and comfort as the top priority.
            </Text>
            <Text mb={4}>
              Our pain-free injection techniques use specialized numbing methods
              that make dental shots virtually painless. We've perfected a slow,
              gentle approach that most patients barely feel.
            </Text>
            <Text mb={4}>
              For our younger patients, we've developed a child-friendly
              approach that helps kids build positive associations with dental
              care. Our team is specially trained in pediatric dentistry
              techniques that reduce fear and make visits enjoyable.
            </Text>
            <Text>
              Above all, we follow a minimally invasive philosophy. This means
              we always choose the most conservative treatment that will achieve
              excellent, long-lasting results while preserving your natural
              teeth whenever possible.
            </Text>
          </Box>
        </Box>

        {/* Our Services */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Services:
          </Heading>

          {/* Comfort-Focused General Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Comfort-Focused General Dentistry
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Our general dentistry services redefine what you can expect from
                routine dental care. Exams and cleanings are performed with
                extra time allocated to explain each step and allow for breaks
                as needed. We use specialized instruments that are gentler on
                teeth and gums without compromising effectiveness.
              </Text>
              <Text mb={4}>
                When treating cavities, we employ advanced numbing techniques
                and gentle drilling methods that minimize discomfort. For gum
                disease therapy, we've developed approaches that effectively
                treat the condition while causing minimal irritation to
                sensitive gum tissue.
              </Text>
              <Text mb={4}>
                Even procedures like root canals and extractions are transformed
                at our practice. Using our combination of sedation options and
                gentle techniques, these traditionally feared treatments become
                much more manageable experiences. We carefully monitor your
                comfort throughout any procedure and make adjustments as needed.
              </Text>
            </Box>
          </Box>

          {/* Relaxing Cosmetic Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Relaxing Cosmetic Dentistry
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Achieving your dream smile shouldn't require enduring
                discomfort. Our teeth whitening procedures use systems
                specifically designed to minimize sensitivity while delivering
                dramatic results. We take time to prepare your teeth properly
                and use desensitizing agents to ensure a comfortable experience.
              </Text>
              <Text mb={4}>
                For patients considering veneers, we offer minimally invasive
                options like Lumineers that preserve more of your natural tooth
                structure. The process is carefully planned and executed to be
                as gentle as possible, with sedation options available at every
                step.
              </Text>
              <Text>
                Complete smile makeovers with us are designed to be stress-free
                from consultation to final reveal. We break down the process
                into manageable steps and ensure you're comfortable throughout
                your transformation journey.
              </Text>
            </Box>
          </Box>

          {/* Sedation Dentistry */}
          <Box mb={8}>
            <Heading fontSize="20px" mb={4} fontWeight="600">
              Sedation Dentistry Options
            </Heading>
            <Box fontSize="18px" fontWeight="400" mb={4}>
              <Text mb={4}>
                Our range of sedation options addresses every level of dental
                anxiety. Nitrous oxide, or "laughing gas," provides mild
                relaxation while keeping you fully awake and responsive. It's
                ideal for patients who just need help taking the edge off their
                nervousness.
              </Text>
              <Text mb={4}>
                For moderate anxiety, oral sedation uses prescribed medication
                to induce a deeper state of relaxation. You'll remain conscious
                but feel profoundly calm throughout your procedure, with limited
                memory of the treatment afterward.
              </Text>
              <Text mb={4}>
                Our IV sedation option, administered by a trained
                anesthesiologist, is perfect for complex procedures or severe
                dental phobia. This puts you in a twilight sleep where you're
                unaware of the treatment but can still respond to instructions.
              </Text>
              <Text>
                For patients who prefer to stay completely alert, our virtual
                reality distraction therapy transports you to calming
                environments during treatment. The immersive experience
                significantly reduces perception of time and discomfort during
                procedures.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Comfort Features */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Our Comfort Features:
          </Heading>
          <Box fontSize="18px" fontWeight="400" mb={4}>
            <Text mb={4}>
              Every detail of our practice has been thoughtfully designed to
              minimize stress. From the moment you enter our soothing reception
              area with its calming color palette, you'll notice the difference.
              Our treatment rooms feature ergonomic chairs with warm blankets
              and neck pillows for longer procedures.
            </Text>
            <Text mb={4}>
              We provide noise-canceling headphones with a selection of calming
              music, or you're welcome to bring your own playlist. For those who
              find scent therapeutic, we offer aromatherapy options like
              lavender to help create a relaxing atmosphere.
            </Text>
            <Text mb={4}>
              Each treatment room is equipped with entertainment systems
              featuring streaming options to distract you during procedures. But
              most importantly, our team prioritizes clear, compassionate
              communication - explaining each step in simple terms and checking
              in frequently about your comfort level.
            </Text>
            <Text>
              Our office layout and scheduling system are designed to avoid the
              crowded, rushed feeling of traditional dental practices. You'll
              never feel pressured or hurried, with ample time allocated for
              questions and breaks as needed.
            </Text>
          </Box>
        </Box>

        {/* Patient Testimonials */}
        <Box mb={8}>
          <Heading fontSize="36px" mb={4} fontWeight="600">
            Patient Experiences:
          </Heading>
          <Box fontSize="18px" fontStyle="italic" mb={4}>
            <Text mb={4}>
              "After 15 years of avoiding the dentist due to childhood trauma,
              The Gentle Dentist helped me finally get the care I needed. Their
              patience and understanding made all the difference - I actually
              fell asleep during my root canal! The team worked with me over
              several visits to build trust, never judging my dental anxiety but
              instead offering solutions. I've since completed a full smile
              makeover and now maintain regular checkups - something I never
              thought possible."
            </Text>
            <Text mb={4}>
              "As a parent, finding a dental practice that both my children and
              I love has been life-changing. My kids used to dread dental visits
              until we discovered The Gentle Dentist. The team knows exactly how
              to explain procedures in kid-friendly terms and make them feel
              special. Now they ask when their next visit is! I appreciate how
              thoroughly they explain treatment options and never pressure us
              into unnecessary procedures. It's rare to find healthcare
              providers who combine such clinical excellence with genuine
              compassion."
            </Text>
            <Text>
              "My severe dental phobia had me neglecting my oral health for
              years, leading to significant problems I was too scared to
              address. The sedation options at The Gentle Dentist gave me the
              courage to finally get the care I needed. What impressed me most
              was how the entire staff treated me with such kindness and respect
              - never making me feel embarrassed about my anxiety or the state
              of my teeth. They've literally changed my life by giving me back
              my smile and my confidence. The aftercare and follow-up showed
              they truly care about their patients as people, not just cases."
            </Text>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box mb={8} textAlign="center" py={8} borderTop="1px solid #eee">
          <Heading fontSize="28px" mb={4} fontWeight="600">
            Experience Dentistry Differently
          </Heading>
          <Text fontSize="18px" mb={6}>
            We invite you to discover how comfortable dental care can be.
            Contact us today to schedule your consultation and take the first
            step toward anxiety-free oral health.
          </Text>
          <Box
            as="button"
            bg="blue.500"
            color="white"
            px={6}
            py={3}
            borderRadius="md"
            fontWeight="600"
            _hover={{ bg: "blue.600" }}
          >
            Book Your Appointment
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
