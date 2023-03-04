const HoverFocus = () => {
  return (
    <>
      {/* Hover Kullanımı */}
      <div className="flex w-full mt-8">
        <div className="w-full flex items-center justify-center">
          {/*Hover parametresiyle 400 değerinde olan renk değeri imleç üzerine geldiğinde 500 olarak değişiyor*/}
          <div className="p-6 max-w-sm mx-auto hover:bg-violet-500 bg-violet-400 rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              <img className="h-12 w-12" src="hover/touch-screen.png" alt="Hover Icon"></img>
            </div>
            <div>
              <div className="text-xl font-medium text-white">Hover Kullanımı</div>
              <p className="text-slate-800">İmlecinizi kutunun üzerine getiriniz!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Tasarımı Kod Görüntüsü*/}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          <div>
            {/*src içine verilen kod1 değişkeni en yukarıda import kısmında*/}
            <img className="h-90 w-90 py-10" src="hover/kod-1.png" alt="Kod1"></img>
          </div>
        </div>
      </div>

      {/* Focus Kullanımı */}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          {/*Focus parametresiyle üzerine tıklanıldığında input kutusu çevresinin rengi değişmektedir*/}
          <input
            className="focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 block
      bg-white border-2 border-gray-100 rounded-xl p-4 mt-1 placeholder-slate-400 text-black"
            placeholder="Bana odaklan"
          ></input>
          <button
            className="bg-violet-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black hover:bg-violet-500 
      active:bg-violet-700 py-3 mt-1 ml-8 px-12 ease-in-out transition-all rounded-xl text-white text-base font-bold"
          >
            Bana Odaklan
          </button>
        </div>
      </div>

      {/* Focus Tasarımı Kod Görüntüsü*/}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          <div>
            <img className="h-90 w-90 py-10" src="hover/kod-2.png" alt="Kod2"></img>
          </div>
        </div>
      </div>

      {/* Group Özelliği Kullanımı */}
      <div className="flex w-full mb-8">
        <div className="w-full flex items-center justify-center">
          {/*Group parametresi en dıştaki etikete verilerek parent oluşturulur ve içine koyulan elemanlara yine group ile erişilir*/}
          <button
            className="text-left group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-violet-500 hover:ring-violet-500"
          >
            <div className="flex items-center space-x-3">
              {/*Hover özelliğinin başındaki group ile imleç geldiğinde diğer group elemanlarıyla aynı anda rengi değişiyor*/}
              <svg
                className="h-6 w-6 text-violet-500 group-hover:stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {/*Hover özelliğinin başındaki group ile imleç geldiğinde diğer group elemanlarıyla aynı anda rengi değişiyor*/}
              <h3 className="text-slate-900 group-hover:text-white font-medium text-base">Yeni Proje</h3>
            </div>
            {/*Hover özelliğinin başındaki group ile imleç geldiğinde diğer group elemanlarıyla aynı anda rengi değişiyor*/}
            <p className="text-slate-500 group-hover:text-white text-sm">Çeşitli başlangıç şablonlarından yeni bir proje oluşturun.</p>
          </button>
        </div>
      </div>

      {/* Group Tasarımı Kodu */}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          <div>
            <img className="h-90 w-90 py-10" src="hover/kod-3.png" alt="Kod3"></img>
          </div>
        </div>
      </div>

      {/* Login Ekranı ve Buton Aktifliği Kullanımı*/}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="text-4xl font-semibold text-black">Hoşgeldiniz</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Lütfen Bilgilerinizi Giriniz.</p>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium text-black">Email</label>
                <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Email adresinizi giriniz"></input>
              </div>
              <div>
                <label className="text-lg font-medium text-black">Parola</label>
                <input
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Parolanızı giriniz"
                  type="password"
                ></input>
              </div>
              <div className="mt-8 flex justify-between items-center">
                <div className="flex gap-1">
                  <input type="checkbox" id="remember"></input>
                  <label className="font-medium text-base text-black" htmlFor="remember">
                    Parolayı Hatırla
                  </label>
                </div>
                <button className="font-medium text-base text-violet-500 ml-8">Parolamı Unuttum</button>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                {/* Active scale ile butona tıklandığında butonun boyutu değiştirilir, duration ile de o boyuta ne kadar zamanda geçeceği belirlenir, hover scale ile de imleç üzerine gelindiğinde butonun boyutu değiştirilir*/}
                <button className="active:scale-[.98] active:duration-70 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                  Giriş Yap
                </button>
                <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-70 hover:scale-[1.01] ease-in-out transition-all py-3 border-2 border-gray-100 rounded-xl text-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                      fill="#34A853"
                    />
                    <path
                      d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                      fill="#4A90E2"
                    />
                    <path
                      d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                      fill="#FBBC05"
                    />
                  </svg>
                  Google ile Devam Et
                </button>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base text-black">Hesabınız yok mu?</p>
                <button className="text-violet-500 text-base font-medium ml-2">Kayıt ol</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Ekranı Kod Görüntüsü*/}
      <div className="flex w-full">
        <div className="w-full flex items-center justify-center">
          <div>
            <img className="h-90 w-90 py-10" src="hover/kod-4.png" alt="Kod4"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverFocus;
