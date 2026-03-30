// app/product/[id]/page.js
import Navbar from "@/components/Navbar";

async function getProductDetail(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}

export default async function ProductDetail({ params }) {
    const { id } = params;
    const product = await getProductDetail(id);

    return (
        <div>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Ảnh lớn */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-96" />
                    </div>

                    {/* Nội dung chi tiết */}
                    <div className="space-y-4">
                        <span className="text-sm uppercase text-gray-400 tracking-widest">{product.category}</span>
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-2xl font-bold text-green-600">${product.price}</p>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>

                        <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}