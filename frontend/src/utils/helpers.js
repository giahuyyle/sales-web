export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};
  
export const calculateTax = (amount, taxRate = 0.1) => {
    return amount * taxRate;
};

export const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
        switch (sortBy) {
        case 'price':
            return a.price - b.price;
        case 'popularity':
            return b.popularity - a.popularity;
        case 'name':
        default:
            return a.name.localeCompare(b.name);
        }
    });
};

export const filterProducts = (products, filters) => {
    const { showAvailable, showOutOfStock, minPrice, maxPrice } = filters;

    return products.filter(product => {
        const availabilityFilter = 
        (showAvailable && product.availability === 'Available') ||
        (showOutOfStock && product.availability === 'Out of Stock');
        const priceFilter = product.price >= minPrice && product.price <= maxPrice;
        return availabilityFilter && priceFilter;
    });
};