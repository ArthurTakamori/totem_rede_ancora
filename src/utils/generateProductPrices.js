export default function generateProductPrices(
  minOriginalPrice=100,
  maxOriginalPrice=5000,
  minDiscountPercentage=.1,
  maxDiscountPercentage=.65
) {
  const originalPrice =
    Math.random() * (maxOriginalPrice - minOriginalPrice) + minOriginalPrice;

  const discountPercentage =
    Math.random() * (maxDiscountPercentage - minDiscountPercentage) +
    minDiscountPercentage;

  const discountedPrice = originalPrice * (1 - discountPercentage);

  const roundedOriginalPrice = originalPrice;
  const roundedDiscountedPrice = discountedPrice;

  return {
    originalPrice: roundedOriginalPrice,
    discountedPrice: roundedDiscountedPrice,
  };
}
