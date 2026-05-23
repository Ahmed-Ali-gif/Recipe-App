import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#0f172a] text-white mt-20">
      <div class="max-w-7xl mx-auto px-6 py-14">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 class="text-3xl font-bold text-orange-500">
              Tasty<span class="text-white">Bite</span>
            </h2>

            <p class="text-gray-400 mt-4 leading-7">
              Discover delicious recipes from around the world. Cook smarter,
              eat better, and enjoy every bite.
            </p>

            <div class="flex gap-4 mt-6">
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                F
              </a>

              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                I
              </a>

              <a
                href="#"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
              >
                T
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-5">Quick Links</h3>

            <ul class="space-y-3 text-gray-400">
              <li>
                <a href="#" class="hover:text-orange-500 transition-all">
                  Home
                </a>
              </li>

              <li>
                <a href="#" class="hover:text-orange-500 transition-all">
                  Recipes
                </a>
              </li>

              <li>
                <a href="#" class="hover:text-orange-500 transition-all">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" class="hover:text-orange-500 transition-all">
                  Popular Dishes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-5">Categories</h3>

            <ul class="space-y-3 text-gray-400">
              <li>🍕 Pizza</li>
              <li>🍔 Burgers</li>
              <li>🥗 Healthy</li>
              <li>🍰 Desserts</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-5">Newsletter</h3>

            <p class="text-gray-400 leading-7">
              Subscribe to get weekly recipe updates and cooking tips.
            </p>

            <form class="mt-5 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                class="bg-white/10 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
              />

              <button class="bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-medium transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © 2026 TastyBite. All rights reserved.
          </p>

          <div class="flex gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-orange-500 transition-all">
              Privacy Policy
            </a>

            <a href="#" class="hover:text-orange-500 transition-all">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
