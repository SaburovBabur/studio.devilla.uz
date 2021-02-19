import React from "react";

function WorkedCompanies() {
  return (
    <section className="px-5 md:px-24">
      <div className="py-12 | flex items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="rounded-full p-6 px-12 text-4xl inline-block | bg-clip-text bg-gradient-to-br from-blutter to-blue-500 text-transparent | relative z-20">
            Biz bilan Ishlaganlar
          </h1>
          <p className="w-12 h-2 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 text-center"></p>
        </div>
      </div>

      <div class="container px-8 mx-auto my-5 sm:px-12 lg:px-20">
        <div class="grid items-center justify-center grid-cols-12 gap-y-8">
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/disney-plus.svg"
              alt="Disney Plus"
              class="block object-contain h-12"
            />
          </div>
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/google.svg"
              alt="Google"
              class="block object-contain h-9"
            />
          </div>
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/hubspot.svg"
              alt="Hubspot"
              class="block object-contain h-9"
            />
          </div>
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/youtube.svg"
              alt="Youtube"
              class="block object-contain h-7 lg:h-8"
            />
          </div>
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/slack.svg"
              alt="Slack"
              class="block object-contain h-9"
            />
          </div>
          <div class="flex items-center justify-center col-span-6 sm:col-span-4 md:col-span-6 xl:col-span-2">
            <img
              src="https://cdn.devdojo.com/tails/images/shopify.svg"
              alt="Shopify"
              class="block object-contain h-9"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkedCompanies;
