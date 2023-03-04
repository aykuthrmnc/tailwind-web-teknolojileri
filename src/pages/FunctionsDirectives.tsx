const FunctionsDirectives = () => {
  return (
    <>
      <h2 className="mb-3 text-center text-3xl font-semibold leading-relaxed dark:text-white">Direktifler</h2>
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-6 flex flex-col gap-5 lg:col-span-4">
            <h3 className="text-2xl">@tailwind</h3>
            <p className="text-justify">
              Tailwind bileşenlerini eklemek için kullanmak gereklidir. Tailwind kurulumundan sonra CSS dosyasının başına eklemek yeterlidir.
            </p>
          </div>
          <div className="col-span-4 col-start-2 lg:col-span-2">
            <img src="/functionsdirectives/1.png" alt="@tailwind örneği" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-6 flex flex-col gap-5 lg:col-span-4">
            <h3 className="text-2xl">@layer</h3>
            <p className="text-justify">Tailwind'e bir dizi özel stilin hangi layera ait olduğunu söylemek için @layer yönergesi kullanılır.</p>
            <p>@layer katmanları sırasıyla base, components, utilities katmanlarıdır.</p>
          </div>
          <div className="col-span-4 col-start-2 lg:col-span-2">
            <img src="/functionsdirectives/2.png" alt="@layer örneği" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-6 flex flex-col gap-5 lg:col-span-6">
            <h3 className="text-2xl">@apply</h3>
            <p className="text-justify">Mevcut herhangi bir yardımcı sınıfını kendi özel CSS'nize satır içi olarak eklemek için kullanılır.</p>
            <p className="text-justify">
              Özel CSS yazmanız gerektiğinde kullanılır ancak yine de tasarım belirteçlerinizle çalışmak ve HTML'nizde kullanmaya alıştığınız
              sözdizimini kullanmak istediğinizde kullanışlıdır.
            </p>
          </div>
          <div className="col-span-full flex flex-wrap justify-center gap-5">
            <img src="/functionsdirectives/3.png" className="h-96 w-auto object-contain" alt="@apply örneği" />
            <img src="/functionsdirectives/4.png" className="h-96 w-auto object-contain" alt="@apply örneği" />
          </div>
        </div>
      </div>
      <h2 className="mb-3 mt-24 text-center text-3xl font-semibold leading-relaxed dark:text-white">Fonksiyonlar</h2>
      <div className="flex flex-col gap-24">
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-6 flex flex-col gap-5 lg:col-span-4">
            <h3 className="text-2xl">theme()</h3>
            <p className="text-justify">
              Tailwind yapılandırma değişkenlerine erişmek için kullanılır. Yandaki örnekte CSS ile birlikte kullanımı gösterilmektedir.
            </p>
          </div>
          <div className="col-span-4 col-start-2 lg:col-span-2">
            <img src="/functionsdirectives/5.png" alt="theme() örneği" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-6 flex flex-col gap-5 lg:col-span-4">
            <h3 className="text-2xl">@screen</h3>
            <p className="text-justify">
              Ekranın boyutuna göre işlev gerçekleştirmek için, ara noktaların değerlerini CSS üzerinde çoğaltmak yerine ara noktaların adına göre
              başvuran medya sorguları oluşturmanıza olanak tanımaktadır.
            </p>
          </div>
          <div className="col-span-4 col-start-2 lg:col-span-2">
            <img src="/functionsdirectives/6.png" alt="@screen örneği" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionsDirectives;
