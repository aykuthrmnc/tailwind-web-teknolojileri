const Hazirlayanlar = () => {
  // return (
  //   <div className="text-center divide-y divide-gray-100 dark:divide-gray-800">
  //     <h1 className="text-4xl pb-5">Hazırlayanlar</h1>
  //     <div className="flex snap-x snap-mandatory grid-cols-2 gap-3 overflow-x-auto sm:grid lg:grid-cols-3 lg:gap-7 xl:grid-cols-5">
  //       {users?.map((user) => (
  //         <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
  //           <button className="slider-item group hover:!border-sky-500 dark:border-gray-700">
  //             <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-sky-500">
  //               <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-sky-500/10"></span>
  //               <FaUser className="text-sky-500" size="40" />
  //             </span>
  //             <span className="inline-flex h-12 items-center bg-sky-500 px-3 text-white transition-colors group-hover:bg-sky-700">{user.name}</span>
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-800">
      <h1 className="pb-5 text-center text-4xl">Hazırlayanlar</h1>
      {/* Takım Üyeleri */}
      <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-2">
        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-16 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person1.jpeg" alt="Person1" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Aykut Harmancı</p>
              <p className="truncate text-base font-medium text-slate-500">aykuthrmnc@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-16 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person2.jpeg" alt="Person2" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Bahadır Poroy</p>
              <p className="truncate text-base font-medium text-slate-500">Email</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-16 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person3.jpeg" alt="Person3" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Mehmet Aral Işık</p>
              <p className="truncate text-base font-medium text-slate-500">mehmetaral06@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-16 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person4.jpeg" alt="Person4" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Melisa Akgün</p>
              <p className="truncate text-base font-medium text-slate-500">melisakgun00@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-20 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person5.jpeg" alt="Person5" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Muhammed Said Taylan</p>
              <p className="truncate text-base font-medium text-slate-500">saidtaylann@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-24 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person6.jpeg" alt="Person6" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Osman Emre Çevirken</p>
              <p className="truncate text-base font-medium text-slate-500">emrecevv@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border-2 border-gray-100 bg-white px-8 py-4">
          <div className="mr-8 flex py-4 first:pt-0 last:pb-0">
            <img className="h-20 w-20 rounded-full" src="/hazirlayanlar/person7.jpg" alt="Person7" />
            <div className="ml-3 mt-5 overflow-hidden">
              <p className="text-base font-medium text-slate-900">Tarık Safa Kütük</p>
              <p className="truncate text-base font-medium text-slate-500">tariksafakutuk1905@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hazirlayanlar;
