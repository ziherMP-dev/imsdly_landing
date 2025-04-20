import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  CheckCircle,
  TabletsIcon as Devices,
  FileStack,
  FolderIcon as FolderSort,
  LayoutGrid,
  MemoryStickIcon as SdCard,
  HardDrive,
  Usb,
} from "lucide-react"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-poppins text-[#1E88E5]">
                    Import Media Files from External Storage with Ease
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl font-inter">
                    Seamlessly import files from external storage devices to your computer with just a few clicks.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#1E88E5] hover:bg-[#1976D2] text-white">Download Free Trial</Button>
                  <Button
                    variant="outline"
                    className="border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white"
                  >
                    Buy Now - $30 Lifetime License
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/main_app.png"
                    alt="Imsdly App Screenshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Clean Redesign */}
        <section id="features" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins text-[#1E88E5]">
                  Key Features
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
                  Everything you need to manage and transfer your media files efficiently
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap -mx-4">
                {/* Feature 1 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#E3F2FD] rounded-full mb-4">
                      <Devices className="h-6 w-6 text-[#1E88E5]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">Universal Compatibility</h3>
                    <p className="text-gray-600 font-inter">
                      Works with all external storage types including SD cards, USB drives, and external hard drives.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#E3F2FD] rounded-full mb-4">
                      <FolderSort className="h-6 w-6 text-[#1E88E5]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">Smart Organization</h3>
                    <p className="text-gray-600 font-inter">
                      Automatically organize your files by date, type, or custom metadata for a perfectly structured
                      library.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#E3F2FD] rounded-full mb-4">
                      <FileStack className="h-6 w-6 text-[#1E88E5]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">Batch Renaming</h3>
                    <p className="text-gray-600 font-inter">
                      Rename multiple files at once with custom patterns and sequential numbering to save time.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mx-auto lg:mx-0">
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#E3F2FD] rounded-full mb-4">
                      <CheckCircle className="h-6 w-6 text-[#1E88E5]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">Verified Transfers</h3>
                    <p className="text-gray-600 font-inter">
                      Ensure your files transfer correctly with automatic verification and checksums for peace of mind.
                    </p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mx-auto lg:mx-0">
                  <div className="h-full bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="inline-flex items-center justify-center p-3 bg-[#E3F2FD] rounded-full mb-4">
                      <LayoutGrid className="h-6 w-6 text-[#1E88E5]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-poppins">Intuitive Interface</h3>
                    <p className="text-gray-600 font-inter">
                      Easy-to-use interface that makes file transfers simple for everyone with minimal learning curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins text-[#1E88E5]">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
                  Transfer your files in just five simple steps
                </p>
              </div>
            </div>
            <div className="mt-12 space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E88E5] text-white font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">Connect</h3>
                  </div>
                  <p className="text-gray-500 font-inter">
                    Plug in your external storage devices. Imsdly automatically detects all connected storage devices.
                  </p>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Connect devices to your computer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Select files to transfer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E88E5] text-white font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">Select</h3>
                  </div>
                  <p className="text-gray-500 font-inter">
                    Choose which files to transfer. Filter by date, file type, or use the smart selection tools.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E88E5] text-white font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">Organize</h3>
                  </div>
                  <p className="text-gray-500 font-inter">
                    Select where to save your files and how to organize them. Create folders by date, type, or custom
                    rules.
                  </p>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Organize your files"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Rename your files"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E88E5] text-white font-bold">
                      4
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">Rename (Optional)</h3>
                  </div>
                  <p className="text-gray-500 font-inter">
                    Batch rename your files with custom patterns, sequential numbering, or based on metadata.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E88E5] text-white font-bold">
                      5
                    </div>
                    <h3 className="text-2xl font-bold font-poppins">Transfer</h3>
                  </div>
                  <p className="text-gray-500 font-inter">
                    Start the transfer process. Imsdly verifies each file to ensure it's transferred correctly.
                  </p>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Transfer and verify your files"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Device Support Section */}
        <section id="devices" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins text-[#1E88E5]">
                  Device Support
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
                  Compatible with all major storage types and devices
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center p-6">
                  <SdCard className="h-12 w-12 text-[#1E88E5] mb-4" />
                  <CardTitle className="text-center font-poppins text-base">SD Cards</CardTitle>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center p-6">
                  <Usb className="h-12 w-12 text-[#1E88E5] mb-4" />
                  <CardTitle className="text-center font-poppins text-base">USB Drives</CardTitle>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center p-6">
                  <HardDrive className="h-12 w-12 text-[#1E88E5] mb-4" />
                  <CardTitle className="text-center font-poppins text-base">External SSDs</CardTitle>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center p-6">
                  <HardDrive className="h-12 w-12 text-[#1E88E5] mb-4" />
                  <CardTitle className="text-center font-poppins text-base">Hard Drives</CardTitle>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins text-[#1E88E5]">
                  Simple Pricing
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
                  One price, lifetime access, no subscriptions
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Card className="w-full max-w-md border-none shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader className="text-center bg-[#1E88E5] text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-poppins">Lifetime License</CardTitle>
                  <CardDescription className="text-white/90 font-inter">
                    One-time payment, forever access
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold font-poppins">$30</span>
                    <span className="text-gray-500 ml-2 font-inter">one-time</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00ACC1] mr-2" />
                      <span className="font-inter">All features included</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00ACC1] mr-2" />
                      <span className="font-inter">Free updates for life</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00ACC1] mr-2" />
                      <span className="font-inter">Use on 1 computer</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#00ACC1] mr-2" />
                      <span className="font-inter">Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-[#1E88E5] hover:bg-[#1976D2]">Buy Now</Button>
                  <p className="text-xs text-center text-gray-500 mt-4 font-inter">30-day money-back guarantee</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 bg-[#1E88E5] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins">
                  Stay Updated
                </h2>
                <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-inter">
                  Subscribe to our newsletter for updates, tips, and exclusive offers
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
                  />
                  <Button className="bg-white text-[#1E88E5] hover:bg-white/90">Subscribe</Button>
                </form>
                <p className="text-xs text-white/80 font-inter">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileStack className="h-6 w-6 text-[#1E88E5]" />
                <span className="text-xl font-bold">Imsdly</span>
              </div>
              <p className="text-sm text-gray-400 font-inter">
                The easiest way to import media files from external storage devices to your computer.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-poppins">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-gray-400 hover:text-white transition-colors font-inter"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-sm text-gray-400 hover:text-white transition-colors font-inter"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors font-inter">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 font-poppins">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-inter">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-inter">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-inter">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-400 text-center font-inter">
              &copy; {new Date().getFullYear()} Imsdly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
