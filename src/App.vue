<template>
  <div class="parent-div">
    <the-nav />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheNav from "./components/nav/TheNav.vue";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  components: { TheNav, TheFooter },
  data() {
    return {
      dummyProduct: [
        {
          id: 0,
          image:
            "https://www.withclarity.com/cdn/shop/articles/SOLITAIRE_ENGAGEMENT_RINGS.jpg?v=1697178742",
          name: "Diamond Solitaire Ring",
          outerDesc:
            "Elegant solitaire ring featuring a brilliant-cut diamond set in a timeless four-prong setting. Perfect for engagements or special occasions.",
          price: "1,299.99",
          material: "18K White Gold",
          shortDesc:
            "This exquisite diamond solitaire ring features a brilliant-cut diamond (0.75 carat) set in a timeless four-prong setting. The diamond is carefully selected for its exceptional clarity, color, and cut, creating a stunning sparkle from every angle. The sleek band is crafted from 18K white gold, ensuring both durability and a luxurious finish that will last a lifetime.",
          shortSpecifications: {
            Material: "18K White Gold",
            Diamond: "0.75 Carat",
            Cut: "Brilliant Round",
            Clarity: "VS1",
          },
          longDesc: {
            first:
              "The Diamond Solitaire Ring is a symbol of eternal love and commitment. This classic design features a stunning 0.75-carat brilliant-cut diamond, prized for its exceptional sparkle and fire. The diamond is securely held in a four-prong setting that elevates it to catch maximum light while ensuring its safety.",
            second:
              "Crafted from 18K white gold, the band offers a contemporary look while providing exceptional durability. The high-quality white gold has been rhodium-plated to enhance its bright, lustrous appearance and resist tarnishing.",
            third:
              "Each diamond in our solitaire rings undergoes rigorous selection to ensure it meets our exacting standards for brilliance, fire, and scintillation. Only diamonds with excellent proportions and polish make it into our finished pieces.",
            fourth:
              "Perfect for engagements, anniversaries, or any special occasion, this timeless ring will be cherished for generations to come. Each ring comes in our signature gift box with a GIA certificate authenticating the diamond's specifications",
          },
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "0.75 carat",
            diamondShape: "Round Brilliant Cut",
            diamondColor: "F (Colorless)",
            diamondClarity:
              "VS1 (Very Slightly Included - inclusions difficult to see under 10x magnification)",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "4-Prong Solitaire",
            bandWidth: "2mm",
            bandThickness: "1.5mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
        {
          id: 1,
          image:
            "https://images.pexels.com/photos/21235148/pexels-photo-21235148/free-photo-of-silver-pendant-with-an-emerald.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          name: "Emerald Halo Ring",
          outerDesc:
            "Stunning emerald center stone surrounded by a halo of brilliant-cut diamonds for extra sparkle and elegance.",
          price: "2,499.99",
          material: "18K White Gold",
          shortDesc:
            "This halo ring features a vibrant emerald encircled by dazzling diamonds, all set in polished 18K white gold. A luxurious and eye-catching piece perfect for formal occasions.",
          shortSpecifications: {
            Material: "18K White Gold",
            CenterStone: "Emerald",
            Halo: "0.50 Carat Diamonds",
            Clarity: "VS2",
          },
          longDesc: {
            first:
              "This elegant halo ring is centered around a captivating emerald gemstone, known for its deep green hue and symbolic ties to renewal and love. The emerald's mesmerizing color immediately captures the eye, offering a sense of natural beauty and refined luxury. As the focal point of the ring, the emerald lends a sense of individuality and timeless charm to the overall design.",
            second:
              "Encircling the emerald is a halo of meticulously set round brilliant diamonds, chosen for their clarity and sparkle. These diamonds enhance the emerald’s rich color, creating a dazzling contrast that elevates the ring’s brilliance and glamour. The halo design also adds dimension and presence, making the ring an eye-catching statement piece, whether worn daily or on special occasions.",
            third:
              "The band is expertly crafted from 18K white gold, offering both durability and a clean, modern finish. To enhance its shine and protect against wear, the white gold is coated in rhodium—an element prized for its reflective quality and resistance to tarnish. This thoughtful choice of materials ensures that the ring remains luminous and strong, even with everyday use.",
            fourth:
              "With its luxurious materials and classic design, this ring is more than just an accessory—it’s a meaningful expression of elegance and enduring love. Whether given as a heartfelt gift or selected as an engagement ring, it offers heirloom quality that can be passed down through generations. Its timeless appeal makes it a treasured piece in any fine jewelry collection.",
          },
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "0.50 carat (halo diamonds)",
            diamondShape: "Round Brilliant Cut",
            diamondColor: "G (Near Colorless)",
            diamondClarity: "VS2",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "Halo",
            bandWidth: "2.2mm",
            bandThickness: "1.6mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
        {
          id: 2,
          image:
            "https://boldiful.com/cdn/shop/products/ClassicCushionCutGoldRing_3_1024x1024.jpg?v=1652269326",
          name: "Classic Cushion Cut Ring",
          outerDesc:
            "A timeless cushion cut diamond set on a clean, polished white gold band. Classic beauty redefined.",
          price: "3,199.99",
          material: "18K White Gold",
          shortDesc:
            "The cushion cut center diamond delivers both brilliance and vintage charm. Set on a sleek white gold band, it's ideal for those who love a blend of old and new.",
          shortSpecifications: {
            Material: "18K White Gold",
            Diamond: "1.00 Carat",
            Cut: "Cushion",
            Clarity: "VS1",
          },
          longDesc: {
            first:
              "This exquisite ring features a captivating emerald gemstone as its focal point, instantly drawing attention with its rich green hue and natural brilliance. Emeralds have long been associated with beauty, renewal, and timeless elegance, and in this design, the gemstone takes center stage. Its vibrant color adds a touch of luxury and distinction, making it an ideal choice for those who appreciate refined, statement-making jewelry.",
            second:
              "Surrounding the central emerald is a halo of round brilliant diamonds, each carefully set to enhance the stone's natural glow. This halo not only amplifies the visual impact of the centerpiece but also adds a layer of sparkle and glamour. The contrast between the deep green emerald and the icy brilliance of the diamonds creates a harmonious and eye-catching effect, perfect for special occasions or as a standout engagement ring.",
            third:
              "The ring's setting is meticulously crafted from 18K white gold, a precious metal prized for its strength, purity, and timeless appeal. To further enhance its luster and resistance to tarnish, the white gold is rhodium-plated, giving the ring a polished, mirror-like finish. This choice of materials ensures the ring is not only visually stunning but also built to withstand everyday wear while maintaining its brilliance for years to come.",
            fourth:
              "Altogether, this halo ring is more than just a piece of jewelry—it’s a symbol of elegance and enduring style. Whether chosen as a meaningful gift or as an heirloom-quality engagement ring, it conveys a sense of sophistication and sentimental value. Its timeless design ensures it will be cherished across generations, making it a treasured addition to any fine jewelry collection.",
          },
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "1.00 carat",
            diamondShape: "Cushion Cut",
            diamondColor: "F (Colorless)",
            diamondClarity: "VS1",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "Solitaire",
            bandWidth: "2.1mm",
            bandThickness: "1.5mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
        {
          id: 3,
          image:
            "https://mollyjewelryus.com/wp-content/uploads/2024/04/Oval-Cut-Lab-Diamond-Wedding-Ring-Twisted-Design-Promise-Ring-6.jpg",
          name: "Twist Band Diamond Ring",
          outerDesc:
            "Unique twist band design with a sparkling round brilliant diamond at the center. A modern romantic piece.",
          price: "1,749.00",
          material: "18K White Gold",
          shortDesc:
            "With a delicate twisted band and a bright center diamond, this ring offers a fresh take on classic solitaire styling.",
          shortSpecifications: {
            Material: "18K White Gold",
            Diamond: "0.70 Carat",
            Cut: "Round Brilliant",
            Clarity: "VS2",
          },
          longDesc: {
            first:
              "The Twist Band Diamond Ring is a beautiful fusion of contemporary design and timeless elegance. At its core lies a round brilliant-cut diamond, celebrated for its exceptional sparkle and classic appeal. This central diamond draws immediate attention, serving as a radiant focal point that reflects light from every angle, symbolizing clarity, commitment, and enduring beauty.",
            second:
              "What sets this ring apart is its distinctive twist-style band, which gracefully wraps around the center stone. The intertwining design represents the unity and connection of two lives, making it a meaningful choice for romantic occasions. The twist adds a modern flair while still honoring traditional symbolism, making the ring both stylish and sentimental.",
            third:
              "Crafted from polished 18K white gold, the ring boasts a sleek and luxurious finish. White gold is known not only for its sophisticated appearance but also for its durability, making it suitable for everyday wear. The high polish of the metal enhances the brilliance of the diamond, ensuring that the entire piece shimmers with understated elegance.",
            fourth:
              "Whether chosen for an engagement, a milestone anniversary, or simply as a refined expression of personal style, the Twist Band Diamond Ring makes a lasting impression. Its thoughtful design and high-quality craftsmanship ensure that it will be treasured for years to come, offering a perfect blend of beauty, meaning, and modern sophistication.",
          },
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "0.70 carat",
            diamondShape: "Round Brilliant Cut",
            diamondColor: "G (Near Colorless)",
            diamondClarity: "VS2",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "Twist Band Solitaire",
            bandWidth: "2mm",
            bandThickness: "1.4mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
        {
          id: 4,
          image:
            "https://5.imimg.com/data5/SELLER/Default/2023/9/343962848/KZ/EL/QJ/164203800/il-794xn-5286148722-arjm-500x500.jpg",
          name: "Princess Cut Engagement Ring",
          outerDesc:
            "A dazzling princess cut diamond ring with clean lines and maximum sparkle. Designed to impress.",
          price: "2,999.99",
          material: "18K White Gold",
          shortDesc:
            "The bold geometry of the princess cut diamond gives this ring an edge, while the polished white gold band ensures timeless elegance.",
          shortSpecifications: {
            Material: "18K White Gold",
            Diamond: "1.10 Carat",
            Cut: "Princess",
            Clarity: "VS1",
          },
          longDesc: {
            first:
              "This striking ring features a 1.10-carat princess cut diamond, making it an ideal choice for those who appreciate bold geometry and brilliant sparkle. The princess cut, known for its sharp angles and square silhouette, offers a contemporary twist on the traditional diamond shape. Its multiple facets are designed to maximize light return, creating a dazzling display that catches the eye from every direction.",
            second:
              "The diamond is securely held in a classic prong setting, which allows maximum light to enter the stone while keeping the lines of the ring clean and elegant. This setting not only showcases the diamond’s sharp edges and fire but also adds height and presence to the ring. The open design of the prongs accentuates the modern structure of the princess cut, emphasizing its crisp, defined form.",
            third:
              "Complementing the diamond is a sleek band crafted from polished white gold. The white gold provides a neutral, luminous backdrop that enhances the brilliance of the stone without overpowering it. Its reflective surface adds to the overall sparkle, while the durability of the metal ensures lasting beauty and wearability. The combination of the polished finish and geometric styling gives the ring a fresh, modern aesthetic.",
            fourth:
              "Altogether, this ring is a perfect balance of structure and sophistication. Whether chosen as an engagement ring or a personal celebration of style, its bold design and timeless materials make it a standout piece. It speaks to someone who values clean lines, contemporary elegance, and the enduring allure of a beautifully cut diamond.",
          },
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "1.10 carat",
            diamondShape: "Princess Cut",
            diamondColor: "F (Colorless)",
            diamondClarity: "VS1",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "4-Prong Solitaire",
            bandWidth: "2.3mm",
            bandThickness: "1.5mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
        {
          id: 5,
          image:
            "https://i.etsystatic.com/27703447/r/il/0dd023/3806898591/il_570xN.3806898591_pnlc.jpg",
          name: "Vintage Marquise Ring",
          outerDesc:
            "A vintage-inspired ring featuring a marquise cut diamond and intricate milgrain detailing.",
          price: "2,249.99",
          material: "18K White Gold",
          shortDesc:
            "This ring brings a touch of vintage elegance with its elongated marquise diamond and antique-style band detailing.",
          shortSpecifications: {
            Material: "18K White Gold",
            Diamond: "0.85 Carat",
            Cut: "Marquise",
            Clarity: "VS1",
          },
          longDesc: `Inspired by vintage designs, this ring features a beautifully cut 0.85-carat marquise diamond. Set in a detailed 18K white gold band with milgrain accents, it's perfect for those who adore classic elegance with a hint of antique charm.`,
          techSpecification: {
            metal: "18K White Gold (75% pure gold)",
            diamondWeight: "0.85 carat",
            diamondShape: "Marquise Cut",
            diamondColor: "F (Colorless)",
            diamondClarity: "VS1",
            diamondCutGrade: "Excellent",
            diamondPolish: "Excellent",
            diamondSymmetry: "Excellent",
            settingStyle: "Vintage-Inspired",
            bandWidth: "2mm",
            bandThickness: "1.5mm",
            ringSizeRange: "Available in sizes 4-10 (includes half sizes)",
            certification: "GIA (Gemological Institute of America)",
            engravingAvailable: true,
            engravingDescription:
              "Free personalized engraving available (up to 20 characters)",
            engravingMaxCharacters: 20,
            finish:
              "High-polish rhodium plating for extra brightness and durability",
          },
          shipping: {
            processingTime: "1-3 business days",
            standardShipping: "3-5 business days (Free on orders over $500)",
            expressShipping: "1-2 business days ($25)",
            internationalShipping: "7-14 business days (Varies by location)",
          },
        },
      ],
    };
  },
  provide() {
    return {
      allProducts: this.dummyProduct,
    };
  },
};
</script>

<style>
body {
  background-color: #f8f2ec;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.parent-div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Make the nav stick to the top */
:deep(.nav) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Add padding to the main content to prevent it from being hidden under the nav */
:deep(router-view) {
  margin-top: 80px; /* Adjust this value based on your nav height */
}
</style>
