export default function generateProductPrices(
  minOriginalPrice=100,
  maxOriginalPrice=5000,
  minDiscountPercentage=.1,
  maxDiscountPercentage=.65
) {
  // Generate random original price
  const originalPrice =
    Math.random() * (maxOriginalPrice - minOriginalPrice) + minOriginalPrice;

  // Generate random discount percentage
  const discountPercentage =
    Math.random() * (maxDiscountPercentage - minDiscountPercentage) +
    minDiscountPercentage;

  // Calculate discounted price
  const discountedPrice = originalPrice * (1 - discountPercentage);

  // Round prices to two decimal places
  const roundedOriginalPrice = originalPrice;
  const roundedDiscountedPrice = discountedPrice;

  return {
    originalPrice: roundedOriginalPrice,
    discountedPrice: roundedDiscountedPrice,
  };
}
