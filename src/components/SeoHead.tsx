import { useEffect } from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  sku: string;
}

/**
 * Injects a Product JSON-LD structured data script into <head>.
 * Automatically cleans up on unmount or when props change.
 */
export function ProductSchema({
  name,
  description,
  price,
  rating,
  reviewCount,
  imageUrl,
  sku,
}: ProductSchemaProps) {
  useEffect(() => {
    const scriptId = `schema-product-${sku}`;

    // Remove any existing script with this ID to prevent duplicates
    document.getElementById(scriptId)?.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      description,
      image: imageUrl,
      sku,
      brand: { '@type': 'Brand', name: "RoyalPet's" },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        price,
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: "RoyalPet's" },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    });

    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [name, description, price, rating, reviewCount, imageUrl, sku]);

  return null;
}
