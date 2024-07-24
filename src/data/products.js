import Papa from 'papaparse';

// Function to fetch and parse the CSV
const fetchAndParseCSV = async () => {
  const response = await fetch('/stocklist/StockList.csv');
  const csvText = await response.text();
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

// Function to prepare the product data
export const getProductsData = async () => {
  console.log("trying to fetch csv");
  const data = await fetchAndParseCSV();
  const products = data.map(item => {
    console.log("Mapping Item", item)
    const imagePaths = [];
    for (let i = 1; i <= 10; i++) {
      const imagePath = `/Items/${item.Category}/${item.SubCategory}/${item.ID}/img${i}.jpg`;
      imagePaths.push(imagePath);
    }

    // Extract size options dynamically
    const sizeOptions = [];
    for (const key in item) {
      if (key.startsWith('size:') && item[key] !== '') {
        sizeOptions.push({ size: key.replace('size:', ''), value: item[key] });
      }
    }

    return {
      name: item.Description,
      description: item.Description,
      price: item.Price,
      img: imagePaths[0], // The first image as the showcase image
      images: imagePaths, // Array of all images
      Category: item.Category,
      SubCategory: item.SubCategory,
      // sizeTotal: item["size:total"],
      sizeOptions: sizeOptions // Include size options in the product object
    };
  });
  console.log("products ARE", products);
  return products;
};
