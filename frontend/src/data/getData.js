import { ref, get, getDatabase } from 'firebase/database';
import { app } from '../config/firebase';

const db = getDatabase(app);

export const getProducts = async () => {
  try {
    const productsRef = ref(db, 'products');
    const snapshot = await get(productsRef);
    
    if (snapshot.exists()) {
      // Convert Firebase object to array format
      const products = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...value
      }));
      console.log("success", products);
      return products;
    }
    
    console.log("fail")
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};