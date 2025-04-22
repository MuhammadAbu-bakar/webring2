import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const WebDevelopmentPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('/i1.png')" // Replace with your image path
        bgSize="cover"
        bgPosition="center"
        py={{ base: 20, md: 28 }}
        textAlign="center"
        color="white"
      >
        <Container maxW="4xl">
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Getting Your Product the Attention It Deserves
          </Heading>
        </Container>
      </Box>

      {/* Content Sections */}
      <Container maxW="6xl" py={16}>
        <VStack spacing={16} align="stretch">
          {/* Section 1 */}
          <Box>
            <Text fontSize="md" mb={6} lineHeight="tall">
              You've poured time, energy, and probably more late nights than
              you'd like to admit into building a product you believe in. Maybe
              it's a new piece of software, a beautifully crafted physical item,
              or a service that fills a gap no one else noticed. But no matter
              how brilliant it is, people can't fall in love with something
              they've never seen. Getting attention isn't about chasing viral
              trends or being everywhere at once—it's about showing up
              purposefully, speaking clearly, and building trust. When you focus
              on the right kind of visibility, you stop shouting into the void
              and start creating real momentum.
            </Text>

            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Start with a Clear, Honest Story
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Before someone clicks "buy" or signs up for your service, they
              need to understand what you're offering—and why it matters to
              them. This is where your brand story comes in. And it's not just
              what you do, but why you do it.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Instead of listing features, show how your product fits into
              someone's life. What problem does it solve? What values does it
              stand for? If you can answer those in a way that feels genuine,
              your audience will feel it too.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              📌 Example: One sustainable skincare brand we worked with
              simplified their messaging from "made with organic botanicals" to
              "skincare that puts people and the planet first." The result? A 3x
              increase in engagement and higher retention.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Let Your Website Be the Hero
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              If your product lives online, your website is your storefront. And
              first impressions still matter. A sleek, intuitive, and
              fast-loading site isn't just "nice to have"—it's expected.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              For e-commerce brands, that could mean optimizing your product
              pages with better descriptions, lifestyle imagery, and reviews.
              For SaaS startups, it's having a homepage that explains your value
              in five seconds or less.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              ✨ Pro tip: Avoid information overload. Make it easy for people to
              learn what your product is, why it matters, and what to do next.
              That clarity alone sets you apart from half the internet.
            </Text>
          </Box>

          {/* Section 3 */}
          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Social Proof = Instant Credibility
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              People trust other people way more than they trust marketing.
              That's why testimonials, reviews, and case studies are gold. Don't
              bury them—highlight them proudly.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Whether it's screenshots of happy tweets, real customer videos, or
              "before and after" results, these small signals build massive
              confidence. If someone sees that others are loving your product,
              they're way more likely to take a closer look.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              📌 One SaaS client added a rotating banner of user quotes on their
              homepage—conversions jumped by 22% in two weeks. Why? Because
              people like knowing they're not the first to take the leap.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Be Where Your People Are
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Trying to speak to everyone usually means reaching no one. Your
              ideal audience already hangs out somewhere—whether that's a
              subreddit, an Instagram niche, a podcast community, or a
              newsletter group.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Instead of spreading your marketing budget thin, go deep where it
              counts. Partner with creators who align with your values. Join
              conversations already happening. That's how you build awareness
              that sticks.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              📌 A productivity app we supported focused on just three
              influencer partnerships on YouTube. That one campaign brought in
              10,000 new users—with lower CAC than any paid ads they'd run
              before.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Email Isn't Dead, It's a Powerhouse
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              A strong email list is like having a direct line to people who
              actually want to hear from you. It's your chance to build
              relationships over time, not just push products.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              But don't just blast promotions. Share helpful content, early
              access to launches, behind-the-scenes stories, or even tips that
              align with your product's mission. Build trust in their inbox—and
              they'll remember you when it's time to buy.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              ✨ Bonus: Email also gives you control. Algorithms change, but a
              solid email list is yours.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Content That's Actually Useful
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              People are searching for answers, not ads. By creating content
              that helps solve real problems, you can become a trusted resource
              in your space. Think tutorials, how-tos, honest insights from your
              journey, or product guides that feel more like conversations than
              sales pitches.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              This is especially powerful for tech startups or niche products
              that need a little explanation. If your audience learns something
              new from you, they're more likely to stick around.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              📌 One B2B SaaS client started a blog series breaking down complex
              industry topics in plain English. Their SEO traffic tripled—and
              leads became more qualified, too.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" fontSize="3xl" mb={6} fontWeight="semibold">
              Final Thoughts: Visibility with Purpose
            </Heading>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Getting your product noticed isn't about being loud—it's about
              being clear. It's about helping people understand what you've
              built, why it matters, and why now is the right time to check it
              out.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              When you align your messaging, visuals, and strategy with what
              your audience actually cares about, attention stops being
              accidental—it becomes inevitable.
            </Text>

            <Text fontSize="md" mb={6} lineHeight="tall">
              Because at the end of the day, your product does deserve
              attention. Not because it's the flashiest or trendiest thing—but
              because it solves a problem, brings value, or makes life better.
              That's worth noticing.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default WebDevelopmentPage;
