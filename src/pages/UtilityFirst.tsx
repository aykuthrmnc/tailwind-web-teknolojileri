import "assets/css/card.css";

const UtilityFirst = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 flex flex-col gap-5 md:col-span-3">
          <h3 className="text-center text-2xl">CSS İle Tasarım</h3>
          <p className="text-justify">
            CSS ile bir yapı oluştururken gereksiz çok fazla class ismi oluşturuyoruz. Kafa karışıklığı ve gereksiz boyut büyümesi gibi birçok soruna
            neden olmaktadır. Örnekte olduğu gibi oluşturulan card nesnesi için aşağıdaki kod örneği kadar yazmamız gerekmektedir. Bu durum ise aşırı
            özelleştirme gerektirmeyen projeler için ister istemez zaman kaybı oluşturmaktadır.
          </p>
        </div>
        <div className="col-span-6 mt-auto md:col-span-3">
          <div className="card">
            <div className="card-logo-wrapper">
              <img className="card-logo" src="/utilityfirst/anitkabir.jpg" alt="Anıtkabir" />
            </div>
            <div className="card-desc">
              <div className="card-title">Anıtkabir</div>
              <p className="card-subtitle">
                Anıtkabir, Türk Kurtuluş Savaşı'nın ve inkılaplarının önderi ve Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı Mustafa Kemal Atatürk'ün,
                Ankara Anıttepe'de (eski adıyla Rasattepe) bulunan anıt mezarıdır...
              </p>
              <button className="card-btn">Devamını Oku</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 pt-5">
          <img src="/utilityfirst/1.png" alt="" />
        </div>
        <div className="col-span-6 pt-5">
          <img src="/utilityfirst/3.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 flex flex-col gap-5 md:col-span-3">
          <h3 className="text-center text-2xl">Tailwind Üzerinden Tasarım</h3>
          <p className="text-justify">
            Tailwind CSS ise yardımcı programlarla iş yapar, kolay özelleştirilir, daha az boyut kaplar gibi sayısız avantajı vardır. Web’de bir şeye
            stil vermeniz gerektiğinde, CSS yazarsınız. Tailwind ile önceden var olan classları doğrudan HTML'nize uygulayarak öğeleri
            şekillendirirsiniz.
          </p>
          <p className="text-justify">
            Avantajlarından sadece birkaçı;
            <ul className="list-inside list-disc">
              <li>Class isimleri atamakla uğraşmıyoruz.</li>
              <li>CSS gereksiz büyümemiş oluyor.</li>
              <li>Değişiklik yaparken tereddütte kalmıyoruz.</li>
            </ul>
          </p>
        </div>
        <div className="col-span-6 mt-auto md:col-span-3">
          <div className="mx-auto flex flex-col items-center space-x-4 rounded-xl bg-white p-6 shadow-lg xl:flex-row">
            <div className="shrink-0">
              <img className="h-full w-[15rem] object-cover" src="/utilityfirst/anitkabir.jpg" alt="Anıtkabir" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-medium text-black">Anıtkabir</div>
              <p className="text-slate-500">
                Anıtkabir, Türk Kurtuluş Savaşı'nın ve inkılaplarının önderi ve Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı Mustafa Kemal Atatürk'ün,
                Ankara Anıttepe'de (eski adıyla Rasattepe) bulunan anıt mezarıdır...
              </p>
              <button className="self-end rounded bg-sky-500 p-2 text-white hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-700">
                Devamını Oku
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 pt-5">
          <img src="/utilityfirst/2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UtilityFirst;
