const catFoodImg = new URL('./assets/images/cat_food_bag_1785778344304.jpg', import.meta.url).href;
const dogFoodImg = new URL('./assets/images/dog_food_bag_1785778359044.jpg', import.meta.url).href;
const royalPetsLogoImg = new URL('./assets/images/royal_pets_logo_1785779312145.jpg', import.meta.url).href;

export const ASSETS = {
  logoSvg: royalPetsLogoImg,
  logoImage: royalPetsLogoImg,
  avatar: 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128',
  catFoodImage: catFoodImg,
  dogFoodImage: dogFoodImg,
  bottomLeftImage: 'https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png',
  bottomCenterImage: 'https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024',
  bottomRightImage: 'https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png'
};

export const CAT_FOOD_PRODUCT = {
  id: 'premium-cat-food',
  name: 'Premium Cat Food',
  price: 'Rp. 49.998',
  numericPrice: 49998,
  image: ASSETS.catFoodImage,
  rating: 4.9,
  reviewsCount: 420,
  description: 'Balanced, delicious purple formula cat food packed with essential vitamins, omega-3, and protein for adult cats.'
};

export const DOG_FOOD_PRODUCT = {
  id: 'nutritious-dog-food',
  name: 'Nutritious Dog Food',
  price: 'Rp. 69.998',
  numericPrice: 69998,
  image: ASSETS.dogFoodImage,
  rating: 4.8,
  reviewsCount: 380,
  description: 'Premium teal recipe dog kibble enriched with rice, beef, chicken, and fresh vegetables for optimal health and vitality.'
};

