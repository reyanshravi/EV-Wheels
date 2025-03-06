import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* 🚀 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white rounded-xl p-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Power Your Ride with EvWheels</h1>
          <p className="text-lg mb-6">Explore high-quality EV batteries & accessories at the best prices.</p>
          <Link href="/products">
            <Button size="lg" className="bg-primary">Shop Now</Button>
          </Link>
        </div>
        <Image src="/vercel.svg" alt="Electric Vehicle" width={400} height={300} />
      </section>

      {/* 🏷️ Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg">
          <CardContent className="flex flex-col items-center p-6">
            <Image src="/next.svg" alt="Battery" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">EV Batteries</h3>
            <Link href="/products?category=batteries">
              <Button variant="outline" className="mt-3">Shop Now</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg">
          <CardContent className="flex flex-col items-center p-6">
            <Image src="/accessories.png" alt="Accessories" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">Accessories</h3>
            <Link href="/products?category=accessories">
              <Button variant="outline" className="mt-3">Shop Now</Button>
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg">
          <CardContent className="flex flex-col items-center p-6">
            <Image src="/next.svg" alt="Spare Parts" width={100} height={100} />
            <h3 className="text-xl font-semibold mt-4">Spare Parts</h3>
            <Link href="/products?category=spare-parts">
              <Button variant="outline" className="mt-3">Shop Now</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* 🔥 Featured Products */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Cards - Replace with dynamic data */}
          <Card className="hover:shadow-lg">
            <CardContent className="p-4">
              <Image src="/next.svg" alt="EV Battery" width={200} height={150} />
              <h3 className="text-lg font-semibold mt-4">Lithium-ion EV Battery</h3>
              <p className="text-primary font-bold mt-2">$299</p>
              <Link href="/products/1">
                <Button className="mt-3">View Details</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg">
            <CardContent className="p-4">
              <Image src="/globe.svg" alt="EV Accessories" width={200} height={150} />
              <h3 className="text-lg font-semibold mt-4">Smart Charger</h3>
              <p className="text-primary font-bold mt-2">$79</p>
              <Link href="/products/2">
                <Button className="mt-3">View Details</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg">
            <CardContent className="p-4">
              <Image src="/window.svg" alt="EV Spare Parts" width={200} height={150} />
              <h3 className="text-lg font-semibold mt-4">Motor Controller</h3>
              <p className="text-primary font-bold mt-2">$199</p>
              <Link href="/products/3">
                <Button className="mt-3">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
