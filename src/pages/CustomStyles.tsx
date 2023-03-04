const CustomStyles = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 lg:col-span-4 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Tema Özelleştirme</h3>
          <p className="text-justify">
            Renk, aralık, yazı veya responsive tasarım ölçeklendirme değerlerini değiştirmek veya ekstra olarak üretmek için tailwind.config.js isimli
            dosyanın içinde yan kısımdaki resimde görüldüğü gibi değişiklikler eklenmektedir.
          </p>
          <p className="text-justify">
            "extend" kısmının altına eklenen değerler ekstra olarak üretilirken, direkt olarak "theme" altında tanımlanan değerler varolan değeri
            değiştirmeyi sağlamaktadır.
          </p>
        </div>
        <div className="col-start-2 col-span-4 lg:col-span-2">
          <img src="/customstyles/1.png" alt="Tema Özelleştirme" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Ekstra Değerler Kullanma</h3>
          <p className="text-justify">
            Tailwind CSS içerisinde bulunan stil tanımlamaların (renk, yazı boyutu vb.) dışına çıkmak da mümkündür. Kesin değerler tanımlamak için
            altta verilen örnekte olduğu gibi köşeli parantez içinde istenilen değeri kullanma özgürlüğü bulunmaktadır. Tailwind CSS değer ataması
            yapıldığı gibi, "[mask-type:luminance]" tarzında özellik tanımı da yapılabilme özgürlüğünü bize sunmaktadır.
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-3">
          <div className="bg-[#3E54AC] p-[15px] text-[20px] text-[rgb(236,242,255)] [border-width:5px] [border-color:#bface2] before:content-['Tailwind_'] hover:bg-[#655dbb]">
            CSS
          </div>
          <img src="/customstyles/2.png" alt="Ekstra Değerler Kullanma" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 lg:col-span-4 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Temel Stiller Ekleme</h3>
          <p className="text-justify">
            Tailwind CSS ile gelen varsayılan değerleri değiştirmek için (metin rengi, arka plan rengi, yazı tipi, yazı fontu vb.), base layer
            üzerinde değişiklik yapmanıza imkan sunmaktadır. CSS dosyası üzerinde yandaki fotoğrafta olduğu gibi değişiklik yapmak yeterlidir.
          </p>
        </div>
        <div className="col-start-2 col-span-4 lg:col-span-2">
          <img src="/customstyles/3.png" alt="Temel Stiller Ekleme" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Bileşen Sınıfları Ekleme</h3>
          <p className="text-justify">
            Proje üzerine eklemek istenilen daha karmaşık sınıflar için bileşenler katmanı üzerinden kendi bileşenlerinizi oluşturmanıza imkan
            sağlamaktadır. CSS dosyasına direkt olarak dahil edilip kullanılabilmektedir. Aşağıdaki örnekte olduğu gibi @apply ve normal CSS kullanımı
            tarzına benzer şekilde kullanım sunar.
          </p>
          <p className="text-justify">
            Bu bileşenlerle beraber gerektiği durumlarda bu bileşendeki bazı özellikleri ezmek için ekstra sınıfları HTML dosyası üzerinde ekleyip
            kullanılabilmektedir.
          </p>
        </div>
        <div className="col-span-6 flex flex-col gap-3">
          <img src="/customstyles/4.png" alt="Bileşen Sınıfları Ekleme" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 lg:col-span-4 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Yardımcı Sınıflar Ekleme</h3>
          <p className="text-justify">
            Projenizde kullanmak istediğiniz ve Tailwind'in kullanıma hazır yardımcı sınıfları içermediği bir CSS özelliği olduğunda yararlı
            olabilmektedir.
          </p>
        </div>
        <div className="col-start-2 col-span-4 lg:col-span-2 flex flex-col gap-3">
          <img src="/customstyles/5.png" alt="Yardımcı Sınıflar Ekleme" />
        </div>
        <div className="col-span-6 grid lg:grid-cols-2 gap-3">
          <div className="card text-center bg-slate-200 dark:bg-gray-800 dark:text-white">
            <div className="card-body">
              <img src="/customstyles/6.jpg" className="filter-none" alt="Gray Scale (0%) örneği" />
              <div>Gray Scale (0%)</div>
            </div>
          </div>
          <div className="card text-center bg-slate-200 dark:bg-gray-800 dark:text-white">
            <div className="card-body">
              <img src="/customstyles/6.jpg" className="filter-grayscale" alt="Gray Scale (100%) örneği" />
              <div>Gray Scale (100%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomStyles;
