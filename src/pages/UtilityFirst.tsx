import "assets/css/card.css";

const UtilityFirst = () => {
  return (
    <div className="flex flex-col gap-24">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          <h3 className="text-center text-2xl">CSS İle Tasarım</h3>
          <p className="text-justify">Açıklamalar...........</p>
        </div>
        <div className="col-span-6 md:col-span-3 mt-auto">
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
        <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
          <h3 className="text-center text-2xl">Tailwind Üzerinden Tasarım</h3>
          <p className="text-justify">Açıklamalar...........</p>
        </div>
        <div className="col-span-6 md:col-span-3 mt-auto">
          <div className="p-6 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              <img className="h-full w-[15rem] object-cover" src="/utilityfirst/anitkabir.jpg" alt="Anıtkabir" />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-medium text-black">Anıtkabir</div>
              <p className="text-slate-500">
                Anıtkabir, Türk Kurtuluş Savaşı'nın ve inkılaplarının önderi ve Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı Mustafa Kemal Atatürk'ün,
                Ankara Anıttepe'de (eski adıyla Rasattepe) bulunan anıt mezarıdır...
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 rounded p-2 text-white self-end">
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
