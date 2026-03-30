import Navbar from "@/Component/Navbar";
import ProductCard from "@/Component/ProductCard";

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}

export default async function HomePage() {
    const products = await getProducts();

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold p-6 text-center">Our Products</h1>

                {/* Grid Layout Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {products.map(item => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            </div>
        </main>
    );
}