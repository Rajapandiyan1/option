import React from 'react'

function Navbar() {
  return (
    <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">

        {/* <!-- Logo --> */}
        <div class="flex space-x-4">
          <div>
            <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <svg class="h-8 w-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.93L12 17l-6.18 3.8L7 13.87 2 9l6.91-1.09L12 2z"/>
              </svg>
              <span class="font-bold">MyWebsite</span>
            </a>
          </div>

          {/* <!-- Primary Nav Links --> */}
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>

        {/* <!-- Secondary Nav (User account and CTA) --> */}
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Login</a>
        </div>

        {/* <!-- Mobile Button --> */}
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg class="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    {/* <!-- Mobile Menu --> */}
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      <a href="#" class="block py-2 px-4 text-sm bg-blue-500 text-white hover:bg-blue-400">Login</a>
    </div>
  </nav>
  )
}

export default Navbar